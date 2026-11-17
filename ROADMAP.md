# Vehicle Builder Roadmap

This roadmap breaks the project into learning milestones. Future milestones are plans, and their order and scope can change.

## 1. JavaScript console catalog: current

**Goal:** Explore object-oriented JavaScript through a working terminal app.

- Choose a category and model from the catalog, then display vehicle details and a sample review.
- Handle invalid menu choices and allow another selection.
- Use classes, inheritance, methods, objects, arrays, and ES modules.
- Run the existing checks with `node --test`.

## 2. Console improvements and testing: planned

**Goal:** Make the console easier to navigate and strengthen its tests.

- Return to the previous menu or choose another model in the same category. (Implemented.)
- Compare two selected vehicles and their details.
- Expand tests for selection, invalid input, and vehicle data.
- Review how vehicle configurations and console output are represented.

**Learning focus:** functions, object parameters, test cases, and separation of concerns.

**Done when:** A user can navigate back, compare two vehicles, and run the updated tests successfully.

## 3. TypeScript migration: planned

**Goal:** Add types while keeping the console app's behavior.

- Configure TypeScript and convert the catalog, classes, and terminal app.
- Define types for shared vehicle details and category-specific properties.
- Update the run and test instructions for the new setup.

**Learning focus:** types, interfaces, compiler feedback, and working with existing JavaScript.

**Done when:** The app builds, the console flow still works, and the tests pass.

## 4. Browser interface with HTML and CSS: planned

**Goal:** Browse the catalog on a web page using plain HTML, CSS, and TypeScript.

- Select a category and model and display its details in the browser.
- Create a readable layout for desktop and mobile screens.
- Reuse the catalog and vehicle logic where practical, keeping terminal and browser display code separate.

**Learning focus:** HTML forms, CSS, DOM events, ES modules, and accessible labels and keyboard controls.

**Done when:** A user can select and view a vehicle with a mouse or keyboard at desktop and mobile widths.

## 5. React interface: planned

**Goal:** Rebuild the browser experience with React components and state.

- Split the selection and details views into components.
- Manage the selected category and model with React state.
- Keep the catalog and shared vehicle logic usable from the interface.

**Learning focus:** components, props, state, and rendering from data.

**Done when:** The React app supports the browser selection flow and displays the correct vehicle details.

## 6. Tailwind CSS: planned

**Goal:** Style the React interface with Tailwind CSS.

- Add Tailwind to the React project and style the existing interface.
- Support desktop and mobile layouts while retaining keyboard access and readable text.

**Learning focus:** utility classes, responsive design, and accessible styling.

**Done when:** The styled selection flow works across screen sizes and remains usable with a keyboard.

## 7. Customization and persistence: ideas

**Goal:** Let users make a vehicle their own and revisit it later.

- Explore selectable options such as color or tires and show their effect on the vehicle.
- Save and revisit selections using browser local storage.
- Add browser filtering or comparison if it fits the experience.

**Learning focus:** state, input validation, persistence, and modeling options. Decide the exact scope and data sources when this milestone begins.

**Done when:** A user can customize a vehicle, save it, and retrieve it after reopening the browser.
