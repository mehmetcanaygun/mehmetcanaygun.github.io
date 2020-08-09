// ***
/*
const x = {};

const a = {};
const b = { num: 1 };

x[a] = "a";
x[b] = "b";

console.log(x);
// JS objects only supports 1 object key.
*/

// ***
/*
const a = {};
const b = {
  num: 1,
};

const map = new Map();

map.set(a, "a");
map.set(b, "b");

// This also works
// map.set(a, "a").set(b, "b");

// Overwrite
map.set(a, "a").set(b, "b").set(a, "c");

// Remove a key
// map.delete(b);

// Iterate
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// Convert map into a 2 dimensional array
const arr = [...map];

console.dir(arr);

console.dir(map);
*/

// ***
// Once you define maps key, it holds it in the memory and it does not let garbage collector to remove it even if the original key is removed. That's why we need weak maps

{
  let x = {
    a: [1, 2],
  };

  var map = new Map();
  map.set(x, "something");
}

console.log(map);
// "let" is block scoped, so it shouldn't be available outside its block, but it is available here. Use WeakMap instead.

{
  let y = {
    b: [1, 2],
  };

  var weakmap = new WeakMap();
  weakmap.set(y, "something");
}

console.log(weakmap);
