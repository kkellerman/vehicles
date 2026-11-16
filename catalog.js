// These are popular choices, not a sales ranking.
// Missing details have not yet been verified in the sources in README.md.
// The default export shares the catalog with other modules.
export default {
  sportsCars: [
    { make: 'Ford', model: 'Mustang', zeroToSixty: '3.7 seconds (GT automatic, Car and Driver test)', maxSeating: 4, resaleValue: 'Strong', basePrice: 32995, powertrain: '5.0 L V8 (GT)', rating: 4, review: 'Muscle-car style and V8 power, with limited rear-seat space.' },
    { make: 'Chevrolet', model: 'Corvette', zeroToSixty: '2.9 seconds (Stingray with Z51 package, Chevrolet)', maxSeating: 2, resaleValue: 'Strong', basePrice: 70000, powertrain: '6.2 L V8 (Stingray)', attribute: '194 mph on track, Stingray (2026 specification)', rating: 5, review: 'Exciting sports-car performance, though cargo space is limited.' },
    { make: 'Mazda', model: 'MX-5 Miata', zeroToSixty: '6.4 seconds (manual, Edmunds test)', maxSeating: 2, resaleValue: 'Strong', basePrice: 30730, powertrain: '2.0 L inline-four',attribute: '139-141 mph, depending on transmission (2026 estimate)', rating: 5, review: 'Lightweight and fun to drive, with a snug two-seat cabin.' },
    { make: 'Toyota', model: 'GR86', zeroToSixty: '6.0 seconds (manual, Edmunds test)', maxSeating: 4, resaleValue: 'Strong', basePrice: 31400, powertrain: '2.4 L flat-four', attribute: '135–140 mph, depending on transmission (2026 estimate)', rating: 4, review: 'A nimble sports coupe with a small back seat.' },
    { make: 'Subaru', model: 'BRZ', zeroToSixty: '5.5 seconds (tS, Car and Driver test)', maxSeating: 4, resaleValue: 'Strong', basePrice: 35860, powertrain: '2.4 L flat-four', attribute: '140 mph, speed limited (2026 test)', rating: 4, review: 'Engaging handling makes this coupe fun, but space is tight.' },
  ],
  suvs: [
    { make: 'Rivian', model: 'R1S', maxSeating: 7, resaleValue: 'Weak', basePrice: 76990, powertrain: 'Electric', attribute: '7', rating: 4, review: 'An electric SUV with three rows, though its starting price is high.' },
    { make: 'Ford', model: 'Explorer', maxSeating: 7, resaleValue: 'Average', basePrice: 38465, powertrain: '3.0 L V6 (ST or Tremor)', attribute: '6 or 7, depending on configuration', rating: 4, review: 'A three-row SUV with several configurations for families.' },
    { make: 'Lexus', model: 'GX 550', maxSeating: 7, resaleValue: 'Strong', basePrice: 66785,powertrain: '3.4 L V6', attribute: 'Up to 7, depending on configuration', rating: 4, review: 'A luxury SUV with off-road ability and a high starting price.' },
    { make: 'Toyota', model: '4Runner', maxSeating: 7, resaleValue: 'Strong', basePrice: 42270, powertrain: '2.4 L inline-four; hybrid available', attribute: '5 or 7, depending on configuration', rating: 4, review: 'A rugged SUV with off-road options and available hybrid power.' },
    { make: 'Chevrolet', model: 'Tahoe', maxSeating: 9, resaleValue: 'Strong', basePrice: 60700, powertrain: '5.3 L V8 (available engine)', attribute: 'Up to 9 with front bench seat (2026 specification)', rating: 4, review: 'A large SUV with plenty of seating, but its size can make parking harder.' },
  ],
  crossovers: [
    { make: 'Honda', model: 'CR-V', maxSeating: 5, resaleValue: 'Strong', basePrice: 30920, powertrain: '1.5 L gasoline or 2.0 L hybrid', attribute: '76.5 cubic feet maximum, gasoline trims (2026 specification)', rating: 5, review: 'A roomy crossover with gasoline and hybrid choices.' },
    { make: 'Toyota', model: 'RAV4', maxSeating: 5, resaleValue: 'Strong', basePrice: 31900, powertrain: '2.5 L hybrid or plug-in hybrid', attribute: '70.4 cubic feet behind front row (2026 specification)', rating: 4, review: 'A practical hybrid crossover with a useful amount of cargo space.' },
    { make: 'Tesla', model: 'Model Y', maxSeating: 7, resaleValue: 'Average', basePrice: 39990, powertrain: 'Electric', attribute: '71 cubic feet behind front row, RWD (2026 test)', rating: 4, review: 'An electric crossover with generous cargo space and a touchscreen-focused cabin.' },
    { make: 'Hyundai', model: 'Tucson', maxSeating: 5, resaleValue: 'Average', basePrice: 29700, powertrain: '2.5 L gasoline or 1.6 L hybrid / plug-in hybrid', attribute: '74.8 cubic feet with rear seats folded (2026 specification)', rating: 4, review: 'A roomy crossover with several powertrain choices.' },
    { make: 'Subaru', model: 'Crosstrek', maxSeating: 5, resaleValue: 'Strong', basePrice: 26995, powertrain: '2.5 L gasoline or hybrid', attribute: '54.7 cubic feet with rear seats folded, base model (2026 specification)', rating: 4, review: 'A compact crossover with useful cargo space for its size.' },
  ],
  trucks: [
    { make: 'Ford', model: 'F-150', maxSeating: 6, resaleValue: 'Average', basePrice: 39585, powertrain: '3.5 L V6; hybrid available', attribute: 'Up to 13,500 lbs with the required gas configuration', rating: 4, review: 'A versatile truck with many configurations and strong available towing.' },
    { make: 'Chevrolet', model: 'Silverado', maxSeating: 6, resaleValue: 'Average', basePrice: 39995, powertrain: '2.7 L inline-four (Silverado 1500)', rating: 4, review: 'A full-size truck with a range of engines and configurations.' },
    { make: 'Ram', model: '1500', maxSeating: 6, resaleValue: 'Average', basePrice: 44150, powertrain: '3.6 L V6 (available engine)', attribute: 'Class IV hitch rating: 11,610 lbs (2026 specification; vehicle rating may be lower)', rating: 4, review: 'A full-size truck with multiple engine choices and available towing options.' },
    { make: 'GMC', model: 'Sierra', maxSeating: 6, resaleValue: 'Average', basePrice: 38600, powertrain: '2.7 L inline-four (Sierra 1500)', rating: 4, review: 'A full-size truck with a variety of trims and configurations.' },
    { make: 'Toyota', model: 'Tacoma', maxSeating: 5, resaleValue: 'Strong', basePrice: 32545, powertrain: '2.4 L inline-four; hybrid available', attribute: 'Up to 6,500 lbs with the required configuration', rating: 4, review: 'A midsize truck with available hybrid power and towing capability.' },
  ],
};
