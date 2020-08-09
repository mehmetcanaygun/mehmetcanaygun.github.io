"use strict"; // With strict mode, you can not, for example, use undeclared variables

// *** "this" inside global scope

// house
this.table = "Window table";
this.garage = {
  table: "Garage table",
  // cleanTable() {
  //   console.log(`Cleaning ${this.table}`);
  // },
};

// *** "this" inside an object
let johnsRoom = {
  table: "John's table",
  // cleanTable() {
  //   console.log(`Cleaning ${this.table}`);
  // },
};

// console.log(johnsRoom.table);
// console.log(this.johnsRoom.table); // error

// *** "this" inside a method (line 9 & 17)
// this.garage.cleanTable();
// johnsRoom.cleanTable();

// *** "this" inside a function
const cleanTable = function (soap) {
  console.log(`Cleaning ${this.table} using ${soap}`);
};

// In strict mode cleanTable won't work. Use "call".

cleanTable.call(this, "some soap");

// execute cleanTable as if it is a method of "this" and "this" being the global object.

// Also we can use "call" on this.garage and johnsRoom (comment out cleanTable methods in these)
cleanTable.call(this.garage, "soap for garage");
cleanTable.call(johnsRoom, "soap for John's room");

// *** "this" inside an inner function
const repairTable = function (tool) {
  const innerFunction = (_tool) => {
    console.log(`Repairing ${this.table} using ${_tool}`);
  };

  innerFunction(tool);
};

repairTable.call(this, "hammer");

// *** "this" inside a constructor
let createRoom = function (name) {
  this.table = `${name}'s room`;
};

const jillsRoom = new createRoom("Jill");

// Instead, you can put the cleanRoom function in prototype of createRoom

// *** "this" inside class
/*
class createRoom {
  constructor(name) {
    this.table = `${name}'s table`
  }

  cleanTable(soap) {
    console.log(`Cleaning ${this.table} using ${soap}`);
  }
}
*/
