// Array.from is Array's constructor method
// With Array.from you can create arrays from something
let str = "techsith";

console.log([...str]); // ["t", "e", "c", "h", "s", "i", "t", "h"]

const fromString = Array.from(str);

console.log(fromString); // ["t", "e", "c", "h", "s", "i", "t", "h"]

const fromScratch = Array.from({ length: 5 }, (val, index) => val);
const fromScratch2 = Array.from({ length: 5 }, (val, index) => "");
const fromScratch3 = Array.from({ length: 5 }, (val, index) => index);

console.log(fromScratch); // [undefined, undefined, undefined, undefined, undefined]
console.log(fromScratch2); // ["", "", "", "", ""]
console.log(fromScratch3); // [0, 1, 2, 3, 4]

// Without Array.from
const fromScratch4 = new Array(5).fill(0);
const fromScratch5 = new Array(5).fill(0).map((v, i) => i);

console.log(fromScratch4); // [0, 0, 0, 0, 0]
console.log(fromScratch5); // [0, 1, 2, 3, 4]

// Remove dups & get unique values
const arr = [1, 1, 2];

const unique = Array.from(new Set(arr));

console.log(unique); // [1, 2]

// Remove dups without Array.from
const unique2 = [...new Set(arr)];

console.log(unique2); // [1, 2]

// Another example
const func = function () {
  console.log(Array.from(arguments).join(""));
};

func("t", "e", "c", "h", "s", "i", "t", "h"); // "techsith"
