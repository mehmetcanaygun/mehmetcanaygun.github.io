// ***
/*
let a = 1;

let change = (val) => {
  val = 2;
};

change(a);

console.log(a);
*/

// In JS, it is always pass by reference

// ***
/*
let a = { num: 1 };

let change = (val) => {
  val.num = 2;
  // Instead of replacing the entire object with an emptry object, let's mutate it. So it is being passed by reference, when we mutate it it is reflected to a.
};

change(a);

console.log(a);
*/

// ***
let a = { num: 1 };
let b = a;

a.num = 2;

console.log(a); // {num: 2}
console.log(b); // {num: 2}

// b is linked to a, so it also changes b.

// If a assigned to an empty object, than outputs would be console.log(a) = {}, console.log(b) = {num: 2}. When a is reassigned, that reference is lost. Reassignment changes its address regardless of it is primite value or object. When mutating, it keeps the reference.
