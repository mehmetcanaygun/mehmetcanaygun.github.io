let x = 2 + "2";
let x1 = 2 + 2 + "2";
let x2 = 2 + true;
let x3 = 2 + true + "2";
let x4 = true + "2";
let x5 = Number("10");
let x6 = Number("Hello");
let x7 = Boolean(1);
let x8 = Boolean(5);
let x9 = Boolean(0);
let x10 = Boolean("Hello");
let x11 = Boolean("");
let x12 = Boolean(undefined);
let x13 = Boolean(null);
let x14 = "";

console.log(x); // "22"
console.log(x1); // "42"
console.log(x2); // "3" | true = 1, false = 0
console.log(x3); // "32"
console.log(x4); // "true2"
console.log(x5); // 10
console.log(x6, typeof x6); // NaN, "number"
console.log(x7); // true
console.log(x8); // true
console.log(x9); // false | Only number that gives false is 0
console.log(x10); // true
console.log(x11); // false
console.log(x12); // false
console.log(x13); // false

if (x14) {
  console.log("Hello");
}

if ([]) {
  console.log("Objects are always true.");
}
