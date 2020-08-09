// Q1 -  What is the difference between "var" and "let"?
// A1 - "let" has block scope, "var" has function scope. Variables defined with "var" gets hoisted to the top.

// Q2 - What is the difference between "==" and "==="?
// A2 - They both are comparison operators. Difference is when you use "==" it just compares the values, but doesn't compare the type. "===" compares both the values and the type.

// Q3 - What is the difference between "let" and "const"?
// A3 - They are both used to define variables. "const" - after the first assignment of value, you cannot reassign value. "let" - you can reassign value.

// Examples of "const"
/*
const c;
c = 1;
console.log(c); // Missing Initializer

const cArr = [1, 2];
cArr.push(3);
console.log(cArr); // [1,2,3]
*/

// Q4 - What is the difference between "null" and "undefined"?
// A4 - They both represent empty value. Difference is when you define a variable but not assigning it, JS assigns it to "undefined". If you want to assign null, you should do it. Second difference is, type of undefined is undefined, but type of null is object.

// Q5 - What is the use of arrow functions?
// A5
// Example of arrow functions
/*
const profile = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = function (n) {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};

profile.setName("John Doe");
console.log(profile.firstName); // gets nothing
console.log(window.firstName); // "John"

// With arrow function
const profile2 = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = (n) => {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};

profile2.setName("John Doe");
console.log(profile2.firstName); // "John"
*/
