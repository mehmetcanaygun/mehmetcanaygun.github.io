// *** globalThis ***
console.log(window); // Can't be used in Node.JS
console.log(self); // Only "self" works in Web Worker
console.log(frames);
console.log(this);
console.log(globalThis); // Works everywhere

// *** Promise.allSettled() ***
// Wait for all promises that will either resolve or reject
const p1 = new Promise((resolve, reject) => setTimeout(resolve, 200));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 300));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 4000));

Promise.allSettled([p1, p2, p3]).then((results) =>
  results.forEach((result) => console.log(result))
);

// *** Nullish Coalescing Operator (??) ***
let x = {
  profile: {
    name: "John",
    age: 21,
    address: "",
    shoeSize: 0,
  },
};

console.log(x.profile.lastname || "Doe");
// If lastname was an empty string, it would still print "Doe"
console.log(x.profile.shoeSize || 42);
// Also accepts 0 as undefined and gives 42

console.log(x.profile.address ?? "XYZ St"); // ""
console.log(x.profile.shoeSize ?? 42); // 0

// *** Optional Chaining Operator (?.) ***
let x2 = {
  profile: {
    name: "",
  },
};

let y = {};

let z = {
  profile: {},
};

let w = {
  profile: {
    name: "John",
  },
};

console.log(x2.profile.age); // undefined
// console.log(y.profile.age); // Uncaught TypeError - When there is 2 level of undefined, it gives error

console.log(y && y.profile && y.profile.name); // undefined

console.log(z && z.profile && z.profile.name); // undefined

console.log(w && w.profile && w.profile.name); // "John"

console.log(w?.profile?.name); // "John"
console.log(y?.profile?.name); // undefined

// *** BigInt ***
const max = Number.MAX_SAFE_INTEGER;

console.log(max); // 9007199254740991
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992

const bigOne = 1n;

console.log(bigOne + 1n); // 2n
console.log(bigOne + 2n); // 3n

const bigTwo = BigInt("2");

console.log(bigTwo); // 2n
