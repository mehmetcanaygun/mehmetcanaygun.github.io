// 0 - 000
// 1 - 001
// 2 - 010
// 3 - 011
// 4 - 100

// AND
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1

// OR
// 0 | 0 = 0
// 0 | 1 = 1
// 1 | 1 = 1

// XOR
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 1 = 0

console.log((4555).toString(2)); // "1000111001011"
console.log(parseInt("1000111001011", 2)); // 4555
console.log((0b1000111001011).toString(10)); // "4555"
console.log((0b1000111001011).toString(16)); // "11cb"
console.log((0b1000111001011).toString(8)); // "10713"

console.log(0 & 1); // 0
console.log(0 | 1); // 1
console.log(0 ^ 1); // 1

console.log(1 & 3); // 1
console.log(1 | 3); // 3
console.log(1 ^ 3); // 2

// SHIFT LEFT
console.log(9 << 2); // 36
console.log((9).toString(2)); // "1001" - Shift left by 2 would be 100100
console.log((0b100100).toString(10)); // "36"

// SHIFT RIGHT
console.log(9 >> 2); // 2
console.log((9).toString(2)); // "1001" - Shift right by 2 would be 10
console.log((0b10).toString(10)); // "2"
