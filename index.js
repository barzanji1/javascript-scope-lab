// Step 1: Variable Data (Global Scope)
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function with Function-Scoped Variable
function addBurger() {
  var newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Block-Scoped Variable
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to Change Featured Drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}