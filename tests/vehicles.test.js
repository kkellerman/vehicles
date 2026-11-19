import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import catalog from '../dist/catalog.js';
import { SportsCar, SUV, Crossover, Truck, PassengerCar } from '../dist/vehicles.js';

const categories = [
  [SportsCar, catalog.sportsCars, 'topSpeed'],
  [SUV, catalog.suvs, 'seatingDetails'],
  [Crossover, catalog.crossovers, 'cargoCapacity'],
  [Truck, catalog.trucks, 'towingCapacity'],
  [PassengerCar, catalog.passengerCars, 'style'],
];

test('vehicle classes preserve named catalog properties', () => {
  for (const [VehicleClass, models, detail] of categories) {
    for (const model of models) {
      const vehicle = new VehicleClass({ ...model, year: 2026 });
      assert.equal(vehicle.make, model.make);
      assert.equal(vehicle.model, model.model);
      assert.equal(vehicle.basePrice, model.basePrice);
      assert.equal(vehicle.fuelEconomy, model.fuelEconomy);
      assert.equal(vehicle.drivetrain, model.drivetrain);
      assert.equal(vehicle.horsepower, model.horsepower);
      assert.ok(vehicle.describe().includes(`Drivetrain: ${model.drivetrain}`));
      assert.ok(vehicle.describe().includes(`Horsepower: ${model.horsepower}`));
      assert.equal(vehicle[detail], model[detail] || 'Unavailable');
      assert.ok(vehicle.describe().includes('Specifications (may describe different trims or options):'));
    }
  }
});

test('sports car accepts named properties in any order and handles missing details', () => {
  const car = new SportsCar({ zeroToSixty: '3 seconds', model: 'Example', year: 2026, make: 'Test' });
  assert.equal(car.zeroToSixty, '3 seconds');
  assert.equal(car.topSpeed, 'Unavailable');
  assert.ok(car.describe().includes('Base model starting MSRP: Unavailable'));
});

test('console retries invalid choices and displays two categories', () => {
  const result = spawnSync(process.execPath, ['dist/index.js'], {
    input: '9\n1\n1\n2\n2\n1\n0\n',
    encoding: 'utf8',
    timeout: 5000,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Invalid choice/);
  assert.match(result.stdout, /0-60 mph: 3\.7 seconds/);
  assert.match(result.stdout, /Seating options: 7/);
  assert.match(result.stdout, /Goodbye!/);
});

test('model menu goes back and another model stays in the category', () => {
  const result = spawnSync(process.execPath, ['dist/index.js'], {
    input: '2\n0\n3\n1\n1\n2\n0\n',
    encoding: 'utf8',
    timeout: 5000,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.equal((result.stdout.match(/Choose a vehicle type:/g) || []).length, 2);
  assert.match(result.stdout, /0\. ↩️ Back/);
  assert.match(result.stdout, /1\. 📋 Choose another model in this category/);
  assert.match(result.stdout, /0\. 🚪 Quit/);
  assert.match(result.stdout, /Model: CR-V/);
  assert.match(result.stdout, /Model: RAV4/);
  assert.match(result.stdout, /Goodbye!/);
});

test('console compares two different models in the same category', () => {
  const result = spawnSync(process.execPath, ['dist/index.js'], {
    input: '1\n5\n3\n1\n0\n0\n',
    encoding: 'utf8',
    timeout: 5000,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Vehicle comparison:/);
  assert.match(result.stdout, /911 Carrera/);
  assert.match(result.stdout, /Mustang/);
  assert.match(result.stdout, /Base MSRP/);
  assert.match(result.stdout, /Top speed/);
  assert.match(result.stdout, /0-60 mph/);
  assert.match(result.stdout, /Unavailable/);
  assert.match(result.stdout, /Goodbye!/);
});

test('comparison menu highlights only Compare in color-capable terminals', () => {
  for (const [isTTY, noColor, term, expected] of [
    [true, '', 'xterm', '\x1b[96mCompare\x1b[39m'],
    [true, '1', 'xterm', 'Compare'],
    [false, '', 'xterm', 'Compare'],
    [true, '', 'dumb', 'Compare'],
  ]) {
    const result = spawnSync(process.execPath, [
      '--input-type=module',
      '-e',
      `process.stdout.isTTY = ${isTTY}; await import('./dist/index.js');`,
    ], {
      input: '1\n1\n0\n',
      encoding: 'utf8',
      timeout: 5000,
      env: { ...process.env, TERM: term, NO_COLOR: noColor },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.ok(result.stdout.includes(`3. 🔍 ${expected} with another model in this category`));
  }
});

test('Rivian R1T can be selected and compared with another truck', () => {
  const result = spawnSync(process.execPath, ['dist/index.js'], {
    input: '4\n6\n3\n1\n0\n0\n',
    encoding: 'utf8',
    timeout: 5000,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /6\. Rivian R1T/);
  assert.match(result.stdout, /Model: R1T/);
  assert.match(result.stdout, /Powertrain: ⚡ Electric/);
  assert.match(result.stdout, /Vehicle comparison:/);
  assert.match(result.stdout, /Rivian R1T/);
  assert.match(result.stdout, /Ford F-150/);
  assert.match(result.stdout, /Up to 11,000 lbs when properly equipped/);
});

test('empty input is invalid and zero quits from the category menu', () => {
  const result = spawnSync(process.execPath, ['dist/index.js'], {
    input: '\n0\n',
    encoding: 'utf8',
    timeout: 5000,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Invalid choice/);
  assert.match(result.stdout, /Goodbye!/);
});
