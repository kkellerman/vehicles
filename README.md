# Vehicle Builder

A JavaScript console app for practicing classes, objects, inheritance, and methods.

## Run the app

Install Node.js, open a terminal in this folder, and run:

```powershell
node index.js
```

Choose a category and one of five predefined models. After its details appear, you can choose another or quit. Vehicles exist only while the app is running.

The catalog contains popular 2026 models and the requested SUV examples, not a sales ranking. Details can vary by trim and options.

The star ratings and short reviews are sample opinions for the learning project, not ratings from customers or professional reviewers. Edit them in `catalog.js`.

Some fields remain unavailable where a 2026 value has not been verified.

Base MSRP is a U.S. starting price for the base model. Destination and other fees may vary by source; tax, options, and dealer charges are extra. Prices can change, and the listed engine or specification may be from a higher trim. Sources include [Ford](https://www.ford.com/cars/mustang/models/), [Chevrolet](https://www.chevrolet.com/performance/previous-year/corvette/stingray), [Mazda](https://news.mazdausa.com/2026-09-15-2026-Mazda-MX-5-Miata-Pricing-and-Packaging), [Toyota GR86](https://www.toyota.com/gr86/2026/section/technology/), [Subaru BRZ](https://www.subaru.com/services/vehicles/pdf/trimComparison/2026/BRZ), [Rivian R1S](https://www.tomsguide.com/vehicle-tech/evs/2026-rivian-r1s-review), [Ford Explorer](https://www.ford.com/suvs/explorer/2026/), [Lexus GX](https://pressroom.lexus.com/revel-in-the-joy-of-driving-the-2026-lexus-gx/), [Toyota 4Runner](https://www.buyatoyota.com/home/vehicles/4runner/2026/), [Chevrolet Tahoe](https://nextcarreview.com/2026-chevy-tahoe/), [Honda CR-V](https://hondanews.com/en-US/releases/release-cf005034e20eb27505fd8e6bbb056d5c-2026-honda-cr-v-pricing-and-epa-ratings-3), [Toyota RAV4](https://www.buyatoyota.com/home/vehicles/rav4/), [Tesla Model Y](https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/tesla-was-once-an-ev-innovator-but-its-cheaper-model-3-and-model-y-show-its-now-being-lapped-by-chinese-rivals), [Hyundai Tucson](https://www.hyundaiusa.com/us/en/vehicles/tucson), [Subaru Crosstrek](https://www.subaru.com/services/vehicles/pdf/trimComparison/2026/CTK), [Ford F-150](https://www.ford.com/trucks/f150/), [Chevrolet Silverado](https://www.chevrolet.com/trucks/silverado-1500-vs-ram-1500), [Ram 1500](https://www.ramtrucks.com/ram-1500/specs.html), [GMC Sierra](https://www.carwhere.com/price/gmc/sierra/2026), and [Toyota Tacoma](https://www.toyota.com/tacoma/2026/).

Powertrain details show engine displacement in liters for combustion and hybrid models, and Electric for battery-electric models. Some models offer other engines or trims. See the [2026 Fuel Economy Guide](https://www.fueleconomy.gov/feg/pdfs/guides/FEG2026.pdf) and [2026 Honda CR-V specifications](https://hondanews.com/en-US/releases/release-2ecca7d29f72bf212c56033cca000993-2026-honda-cr-v-specifications-features-updated).

2026 reference sources: [Corvette Stingray](https://www.chevrolet.com/performance/previous-year/corvette/stingray), [GR86](https://www.caranddriver.com/toyota/gr86-2026), [BRZ](https://www.caranddriver.com/subaru/brz), [Tahoe](https://www.tomsguide.com/vehicle-tech/2026-chevrolet-tahoe-review), [CR-V](https://www.hondainfocenter.com/2026/CR-V/Feature-Guide/Specifications/), [RAV4](https://engage.toyota.com/static/articles/2026_rav4_sales_consultant_guide/2026_RAV4_Sales_Consultant_Guide.pdf), [Model Y](https://www.caranddriver.com/reviews/a68851083/2026-tesla-model-y-standard-drive/), [Tucson](https://www.kbb.com/comparison/honda-cr-v-vs-hyundai-tucson/), [Crosstrek](https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2026/2026_Crosstrek_Brochure_040926.pdf), and [Ram 1500](https://vehicleinfo.mopar.com/assets/publications/en-us-ca/2026/Ram/1500/103960_26_DT_OM_EN_USC_DIGITAL_E1_V1.pdf).

Additional sources: [Rivian R1S](https://www.edmunds.com/rivian/r1s/2026/suv/features-specs/), [Ford Explorer](https://www.ford.com/suvs/explorer/2026/models/st-line/), [Lexus GX](https://www.lexus.com/models/GX/index), [Toyota 4Runner](https://www.edmunds.com/toyota/4runner/2026/trims/), [Ford F-150](https://www.ford.com/trucks/f150/2026/), and [Toyota Tacoma](https://www.tacoma4g.com/forum/attachments/specs-2026-tacoma-specifications-pdf.49734/).

## Explore the code

`vehicles.js` defines the shared `Vehicle` class and four vehicle types that extend it. Each type adds an attribute and uses `describe()` to display its details. `catalog.js` holds the predefined choices, and `index.js` handles prompts and creates a vehicle from the selected entry.
