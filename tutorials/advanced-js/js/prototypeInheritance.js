// *** Prototype Concept ***
// By default, every function has a property called prototype. This property is empty by default, and you can add properties and methods to it. When you create objects(x1) from this function(x), they would inherit these properties and methods that's defining x's prototype.

// Javascript has protype based inheritance

// *** Constructor ***
// Every function expression in JS is a constructor. As a good practice use first letter capital for constructor names.

/*
var X = function (j) {
  this.i = 0;
  this.j = j;

  this.getJ = function () {
    return this.j;
  };
};

// Create instances of X
var x1 = new X(1);
var x2 = new X(2);

console.log(x1.getJ());
console.log(x2.getJ());
*/

// x1 and x2 inherite all properties and methods from X. If we have a 1000 objects inherited from X, they will all have the function getJ. This is redundant. To fix this, we use prototypes.

/*
var X = function (j) {
  this.i = 0;
  this.j = j;
};

X.prototype.getJ = function () {
  return this.j;
};

// Create instances of X
var x1 = new X(1);
var x2 = new X(2);

console.log(x1.getJ());
console.log(x2.getJ());
*/

// Now they still behave the same, but the difference is x1 and x2 do not own getJ methods. When we call getJ, they look up into the prototype chain, into their parent to see if they can find it. So x1 and x2 uses X's method which is not inside x1 or x2. This way the objects are much smaller.

// *** Master Object ***
// Every object in JS is created from Master Object.

var X = function () {};

console.dir(X);
