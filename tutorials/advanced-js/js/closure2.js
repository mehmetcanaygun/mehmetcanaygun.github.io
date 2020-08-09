// PART 1

// Lexical Scoping - Variables defined in outer scopes are automatically available in inner scopes, you don't have to pass them.

/*
let f;

if (true) {
  let i = 1;

  f = () => {
    console.log(i);
  };
}

console.dir(f);

f();
*/

// PART 2

/*
let f = () => {
  let i = 1;
  let j = 2;
  return () => {
    console.log(i);
    console.log(j);
  };
};

console.dir(f());
*/

// PART 3 - Closure inside a loop
// for içinde let i = 0 dediğimizde 1,2,3 yazdırdı. var i = 0 dediğimizde 3 kez 3 yazdırdı.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("after the loop");
