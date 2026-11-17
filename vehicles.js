// The parent class holds properties and behavior shared by every vehicle type.
class Vehicle {
  constructor({ make, model, year, powertrain, drivetrain, horsepower, basePrice, basePriceNote, resaleValue, maxSeating, fuelEconomy, manufacturerUrl }) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.powertrain = powertrain || 'Unavailable';
    this.drivetrain = drivetrain || 'Unavailable';
    this.horsepower = horsepower || 'Unavailable';
    this.basePrice = basePrice;
    this.basePriceNote = basePriceNote;
    this.resaleValue = resaleValue || 'Unavailable';
    this.maxSeating = maxSeating;
    this.fuelEconomy = fuelEconomy || 'Unavailable';
    this.manufacturerUrl = manufacturerUrl || 'Unavailable';
  }

  describe() {
    const price = this.basePrice == null ? 'Unavailable' : `$${this.basePrice.toLocaleString('en-US')}`;
    const priceNote = this.basePriceNote ? ` (${this.basePriceNote})` : '';
    const powertrain = this.powertrain === 'Electric' ? '⚡ Electric' : this.powertrain;
    const resaleBags = { Strong: '💰💰💰', Average: '💰💰', Weak: '📉' };
    const resale = resaleBags[this.resaleValue] ? `${resaleBags[this.resaleValue]} ${this.resaleValue}` : this.resaleValue;
    return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nManufacturer: ${this.manufacturerUrl}\n\n💵 Base model starting MSRP: ${price}${priceNote}\n\nSpecifications (may describe different trims or options):\nPowertrain: ${powertrain}\nDrivetrain: ${this.drivetrain}\nHorsepower: ${this.horsepower}\nFuel economy (combined): ${this.fuelEconomy}\nMax seating (available): ${this.maxSeating ?? 'Unavailable'}\n\nResale estimate: ${resale}\n🛞 App default tires: ${this.tires}`;
  }
}

class SportsCar extends Vehicle {
  constructor(vehicle) {
    // super calls the parent constructor to initialize the shared properties.
    super(vehicle);
    this.topSpeed = vehicle.topSpeed || 'Unavailable';
    this.zeroToSixty = vehicle.zeroToSixty || 'Unavailable';
    this.tires = 'Summer';
  }

  describe() {
    // Extend the parent description with details specific to a sports car.
    return `🏎️ Type: Sports car\n${super.describe()}\n\nPerformance (configuration varies):\nTop speed: ${this.topSpeed}\n0-60 mph: ${this.zeroToSixty}`;
  }
}

class SUV extends Vehicle {
  constructor(vehicle) {
    super(vehicle);
    this.seatingDetails = vehicle.seatingDetails || 'Unavailable';
    this.cargoCapacity = vehicle.cargoCapacity;
    this.tires = 'All-Terrain';
  }

  describe() {
    const cargo = this.cargoCapacity ? `\nCargo capacity: ${this.cargoCapacity}` : '';
    return `🚙 Type: SUV\n${super.describe()}\nSeating options: ${this.seatingDetails}${cargo}`;
  }
}

class Crossover extends Vehicle {
  constructor(vehicle) {
    super(vehicle);
    this.cargoCapacity = vehicle.cargoCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🚗 Type: Crossover\n${super.describe()}\nCargo capacity: ${this.cargoCapacity}`;
  }
}

class Truck extends Vehicle {
  constructor(vehicle) {
    super(vehicle);
    this.towingCapacity = vehicle.towingCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🛻 Type: Truck\n${super.describe()}\nTowing capacity: ${this.towingCapacity}`;
  }
}

class PassengerCar extends Vehicle {
  constructor(vehicle) {
    super(vehicle);
    this.style = vehicle.style || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🚘 Type: Passenger car\n${super.describe()}\nStyle: ${this.style}`;
  }
}

// Named exports let other modules import the vehicle classes they need.
export { SportsCar, SUV, Crossover, Truck, PassengerCar };
