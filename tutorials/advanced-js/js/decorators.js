// You should use it with BABEL
/*
let lipstick = function (color) {
  return function (target) {
    target.lips = color;
  };
};

let earrings = function(target) {
  target.hasEarring = true;
}

@earrings;
@lipstick("black");
class Girl {}

console.log(`Her lips are ${Girl.lips}, and she has earrings = ${Girl.earrings}`);
*/

// ***
/*
class Car {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

const redCar = new Car("red");

redCar.getColor = function () {
  return "blah blah";
};

// We can change a function inside Car class. How to prevent that?

console.log(redCar.getColor());
*/

// DO IT WITHOUT DECORATOR
/*
class Car {
  constructor(color) {
    this.color = color;
  }
}

let descriptor = {
  value: function () {
    return this.color;
  },
  writable: false,
  configurable: true,
  enumerable: true,
};

let readonly = function (target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
};

descriptor = readonly(Car.prototype, "getColor", descriptor) || descriptor;

Object.defineProperty(Car.prototype, "getColor", descriptor);

const redCar = new Car("red");

redCar.getColor = function () {
  return "blah blah";
};

console.log(redCar.getColor()); // It doesn't return "blah blah". If you change writable to "true", it will return "blah blah".
*/

// DO IT WITH DECORATOR
let readonly = function (target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
};

class Car {
  constructor(color) {
    this.color = color;
  }

  @readonly
  getColor() {
    return this.color;
  }
}
