const readline = require('node:readline');
const { SportsCar, SUV, Crossover, Truck } = require('./vehicles');
const catalog = require('./catalog');

const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
const lines = input[Symbol.asyncIterator]();

async function askChoice(prompt, choices) {
  while (true) {
    process.stdout.write(prompt);
    const answer = await lines.next();
    if (answer.done) return null;
    const choice = Number(answer.value.trim());
    if (Number.isInteger(choice) && choice >= 1 && choice <= choices.length) {
      return choices[choice - 1];
    }
    console.log('⚠️ Invalid choice. Please try again.');
  }
}

async function main() {
  console.log('🚗 Welcome to the Vehicle Builder!');
  console.log('Choose a 2026 model.');

  while (true) {
    const categories = [
      { name: '🏎️ Sports car', VehicleClass: SportsCar, models: catalog.sportsCars },
      { name: '🚙 SUV', VehicleClass: SUV, models: catalog.suvs },
      { name: '🚗 Crossover', VehicleClass: Crossover, models: catalog.crossovers },
      { name: '🛻 Truck', VehicleClass: Truck, models: catalog.trucks },
    ];
    const category = await askChoice(
      `\nChoose a vehicle type:\n${categories.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}\n> `,
      categories
    );
    if (category === null) break;

    const model = await askChoice(
      `\nChoose a model:\n${category.models.map((item, index) => `${index + 1}. ${item.make} ${item.model}`).join('\n')}\n> `,
      category.models
    );
    if (model === null) break;

    const vehicle = new category.VehicleClass(model.make, model.model, 2026, model.powertrain, model.attribute, model.basePrice);
    console.log(`\n✅ Vehicle selected:\n${vehicle.describe()}`);
    console.log(`\nSample review: ${'⭐'.repeat(model.rating)} (${model.rating}/5)\n${model.review}`);

    const next = await askChoice('\nChoose another vehicle? 1. Yes  2. Quit\n> ', ['yes', 'quit']);
    if (next !== 'yes') break;
  }

  input.close();
  console.log('\n👋 Goodbye!');
}

main();
