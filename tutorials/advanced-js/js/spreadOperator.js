// ***
var x = function (a, b, ...n) {
  console.log(n);
};

x(1, 2, 3, 4);

// ***
var dowhatever = ["have fun", "have more fun", "have even more fun"];

var life = ["born", "learn to walk", "learn js", ...dowhatever, "go to heaven"];

console.log(life);

// ***
var a = [1, 2, 3];
var b = [4, 5, 6];

a.push(...b);

console.log(a);
