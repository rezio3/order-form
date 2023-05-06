# Order form

This is my recruitment task for hmmh Poland for Frontend Developer position.

Website: https://rezio3.github.io/order-form-recruitment-task/
(This is only desktop version)

## Quickstart

1. Clone this repository using:
   git clone https://github.com/rezio3/recruitment-task.git

2. Installation:
   npm install

3. To use development version:
   npm start

4. To use production build:
   npm run build

### Task description

The order form consists of 7 steps. The first 3 steps are related to customizing the product: 1) selecting the location of the print on the t-shirt, 2) choosing a graphic, and 3) selecting an effect to be applied to the graphic.
Step 4 is a summary of the created product with a required approval and the ability to edit previous steps. Pages 5 and 6 concern the provision of the customer's personal data for the invoice and the method of order pickup: in-person pickup or shipment with the address provided. Page 7 is a summary of the entire order with the ability to edit individual steps. Transitions between steps occur without reloading the page.

### About code structure

\- Due to the fact that the project was created in vanilla JS, I mainly relied on the native browser API.

\- The JavaScript code has been divided into modules that correspond to individual form steps, entities (product, delivery address), and functionalities (validations, changing buttons depending on the step).

\- After submitting the order, a final object is available in the console, containing all the data related to the order.

\- Consciously, I made a decision not to use classes, which are syntactic sugar in JavaScript. Nevertheless, I used a constructor function to create the "final order" object.

\- All user events are located in the main app.js file.

\- Classes and selectors were used in accordance with the BEM (Block, Element, Modifier) convention.
