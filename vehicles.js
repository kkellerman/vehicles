class Vehicle {
  constructor(make, model, year, powertrain, basePrice) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.powertrain = powertrain || 'Unavailable';
    this.basePrice = basePrice;
  }

  describe() {
    const price = this.basePrice == null ? 'Unavailable' : `$${this.basePrice.toLocaleString('en-US')}`;
    return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nBase MSRP: ${price} (base model)\nPowertrain: ${this.powertrain}`;
  }
}

class SportsCar extends Vehicle {
  constructor(make, model, year, powertrain, topSpeed, basePrice) {
    super(make, model, year, powertrain, basePrice);
    this.topSpeed = topSpeed || 'Unavailable';
  }

  describe() {
    return `🏎️ Type: Sports car\n${super.describe()}\nTop speed: ${this.topSpeed}`;
  }
}

class SUV extends Vehicle {
  constructor(make, model, year, powertrain, seats, basePrice) {
    super(make, model, year, powertrain, basePrice);
    this.seats = seats || 'Unavailable';
  }

  describe() {
    return `🚙 Type: SUV\n${super.describe()}\nSeats: ${this.seats}`;
  }
}

class Crossover extends Vehicle {
  constructor(make, model, year, powertrain, cargoCapacity, basePrice) {
    super(make, model, year, powertrain, basePrice);
    this.cargoCapacity = cargoCapacity || 'Unavailable';
  }

  describe() {
    return `🚗 Type: Crossover\n${super.describe()}\nCargo capacity: ${this.cargoCapacity}`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, powertrain, towingCapacity, basePrice) {
    super(make, model, year, powertrain, basePrice);
    this.towingCapacity = towingCapacity || 'Unavailable';
  }

  describe() {
    return `🛻 Type: Truck\n${super.describe()}\nTowing capacity: ${this.towingCapacity}`;
  }
}

module.exports = { SportsCar, SUV, Crossover, Truck };
