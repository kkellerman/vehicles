// The parent class holds properties and behavior shared by every vehicle type.
class Vehicle {
  constructor(make, model, year, powertrain, basePrice, resaleValue, maxSeating) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.powertrain = powertrain || 'Unavailable';
    this.basePrice = basePrice;
    this.resaleValue = resaleValue || 'Unavailable';
    this.maxSeating = maxSeating;
  }

  describe() {
    const price = this.basePrice == null ? 'Unavailable' : `$${this.basePrice.toLocaleString('en-US')}`;
    const resaleBags = { Strong: '💰💰💰', Average: '💰💰', Weak: '📉' };
    const resale = resaleBags[this.resaleValue] ? `${resaleBags[this.resaleValue]} ${this.resaleValue}` : this.resaleValue;
    return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\n💵 Base MSRP: ${price} (base model)\nPowertrain: ${this.powertrain}\nResale value: ${resale}\n🛞 Tires: ${this.tires}\nMax seating: ${this.maxSeating ?? 'Unavailable'}`;
  }
}

class SportsCar extends Vehicle {
  constructor(make, model, year, powertrain, topSpeed, basePrice, resaleValue, maxSeating, zeroToSixty) {
    // super calls the parent constructor to initialize the shared properties.
    super(make, model, year, powertrain, basePrice, resaleValue, maxSeating);
    this.topSpeed = topSpeed || 'Unavailable';
    this.zeroToSixty = zeroToSixty || 'Unavailable';
    this.tires = 'Summer';
  }

  describe() {
    // Extend the parent description with details specific to a sports car.
    return `🏎️ Type: Sports car\n${super.describe()}\nTop speed: ${this.topSpeed}\n0-60 mph: ${this.zeroToSixty}`;
  }
}

class SUV extends Vehicle {
  constructor(make, model, year, powertrain, seats, basePrice, resaleValue, maxSeating) {
    super(make, model, year, powertrain, basePrice, resaleValue, maxSeating);
    this.seats = seats || 'Unavailable';
    this.tires = 'All-Terrain';
  }

  describe() {
    return `🚙 Type: SUV\n${super.describe()}\nSeats: ${this.seats}`;
  }
}

class Crossover extends Vehicle {
  constructor(make, model, year, powertrain, cargoCapacity, basePrice, resaleValue, maxSeating) {
    super(make, model, year, powertrain, basePrice, resaleValue, maxSeating);
    this.cargoCapacity = cargoCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🚗 Type: Crossover\n${super.describe()}\nCargo capacity: ${this.cargoCapacity}`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, powertrain, towingCapacity, basePrice, resaleValue, maxSeating) {
    super(make, model, year, powertrain, basePrice, resaleValue, maxSeating);
    this.towingCapacity = towingCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🛻 Type: Truck\n${super.describe()}\nTowing capacity: ${this.towingCapacity}`;
  }
}

// Named exports let other modules import the vehicle classes they need.
export { SportsCar, SUV, Crossover, Truck };
