// Factory Pattern

// var peopleFactory = function (name, age, state) {
//   var temp = {};
//   temp.name = name;
//   temp.age = age;
//   temp.state = state;

//   temp.printPerson = function () {
//     console.log(this.name + ", " + this.age + ", " + this.state);
//   };

//   return temp;
// };

// var person1 = peopleFactory("John", 23, "CA");
// var person2 = peopleFactory("Kim", 27, "SC");

// person1.printPerson();
// person2.printPerson();

// Constructor Pattern

// var peopleConstructor = function (name, age, state) {
//   this.name = name;
//   this.age = age;
//   this.state = state;

//   this.printPerson = function () {
//     console.log(this.name + ", " + this.age + ", " + this.state);
//   };
// };

// var person1 = new peopleConstructor("John", 23, "CA");
// var person2 = new peopleConstructor("Kim", 27, "SC");

// person1.printPerson();
// person2.printPerson();

// Prototype Pattern

// var peopleProto = function () {};

// peopleProto.prototype.age = 0;
// peopleProto.prototype.name = "No name";
// peopleProto.prototype.state = "No city";
// peopleProto.prototype.printPerson = function () {
//   console.log(this.name + ", " + this.age + ", " + this.state);
// };

// var person1 = new peopleProto();
// // person1.name = "John";
// person1.age = 23;
// person1.state = "CA";

// person1.printPerson();

// // Prototype is a place for shared data. When you declare name, age or state than the default values from prototype are overwrited.

// console.log("name" in person1);
// console.log(person1.hasOwnProperty("name"));

// Dynamic Prototype Pattern

var peopleDynamicProto = function (name, age, state) {
  this.age = age;
  this.name = name;
  this.state = state;

  if (typeof this.printPerson !== "function") {
    peopleDynamicProto.prototype.printPerson = function () {
      console.log(this.name + ", " + this.age + ", " + this.state);
    };
  }
};

var person1 = new peopleDynamicProto("John", 23, "CA");

person1.printPerson();

console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));
