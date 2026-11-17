import readline from 'node:readline';
import { SportsCar, SUV, Crossover, Truck, PassengerCar } from './vehicles.js';
import catalog from './catalog.js';

// Each category connects a menu label to its class and catalog data.
const categories = [
  { name: '🏎️ Sports car', VehicleClass: SportsCar, models: catalog.sportsCars },
  { name: '🚙 SUV', VehicleClass: SUV, models: catalog.suvs },
  { name: '🚗 Crossover', VehicleClass: Crossover, models: catalog.crossovers },
  { name: '🛻 Truck', VehicleClass: Truck, models: catalog.trucks },
  { name: '🚘 Passenger car', VehicleClass: PassengerCar, models: catalog.passengerCars },
];

async function askChoice(lines, prompt, choices, zeroChoice) {
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

export async function runConsoleMenu() {
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  const lines = input[Symbol.asyncIterator]();
  console.log('🚗 Welcome to the Vehicle Builder!');
  console.log('Choose a vehicle from the catalog.');

  // Main menu loop: choose a category or quit the app.
  mainLoop: while (true) {
    const category = await askChoice(
      lines,
      `\nChoose a vehicle type:\n${categories.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}\n0. Quit\n> `,
      categories,
      'quit'
    );
    if (category === null || category === 'quit') break;

    // Model menu loop: stay in this category until the user goes back or quits.
    while (true) {
      const model = await askChoice(
        lines,
        `\nChoose a model:\n${category.models.map((item, index) => `${index + 1}. ${item.make} ${item.model}`).join('\n')}\n0. Back\n> `,
        category.models,
        'back'
      );
      if (model === null) break mainLoop;
      if (model === 'back') break;

      const vehicle = new category.VehicleClass({ ...model, year: model.year ?? 2026 });
      console.log(`\n✅ Vehicle selected:\n${vehicle.describe()}`);
      console.log(`\nProject review: ${'⭐'.repeat(model.rating)} (${model.rating}/5)\n${model.review}`);

      const next = await askChoice(
        lines,
        '\nWhat next?\n1. Choose another model in this category\n2. Choose another category\n0. Quit\n> ',
        ['model', 'category'],
        'quit'
      );
      if (next === null || next === 'quit') break mainLoop;
      if (next === 'category') break;
    }
  }

  input.close();
  console.log('\n👋 Goodbye!');
}

