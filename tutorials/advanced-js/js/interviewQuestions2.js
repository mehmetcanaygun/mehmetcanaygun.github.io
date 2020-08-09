// Q6 - What is prototypal inheritance?
// A6 - Every object has property called prototype. When you create other objects from there objects, newly created object will inherit the property of its parent. When you call a method for that object, it looks its prototype first, if it can't find it, it looks for that method in its parent's prototype.
// Example
/*
let car = function (model) {
  this.model = model;
};

car.prototype.getModel = function () {
  return this.model;
};

let toyota = new car("toyota");
console.log(toyota.getModel());

let nissan = new car("nissan");
console.log(nissan.getModel());
*/

// Q7 - What is the difference between function declaration and function expression?
// A7 - 1. Anonymous function is saved in a variable in function expression. 2. Function Declaration is available even before its declaration. Function expression is not available before its declaration because it behaves like a variable and it has a variable scope.
// Example
/*
console.log(funcD());
console.log(funcE());

function funcD() {
  console.log("Function Declaration");
}

let funcE = function () {
  console.log("Function Expression");
};
*/

// Q8 - What is Promise and why do we use it?
// A8 - When you want to make an async call which has to wait for something to happen and then once it comes back you exit with a callback function. Within that callback function you might do another ajax call which can wait for another result and you would have another callback function on success or failure, and it can become kind of nested callback function hell. It's hard to read and debug. That's why to simplift that, we use promises.

// Q9 - setTimeout()
// Example - What is the order?
/*
setTimeout(function () {
  console.log("a");
}, 0);
console.log("b");
console.log("c");
// Answer - "b", "c", "a"
*/

// Q10 - What is closure and how do you use it?
// A10 - When a function return another function, the returning function will hold its environment.
// Example
/*
let obj = function () {
  let i = 0; // env for this function

  return {
    setI(k) {
      i = k;
    },
    getI() {
      return i;
    },
  };
};

let x = obj();

x.setI(2);
x.setI(4);
console.log(x.getI()); // 4
console.dir(x);
*/
