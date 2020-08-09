// Part 1

// var passed = 3;

// var addTo = function () {
//   var inner = 2;
//   return passed + inner;
// };

// console.dir(addTo);

// Part 2 - Closures are functions with preserved data
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };

  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

// console.dir(addThree);
// console.dir(addFour);

console.log(addThree(1));
console.log(addFour(1));
