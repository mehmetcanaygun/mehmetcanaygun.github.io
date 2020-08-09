// FLAT
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrix2 = [
  [1, 1],
  [1, [[[[[[1]]]]]]],
];

const flatArray = matrix.flat(1);
const flatArray2 = matrix2.flat(Infinity);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]
console.log(flatArray2); // [1, 1, 1, 1]

let total = matrix2.flat(Infinity).reduce((a, v) => a + v, 0);

console.log(total); // 4

// FLATMAP
const nums = [1, 2, 3];
const strs = ["one", "two", "three"];

const mapped = nums.map((val, index) => [val, strs[index]]);

const flatMapped = nums.flatMap((val, index) => [val, strs[index]]);

console.log(mapped); // [[1, "one"], [2, "two"], [3, "three"]]
console.log(flatMapped); // [1, "one", 2, "two", 3, "three"]

// REDUCERIGHT
const strs2 = ["t", "s", "e", "b"];

let best = strs2.reduce((c, v) => c + v);
let best2 = strs2.reduceRight((c, v) => c + v);

console.log(best); // tseb
console.log(best2); // best

// COPYWITHIN
const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

nums2.copyWithin(0, 3, 5);

console.log(nums2); // [3, 4, 2, 3, 4, 5, 6, 7, 8, 9]
