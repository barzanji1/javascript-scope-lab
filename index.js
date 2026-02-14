
// Step 1: Variable Data (Global Scope)
var burgers = ['Hamburger', 'Cheeseburger'];
var featuredDrink = 'Strawberry Milkshake';

// Step 2: Function with Function-Scoped Variable
function addBurger() {
  var newBurger = 'Flatburger';  // Function-scoped
  burgers.push(newBurger);
}

// Step 3: Block-Scoped Variable
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';  // Block-scoped
  burgers.push(anotherNewBurger);
}

// Function to Change Featured Drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';  // Modifies global variable
}
=======
// Write your solution in this file!
