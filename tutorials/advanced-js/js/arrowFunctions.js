"use strict";

// ***
var getB = function (b) {
  return b;
};

console.log(getB(1));

// ***
let getA = (a) => a;

console.log(getA(1));

// ***
let square = (a) => a * a;

console.log(square(2));

// ***
var c = 3;

let cube = () => {
  return c * c * c;
};

console.log(cube(c));

// *** In this case, there will be an error. Because there is not any "this" in setTimeout. Use arrow function instead. It will bind parent's "this" to it.
var x = function () {
  this.val = 1;

  setTimeout(function () {
    this.val++;
    console.log(this.val);
  }, 1);
};

var x1 = new x();

// *** But if you want to use "this" belongs to that function, don't use arrow functions
var y = function () {
  this.val = 1;
  setTimeout(() => {
    this.val++;
    console.log(this.val);
  }, 1);
};

var y1 = new y();

// *** Arrow Functions do not have "arguements" variable, use "...n" syntax instead
var a = function () {
  console.log(arguments[0]);
};

a(1, 2, 3);

var b = (...n) => {
  console.log(n[0]);
};

b(4, 5, 6);
