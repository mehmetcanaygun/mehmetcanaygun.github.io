// ***
let one = 1;
let two = 2;

let sum = `Adding ${one} and ${two} gives me ${one + two}`;

let tagged = function (strArray, ...vals) {
  console.log(strArray);
  console.log(vals);
};

tagged`Adding ${one} and ${two} gives me ${one + two}`;

// ***
console.log(`hello World`.startsWith("hell"));

console.log(`hello World`.endsWith("orld"));

console.log(`hello World`.includes("wow"));

console.log("hello World".repeat(3));

let raw = String.raw`Not a new line: \n`;

console.log(raw);
