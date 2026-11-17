# Vehicle Builder

A JavaScript console app for exploring a predefined vehicle catalog and practicing object-oriented programming. Choose a vehicle in the terminal to see its specifications, estimated resale value, and a sample review.

## What you can do

- Browse 26 predefined models across sports cars, SUVs, crossovers, trucks, and passenger cars. Most are 2026 models; the Rivian R2 is a 2027 model.
- See details such as base MSRP, powertrain, drivetrain, horsepower, combined MPG or MPGe, maximum seating, resale estimate, and tire type.
- See category-specific details, including sports car acceleration and passenger car style.
- Open a manufacturer link for each model. Pages may show a newer model year or an archived specification.
- Go back to categories, choose another model, or quit. Invalid menu choices prompt you to try again.

The app displays catalog choices; it does not currently let you customize, compare, or save vehicles. Reviews summarize published automotive reviews, and the star ratings are project interpretations.

## Run the app

Install Node.js, open PowerShell, and run:

```powershell
cd C:\Prepos\learning\vehicles
node index.js
```

No package installation is needed. Choose a numbered category and model, pressing Enter after each choice. Use `0` to go back from the model menu or quit from the category menu. After viewing a vehicle, choose another model, return to categories, or quit. Press Ctrl+C to stop the app at any time. Vehicles exist only while the app is running.

Run the automated checks with `node --test`.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the current console milestone and planned work toward TypeScript, a browser interface, React, Tailwind CSS, and a fuller Next.js app with role-based catalog management.

## About the vehicle data

The catalog contains popular models and the requested SUV examples, not a sales ranking. Most entries are for 2026; the Rivian R2 is a 2027 model. Details can vary by trim and options.

The R2's $44,990 starting price is for the Standard trim expected in 2027, while its efficiency and cargo figures describe the Performance trim. Its resale value is unavailable because a reliable long-term estimate has not been established. Sources: [Rivian pricing](https://rivian.com/r2), [EPA fuel economy](https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&baseModel=R2&make=Rivian&pageno=1&srchtyp=ymm&year1=2026&year2=2027), and [Edmunds specifications](https://www.edmunds.com/rivian/r2/2027/st-402100405/features-specs/).

