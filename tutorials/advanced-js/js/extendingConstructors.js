let Mammal = function (legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "Walking";
  },
  sleep() {
    return "Sleeping";
  },
};

let Bat = function (legs, isVegetarian) {
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};

Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function () {
  return "Flying";
};

let fruitBat = new Bat(2, true);

console.dir(fruitBat.sleep());
console.dir(fruitBat.fly());
