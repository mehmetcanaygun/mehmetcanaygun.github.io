/*
var x = function () {
  if (true) {
    var y = 1;
    // var doesn't respect block boundries, only respect function boundries
  }

  console.log(y);
};

x();
*/

/*
var x = function () {
  var y = 1;

  var z = function () {
    console.log(y);
  };

  z();
};

x();
*/

// Hoisting
var x = function () {
  console.log(y);
  var y = 1;
  // It doesn't say "y is not defined", it simply gives undefined. So, y is defined but not assigned any value. Whenever you define a variable within the function, the value 1 is available from that point to end of the function. But before, it gives undefined. It essentially puts "var y;" at the top(hoisted to the top), and assigned where it is assigned(y = 1).
};

x();
