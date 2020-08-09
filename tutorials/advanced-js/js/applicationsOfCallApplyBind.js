// - They allow you to borrow functions from other objects

// *** CALL ***
// Example 1
/*
let add = function (c) {
  console.log(this.a + this.b + c);
};

let obj = {
  a: 1,
  b: 2,
};

// Call "add" function on "obj"
add.call(obj, 3);
*/

// Example 2
/*
let argsToArray = function () {
  // Convert arguments to an array by using slice functionality from Arrays prototype
  console.log([].slice.call(arguments));
};

argsToArray(1, 2, 3);
*/

// Example 3
// When you call base constructor from sub constructor, you can use "call"
/*
let mammal = function (legs) {
  this.legs = legs;
};

let cat = function (legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
console.log(lion);
*/

// *** APPLY ***
// Apply would take an array as an arguement

// Example 1
/*
let numArray = [1, 2, 3];

// console.log(Math.min(1, 2, 3));
console.log(Math.min.apply(null, numArray));
*/

// *** BIND ***
// Example 1
/*
let button = function (content) {
  this.content = content;
};

button.prototype.click = function () {
  console.log(`${this.content} clicked`);
};

let newButton = new button("add");

let looseClick = newButton.click;

let boundButton = newButton.click.bind(newButton);

looseClick();

boundButton();
*/

// Example 2
let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("parse called");
  },
  render() {
    this.asyncGet(
      function () {
        this.parse();
      }.bind(this)
    );
  },
};

myObj.render();
