// SET

// Sets are reference data types. They allow you to store unique values of any data types. You cannot have duplicate values. Sets are unique lists.

const arr = [1, 2, 3];

const mySet = new Set(arr);

// We cannot set a new item in a set like we do in arrays. Something like "arr[0] = 1;" won't work for sets. We have to use prototype methods.

// Sets take arguments that are iterable. Arrays are iterable.

// mySet.add(1).add(2).delete(1);

for (let val of mySet) {
  console.log(val);
}

// mySet.clear();

console.log(mySet);
console.log(`Size: ${mySet.size}`);

// Turn set into an array
const arr2 = [5, 6, 7];
console.log([...new Set(arr2)]);
console.log(Array.from(arr2));

// WEAK SET
// You can only add objects to WeakSets.
// WeakSets are not iterable

const ws = new WeakSet();
const ws2 = new WeakSet([{ a: 1 }, { b: 2 }]);

ws.add({ num: 1 });

console.log(ws);
