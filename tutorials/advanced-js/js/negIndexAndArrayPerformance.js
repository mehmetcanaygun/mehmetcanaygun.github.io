// ***
const arr = [1, 2, 3];

arr[-1] = 0;
arr["myKey"] = "myValue";

console.log(arr); // [1, 2, 3, -1: 0, myKey: "myValue"] but the length is still 3

// ***
const arr2 = [];

arr2["a"] = "aVal";
arr2["b"] = "bVal";

console.log(arr2); // [a: "aVal", b: "bVal"] but the length is 0

for (let key in arr2) {
  console.log(`${key}: ${arr2[key]}`);
}

// - Arrays can act like objects.

// ***
const obj = {};

obj[0] = 1;
obj[1] = 2;
obj[2] = 3;

console.log(obj); // {0: 1, 1: 2, 2: 3} - Difference is there is no length

// *** Performance ***

// Creating a giant array
console.time("Array");

const a = [];
for (let i = 0; i < 1000000; i++) {
  a[i] = i;
}

console.timeEnd("Array");

// Creating a giant object
console.time("Object");

const o = [];
for (let i = 0; i < 1000000; i++) {
  o[i] = i;
}

console.timeEnd("Object");

// Insert in the array
console.time("Array Insert");

a[50000] = 50000;

console.timeEnd("Array Insert");

// Insert in the object
console.time("Object Insert");

o[50000] = 50000;

console.timeEnd("Object Insert");
