class Car {
  constructor(color) {
    this.color = color;
  }

  drive() {
    console.log("Driving");
  }
}

console.dir(Car);

let redCar = new Car("red");

console.dir(redCar);

// Same thing with iife
/*
let Car2 = (function () {
  let _car = function (color) {
    this.color = color;
  };

  _car.prototype.drive = function() {
    console.log("Driving");
  }

  return _car;
})();

console.dir(Car2);
*/
