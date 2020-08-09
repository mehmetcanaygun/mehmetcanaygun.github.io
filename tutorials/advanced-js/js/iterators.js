// ITERABLE
let numArray = [3, 7, 9, 4];

console.dir(numArray); // There is Symbol.iterator in __proto__

let anObject = {
  name: "bob",
  age: 20,
  friends: ["john", "kim", "peter"],
  getName: function () {
    return this.name;
  },
};

console.dir(anObject); // There is no Symbol.iterator in __proto__

// This for loop won't work. Error.
try {
  for (let key of anObject) {
    console.log(key);
  }
} catch {
  console.log("Error. For-Of does not work on objects.");
}

// This works. Weakness is: It will print out all the keys including anything that is defined by user and its prototype
for (let key in anObject) {
  console.log("Key from 'anObject': " + key);
}

// ***
let mySet = new Set([1, 2, 2, 2, 3]);

console.dir(mySet); // Iterable

for (let val of mySet) {
  console.log("Value from mySet: " + val);
}

// ITERATOR
let arr = [1, 2, 3, 4, 5];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
