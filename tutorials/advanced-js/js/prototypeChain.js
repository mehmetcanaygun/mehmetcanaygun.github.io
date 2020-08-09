// Car Constructor
const Car = function () {};

Car.prototype = {
  print() {
    return "I am a Car";
  },
};

// ToyCar Constructor
const ToyCar = function () {};

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function () {
  return "I am a Toy Car";
};

// ToyTransformer Constructor
const ToyTransformer = function () {};

ToyTransformer.prototype = Object.create(ToyCar.prototype);

ToyTransformer.prototype.print = function () {
  return "I am a Toy Transformer";
};

// Objects
const toyota = new Car();
const lego = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print());
console.log(lego.print());
console.log(optimusPrime.print());

console.dir(optimusPrime);

// If we didn't create a print function for ToyTransformer, than it would print "I am a Toy Car"
