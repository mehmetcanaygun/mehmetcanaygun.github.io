// ***
/*
let toyota = {
  drive() {
    return "Driving Toyota";
  },
  break() {
    return "Breaking Toyota";
  },
};

let camry = {
  wifi() {
    return "Using Wifi";
  },
  drive() {
    return "Driving Camry";
  },
};

Object.assign(camry, toyota);

console.dir(camry.drive());
*/

// ***
/*
let toyota = {
  drive() {
    return "Driving Toyota";
  },
  break() {
    return "Breaking Toyota";
  },
};

let copyToyota = Object.assign({}, toyota);

console.dir(copyToyota);

// Add new methods
Object.assign(toyota, {
  wifi() {
    return "Using Wifi";
  },
  color() {
    return "Red";
  },
});

console.dir(toyota);
*/

let c1 = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

// Instead you can do this
let c2 = function (a, b, c) {
  Object.assign(this, { a, b, c });
};