Drivetrain and horsepower describe the indicated example configuration, not every available trim. Hybrid system horsepower is labeled as combined output. Model Y horsepower is unavailable because a comparable manufacturer figure has not been verified. Sources include the manufacturer pages in the catalog, [Rivian R2 details](https://www.sec.gov/Archives/edgar/data/1874178/000187417826000033/ex-9921q26rivianearnings.htm), and [Toyota RAV4 specifications](https://pressroom.toyota.com/the-next-adventure-begins-2026-rav4-arrives-this-winter/).

Tire types are app defaults based on vehicle category, not verified factory equipment: sports cars use summer tires, SUVs use all-terrain tires, and crossovers and trucks use all-season tires.

Passenger cars use all-season tires as an app default and have a style: sedan, coupe, wagon, or hatchback. Their model details are based on sources including [Toyota Camry](https://www.buyatoyota.com/home/vehicles/camry/), [Honda Accord](https://hondanews.com/en-US/honda-automobiles/releases/release-c26685400737027f7d053958c30909ed-2026-honda-accord-adds-more-standard-tech-and-sportier-styling-now-arriving-at-dealers), [BMW 430i Coupe](https://www.edmunds.com/bmw/4-series/2026/coupe/features-specs/), [Volvo V60 Cross Country](https://www.youtube.com/watch?v=mb1tiGJseYA), and [Toyota Corolla Hatchback](https://review.prd.jsds.tms.aws.toyota.com/home/vehicles/corollahatchback/2026/index.page).

Fuel economy is an EPA-estimated combined city/highway rating for the stated model year and configuration, not an average across every trim. Electric vehicles use MPGe, an energy-equivalent measure, not gasoline consumption or driving range. Values come from the [2026 Fuel Economy Guide](https://www.fueleconomy.gov/feg/pdfs/guides/FEG2026.pdf), [2026 GR86 ratings](https://www.toyota.com/gr86/2026/features/mpg_other_price/6253/6252/6259/), [2026 Ford fleet guide](https://content.fordpro.com/content/dam/fordpro/us/en-us/pdf/solutions/2026-27-FordPro-Fleet-Solutions-Guide.pdf), [2026 Model Y Standard RWD](https://www.fueleconomy.gov/feg/noframes/50041.shtml), and [Volvo V60 Cross Country specifications](https://azure-eu-assets.contentstack.com/v3/assets/blt84e01a6904dbd2e8/bltd60288c0bc717de0/68acb4961268fbff8e5f19d5/MY26_V60cc_Tech_Specs_V1.pdf). Actual efficiency varies with equipment and driving conditions.

Max seating is the highest available capacity for the model, which may require a particular trim or optional seats. For example, [Chevrolet's 2026 Tahoe fleet guide](https://www.gmfleet.com/content/dam/gmfleet/na/us/en/index/pdfs/suvs/02-pdfs/2026%20Chevrolet%20Tahoe.pdf) lists up to nine, and [the 2026 Model Y](https://www.engadget.com/transportation/evs/tesla-launches-a-seven-seat-version-of-the-2026-model-y-130039385.html) offers an optional seven-seat configuration.

The short reviews summarize automotive reviewers' opinions. The five-star ratings are subjective project interpretations, not published scores, customer averages, or a verified industry consensus. Opinions can differ, and reviews may discuss a specific trim. Edit the review or rating in `catalog.js`.

Sports car 0–60 mph figures describe specific trims and test conditions: [Mustang GT](https://www.caranddriver.com/reviews/comparison-test/a70577554/2026-dodge-charger-scat-pack-vs-ford-mustang-gt-comparison-test/), [Corvette Stingray](https://www.chevrolet.com/performance/previous-year/corvette/stingray), [MX-5 Miata](https://www.edmunds.com/mazda/mx-5-miata/), [GR86](https://www.edmunds.com/toyota/gr86/), and [BRZ](https://www.caranddriver.com/subaru/brz). Results vary with equipment and conditions.

Resale values are broad U.S. market estimates, grouped as strong, average, or weak relative to vehicles overall. They are judgments informed by sources rather than ratings assigned by those sources. They combine [Kelley Blue Book's five-year 2026 projections](https://mediaroom.kbb.com/2026-03-19-Kelley-Blue-Book-Announces-2026-Best-Resale-Value-Award-Winners), [J.D. Power's three-year 2026 segment projections](https://www.jdpower.com/business/press-releases/2026-alg-residual-value-awards), and [iSeeCars' five-year used-vehicle trends](https://www.iseecars.com/cars-that-hold-their-value-study). The [R1S estimate](https://www.iseecars.com/resale-value-brands/rivian) is uncertain because its sales history is shorter. A Model Y was a J.D. Power electric SUV segment winner, even though EV resale trends vary. Actual values depend on age, trim, condition, mileage, location, and future demand.

Some fields remain unavailable where a value has not been verified.

Base MSRP is a U.S. starting price for the base model. Destination and other fees may vary by source; tax, options, and dealer charges are extra. Prices can change, and the listed engine or specification may be from a higher trim. Sources include [Ford](https://www.ford.com/cars/mustang/models/), [Chevrolet](https://www.chevrolet.com/performance/previous-year/corvette/stingray), [Mazda](https://news.mazdausa.com/2026-09-15-2026-Mazda-MX-5-Miata-Pricing-and-Packaging), [Toyota GR86](https://www.toyota.com/gr86/2026/section/technology/), [Subaru BRZ](https://www.subaru.com/services/vehicles/pdf/trimComparison/2026/BRZ), [Rivian R1S](https://www.tomsguide.com/vehicle-tech/evs/2026-rivian-r1s-review), [Ford Explorer](https://www.ford.com/suvs/explorer/2026/), [Lexus GX](https://pressroom.lexus.com/revel-in-the-joy-of-driving-the-2026-lexus-gx/), [Toyota 4Runner](https://www.buyatoyota.com/home/vehicles/4runner/2026/), [Chevrolet Tahoe](https://nextcarreview.com/2026-chevy-tahoe/), [Honda CR-V](https://hondanews.com/en-US/releases/release-cf005034e20eb27505fd8e6bbb056d5c-2026-honda-cr-v-pricing-and-epa-ratings-3), [Toyota RAV4](https://www.buyatoyota.com/home/vehicles/rav4/), [Tesla Model Y](https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/tesla-was-once-an-ev-innovator-but-its-cheaper-model-3-and-model-y-show-its-now-being-lapped-by-chinese-rivals), [Hyundai Tucson](https://www.hyundaiusa.com/us/en/vehicles/tucson), [Subaru Crosstrek](https://www.subaru.com/services/vehicles/pdf/trimComparison/2026/CTK), [Ford F-150](https://www.ford.com/trucks/f150/), [Chevrolet Silverado](https://www.chevrolet.com/trucks/silverado-1500-vs-ram-1500), [Ram 1500](https://www.ramtrucks.com/ram-1500/specs.html), [GMC Sierra](https://www.carwhere.com/price/gmc/sierra/2026), and [Toyota Tacoma](https://www.toyota.com/tacoma/2026/).

Powertrain details show engine displacement in liters for combustion and hybrid models, and Electric for battery-electric models. Some models offer other engines or trims. See the [2026 Fuel Economy Guide](https://www.fueleconomy.gov/feg/pdfs/guides/FEG2026.pdf) and [2026 Honda CR-V specifications](https://hondanews.com/en-US/releases/release-2ecca7d29f72bf212c56033cca000993-2026-honda-cr-v-specifications-features-updated).

2026 reference sources: [Corvette Stingray](https://www.chevrolet.com/performance/previous-year/corvette/stingray), [GR86](https://www.caranddriver.com/toyota/gr86-2026), [BRZ](https://www.caranddriver.com/subaru/brz), [Tahoe](https://www.tomsguide.com/vehicle-tech/2026-chevrolet-tahoe-review), [CR-V](https://www.hondainfocenter.com/2026/CR-V/Feature-Guide/Specifications/), [RAV4](https://engage.toyota.com/static/articles/2026_rav4_sales_consultant_guide/2026_RAV4_Sales_Consultant_Guide.pdf), [Model Y](https://www.caranddriver.com/reviews/a68851083/2026-tesla-model-y-standard-drive/), [Tucson](https://www.kbb.com/comparison/honda-cr-v-vs-hyundai-tucson/), [Crosstrek](https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2026/2026_Crosstrek_Brochure_040926.pdf), and [Ram 1500](https://vehicleinfo.mopar.com/assets/publications/en-us-ca/2026/Ram/1500/103960_26_DT_OM_EN_USC_DIGITAL_E1_V1.pdf).

Additional sources: [Rivian R1S](https://www.edmunds.com/rivian/r1s/2026/suv/features-specs/), [Ford Explorer](https://www.ford.com/suvs/explorer/2026/models/st-line/), [Lexus GX](https://www.lexus.com/models/GX/index), [Toyota 4Runner](https://www.edmunds.com/toyota/4runner/2026/trims/), [Ford F-150](https://www.ford.com/trucks/f150/2026/), and [Toyota Tacoma](https://www.tacoma4g.com/forum/attachments/specs-2026-tacoma-specifications-pdf.49734/).

## Explore the code

`vehicles.js` defines the shared `Vehicle` class and five vehicle types that extend it. Each type adds an attribute and uses `describe()` to display its details. `catalog.js` holds the predefined choices. `console-menu.js` handles prompts, navigation, and creating the selected vehicle, while `index.js` starts the console app.

Vehicle constructors accept a single object with named properties. Category-specific data uses descriptive names such as `topSpeed`, `seatingDetails`, `cargoCapacity`, `towingCapacity`, and `style`. The console groups base-model pricing separately from example specifications because the listed details can refer to different trims or options; it does not yet model complete selectable configurations.

The app uses ES modules: `export` shares the catalog, vehicle classes, and menu function, and `import` loads them where needed. The `"type": "module"` setting in `package.json` tells Node.js to treat the project's `.js` files as ES modules.
