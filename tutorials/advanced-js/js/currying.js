/*
var add = function (a) {
  return function (b) {
    return a + b;
  };
};

var addToFive = add(5);

console.log(addToFive(1));
*/

// ***
/*
"use strict";
var avg = function (...n) {
  let tot = 0;
  for (let i = 0; i < n.length; i += 1) {
    tot += n[i];
  }
  return tot / n.length;
};

var spiceUp = function (fn, ...n) {
  return function (...m) {
    return fn.apply(this, n.concat(m));
  };
};

var doAvg = spiceUp(avg, 1, 2, 3);

console.log(doAvg(4, 5, 6));
*/

// ***
var sayWhat = function (a) {
  return function (b) {
    return function (c) {
      console.log(`Saying ${a} to ${b} using ${c}`);
    };
  };
};

var sayHi = sayWhat("hi");
var sayHiToMe = sayHi("me");
var sayHiToMeUsingJs = sayHiToMe("javascript");

// You can also do this in single line
sayWhat("hi")("me")("javascript");
