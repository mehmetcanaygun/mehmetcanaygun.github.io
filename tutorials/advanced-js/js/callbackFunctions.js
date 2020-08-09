// Part 1

// let x = function () {
//   console.log("i am called from inside a function");
// };

// let y = function (callback) {
//   console.log("do something");
//   callback();
// };

// y(x);

// Part 2

// let calc = function (num1, num2, calcType) {
//   if (calcType === "add") {
//     return num1 + num2;
//   } else if (calcType == "multiply") {
//     return num1 * num2;
//   }
// };

// console.log(calc(2, 3, "add"));

// Better way

let add = function (a, b) {
  return a + b;
};

let multiply = function (a, b) {
  return a * b;
};

let calc = function (num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  }
};

console.log(calc(2, 3, add));

console.log(
  calc(2, 3, function (a, b) {
    return a - b;
  })
);
