// Object.setPrototypeOf(dObj, sObj);
// destionationObj, sourceObj

let toyota = {
  drive() {
    return "Driving Toyota";
  },
};

let camry = {
  wifi() {
    return "Using WiFi";
  },
};

Object.setPrototypeOf(camry, toyota);
console.dir(camry.drive());
console.dir(camry.wifi());

// What if they both have drive method, and we want to use toyota's drive() in camry's drive();

let toyota2 = {
  drive() {
    return "Driving Toyota2";
  },
};

let camry2 = {
  drive() {
    return `${super.drive()} Camry2`;
  },
};

// You can also set prototype with this syntax (not recommended)
camry2.__proto__ = toyota2;
console.dir(camry2.drive());
