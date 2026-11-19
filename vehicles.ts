export interface VehicleData {
  make: string;
  model: string;
  year?: number;
  powertrain?: string;
  drivetrain?: string;
  horsepower?: string;
  basePrice?: number;
  basePriceNote?: string;
  resaleValue?: string;
  maxSeating?: number;
  fuelEconomy?: string;
  manufacturerUrl?: string;
}

export interface CatalogVehicle extends VehicleData {
  rating: number;
  review: string;
}

export interface SportsCarData extends CatalogVehicle {
  topSpeed?: string;
  zeroToSixty?: string;
}

export interface SUVData extends CatalogVehicle {
  seatingDetails?: string;
  cargoCapacity?: string;
}

export interface CrossoverData extends CatalogVehicle {
  cargoCapacity?: string;
}

export interface TruckData extends CatalogVehicle {
  towingCapacity?: string;
}

export interface PassengerCarData extends CatalogVehicle {
  style?: string;
}

export interface VehicleCatalog {
  passengerCars: PassengerCarData[];
  sportsCars: SportsCarData[];
  suvs: SUVData[];
  crossovers: CrossoverData[];
  trucks: TruckData[];
}

type CategoryDetails = Partial<Record<
  'topSpeed' | 'zeroToSixty' | 'seatingDetails' | 'cargoCapacity' | 'towingCapacity' | 'style',
  string
>>;

export type VehicleInput = VehicleData & CategoryDetails;

// The parent class holds properties and behavior shared by every vehicle type.
class Vehicle {
  make: string;
  model: string;
  year?: number;
  powertrain: string;
  drivetrain: string;
  horsepower: string;
  basePrice?: number;
  basePriceNote?: string;
  resaleValue: string;
  maxSeating?: number;
  fuelEconomy: string;
  manufacturerUrl: string;
  tires = 'Unavailable';

  constructor({ make, model, year, powertrain, drivetrain, horsepower, basePrice, basePriceNote, resaleValue, maxSeating, fuelEconomy, manufacturerUrl }: VehicleInput) {
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
    const resaleBags: Record<string, string> = { Strong: '💰💰💰', Average: '💰💰', Weak: '📉' };
    const resale = resaleBags[this.resaleValue] ? `${resaleBags[this.resaleValue]} ${this.resaleValue}` : this.resaleValue;
    return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nManufacturer: ${this.manufacturerUrl}\n\n💵 Base model starting MSRP: ${price}${priceNote}\n\nSpecifications (may describe different trims or options):\nPowertrain: ${powertrain}\nDrivetrain: ${this.drivetrain}\nHorsepower: ${this.horsepower}\nFuel economy (combined): ${this.fuelEconomy}\nMax seating (available): ${this.maxSeating ?? 'Unavailable'}\n\nResale estimate: ${resale}\n🛞 App default tires: ${this.tires}`;
  }
}

class SportsCar extends Vehicle {
  topSpeed: string;
  zeroToSixty: string;

  constructor(vehicle: VehicleInput) {
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
  seatingDetails: string;
  cargoCapacity?: string;

  constructor(vehicle: VehicleInput) {
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
  cargoCapacity: string;

  constructor(vehicle: VehicleInput) {
    super(vehicle);
    this.cargoCapacity = vehicle.cargoCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🚗 Type: Crossover\n${super.describe()}\nCargo capacity: ${this.cargoCapacity}`;
  }
}

class Truck extends Vehicle {
  towingCapacity: string;

  constructor(vehicle: VehicleInput) {
    super(vehicle);
    this.towingCapacity = vehicle.towingCapacity || 'Unavailable';
    this.tires = 'All-Season (A/S)';
  }

  describe() {
    return `🛻 Type: Truck\n${super.describe()}\nTowing capacity: ${this.towingCapacity}`;
  }
}

class PassengerCar extends Vehicle {
  style: string;

  constructor(vehicle: VehicleInput) {
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
