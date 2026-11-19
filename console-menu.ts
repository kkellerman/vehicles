import readline from 'node:readline';
import { SportsCar, SUV, Crossover, Truck, PassengerCar } from './vehicles.js';
import catalog from './catalog.js';
import type { CatalogVehicle, VehicleInput } from './vehicles.js';

type VehicleConstructor = new (vehicle: VehicleInput) => VehicleInput & { describe(): string };

interface ComparisonField {
  label: string;
  property: keyof VehicleInput;
}

interface VehicleCategory {
  name: string;
  VehicleClass: VehicleConstructor;
  models: CatalogVehicle[];
  comparisonFields: ComparisonField[];
}

// Each category connects a menu label to its class and catalog data.
const categories: VehicleCategory[] = [
  {
    name: '🏎️ Sports car',
    VehicleClass: SportsCar,
    models: catalog.sportsCars,
    comparisonFields: [
      { label: 'Top speed', property: 'topSpeed' },
      { label: '0-60 mph', property: 'zeroToSixty' },
    ],
  },
  {
    name: '🚙 SUV',
    VehicleClass: SUV,
    models: catalog.suvs,
    comparisonFields: [
      { label: 'Seating options', property: 'seatingDetails' },
      { label: 'Cargo capacity', property: 'cargoCapacity' },
    ],
  },
  {
    name: '🚗 Crossover',
    VehicleClass: Crossover,
    models: catalog.crossovers,
    comparisonFields: [{ label: 'Cargo capacity', property: 'cargoCapacity' }],
  },
  {
    name: '🛻 Truck',
    VehicleClass: Truck,
    models: catalog.trucks,
    comparisonFields: [{ label: 'Towing capacity', property: 'towingCapacity' }],
  },
  {
    name: '🚘 Passenger car',
    VehicleClass: PassengerCar,
    models: catalog.passengerCars,
    comparisonFields: [{ label: 'Style', property: 'style' }],
  },
];

const sharedComparisonFields: ComparisonField[] = [
  { label: 'Year', property: 'year' },
  { label: 'Base MSRP', property: 'basePrice' },
  { label: 'Powertrain', property: 'powertrain' },
  { label: 'Drivetrain', property: 'drivetrain' },
  { label: 'Horsepower', property: 'horsepower' },
  { label: 'Fuel economy (combined)', property: 'fuelEconomy' },
  { label: 'Max seating', property: 'maxSeating' },
  { label: 'Resale estimate', property: 'resaleValue' },
];

function comparisonValue(vehicle: VehicleInput, property: keyof VehicleInput): string {
  const value = vehicle[property];
  if (value == null || value === '') return 'Unavailable';
  if (property === 'basePrice') {
    const note = vehicle.basePriceNote ? ` (${vehicle.basePriceNote})` : '';
    return `$${Number(value).toLocaleString('en-US')}${note}`;
  }
  return String(value);
}

function displayComparison(firstVehicle: VehicleInput, secondVehicle: VehicleInput, category: VehicleCategory): void {
  const firstName = `${firstVehicle.make} ${firstVehicle.model}`;
  const secondName = `${secondVehicle.make} ${secondVehicle.model}`;
  const fields = sharedComparisonFields.concat(category.comparisonFields);
  const rows = fields.map(function (field) {
    return {
      Detail: field.label,
      [firstName]: comparisonValue(firstVehicle, field.property),
      [secondName]: comparisonValue(secondVehicle, field.property),
    };
  });

  console.log('\nVehicle comparison:');
  console.table(rows);
}

async function askChoice<T, TZero extends string>(
  lines: AsyncIterator<string>,
  prompt: string,
  choices: readonly T[],
  zeroChoice: TZero
): Promise<T | TZero | null> {
  while (true) {
    process.stdout.write(prompt);
    const answer = await lines.next();
    if (answer.done) return null;
    const value = answer.value.trim();
    const choice = Number(value);
    if (value === '0') return zeroChoice;
    if (Number.isInteger(choice) && choice >= 1 && choice <= choices.length) {
      // Menu numbers start at 1, but array indexes start at 0.
      return choices[choice - 1];
    }
    console.log('⚠️ Invalid choice. Please try again.');
  }
}

export async function runConsoleMenu(): Promise<void> {
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  const lines = input[Symbol.asyncIterator]();
  console.log('🚗 Welcome to the Vehicle Builder!');
  console.log('Choose a vehicle from the catalog.');

  // Main menu loop: choose a category or quit the app.
  mainLoop: while (true) {
    const category = await askChoice(
      lines,
      `\nChoose a vehicle type:\n${categories.map(function (item, index) {
        return `${index + 1}. ${item.name}`;
      }).join('\n')}\n0. 🚪 Quit\n> `,
      categories,
      'quit'
    );
    if (category === null || category === 'quit') break;

    // Model menu loop: stay in this category until the user goes back or quits.
    while (true) {
      const model = await askChoice(
        lines,
        `\nChoose a model:\n${category.models.map(function (item, index) {
          return `${index + 1}. ${item.make} ${item.model}`;
        }).join('\n')}\n0. ↩️ Back\n> `,
        category.models,
        'back'
      );
      if (model === null) break mainLoop;
      if (model === 'back') break;

      const vehicle = new category.VehicleClass({ ...model, year: model.year ?? 2026 });
      console.log(`\n✅ Vehicle selected:\n${vehicle.describe()}`);
      console.log(`\nProject review: ${'⭐'.repeat(model.rating)} (${model.rating}/5)\n${model.review}`);

      const compareLabel = process.stdout.isTTY && process.env.TERM !== 'dumb' && !process.env.NO_COLOR
        ? '\x1b[96mCompare\x1b[39m'
        : 'Compare';
      const next = await askChoice(
        lines,
        `\nWhat next?\n1. 📋 Choose another model in this category\n2. Choose another category\n3. 🔍 ${compareLabel} with another model in this category\n0. 🚪 Quit\n> `,
        ['model', 'category', 'compare'],
        'quit'
      );
      if (next === null || next === 'quit') break mainLoop;
      if (next === 'category') break;
      if (next === 'compare') {
        const comparisonModels = category.models.filter(function (item) {
          return item !== model;
        });
        const comparisonModel = await askChoice(
          lines,
          `\nChoose a model to compare:\n${comparisonModels.map(function (item, index) {
            return `${index + 1}. ${item.make} ${item.model}`;
          }).join('\n')}\n0. ↩️ Back\n> `,
          comparisonModels,
          'back'
        );
        if (comparisonModel === null) break mainLoop;
        if (comparisonModel === 'back') continue;

        const comparisonVehicle = new category.VehicleClass({
          ...comparisonModel,
          year: comparisonModel.year ?? 2026,
        });
        displayComparison(vehicle, comparisonVehicle, category);
      }
    }
  }

  input.close();
  console.log('\n👋 Goodbye!');
}

