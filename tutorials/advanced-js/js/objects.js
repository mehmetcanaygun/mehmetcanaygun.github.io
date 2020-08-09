// Create a new object
/*
var x = new Object();
var y = {};

console.dir(x);
console.dir(y);


// Create an object with properties
var Pizza = {
  crust: "thin",
  toppings: 3,
  hasBacon: true,
  howManyToppings: function () {
    return this.toppings;
  },
};

// Add a new property
Pizza.price = "$12.00";

// Delete a property
delete Pizza.crust;

console.log(Pizza);
*/

// Create objects from other objects - Function objects
/*
var Pizza = function () {
  this.crust = "thin";
  this.toppings = 3;
  this.hasBacon = true;
};

var PizzaA = new Pizza();
var PizzaB = new Pizza();

PizzaA.crust = "pan";

console.log(PizzaA.crust);
console.log(PizzaB instanceof Pizza);
console.log(PizzaB.constructor);
*/

// Private variables and methods
/*
var Pizza = function () {
  var crust = "thin";
  this.hasBacon = true;
  var toppings = 3;

  this.getHasBacon = function () {
    return this.hasBacon;
  };

  this.getCrust = function () {
    return crust;
  };

  var getToppings = function () {
    return toppings;
  };
};

var pizzaA = new Pizza();

console.log(pizzaA.getHasBacon());
console.log(pizzaA.getCrust());
console.log(pizzaA.getToppings()); // error
*/

// Get private methods
var Pizza = function () {
  var crust = "thin";
  var toppings = 3;

  var getToppings = function () {
    return toppings;
  };

  var tmp = {};
  tmp.getToppings = getToppings;

  return tmp;
};

var pizzaA = new Pizza();

console.log(pizzaA);
