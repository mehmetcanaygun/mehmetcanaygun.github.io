const MyFunc = function () {
  this.i = 0;

  this.add = function (x) {
    this.i += x;
    return this;
  };

  this.substract = function (x) {
    this.i -= x;
    return this;
  };

  this.print = function () {
    console.log(this.i);
  };
};

const myObj = new MyFunc();

// myObj.add(3);
// myObj.substract(2);
// myObj.print();

// To chain functions, return "this" in functions
myObj.add(3).substract(2).print();

// Function Chaining in Closure
const test = function () {
  let i = 0;

  const add = function (x) {
    i += x;
    return this;
  };

  const substract = function (x) {
    i -= x;
    return this;
  };

  const print = function () {
    console.log(i);
  };

  return { add, substract, print };
};

const testObj = test();

testObj.add(5).substract(3).print();
