// 1
(function (i) {
  return console.log(i + 1);
})(5);

// 2
(function (i) {
  return console.log(i + 1);
})(5);

// 3
!(function () {
  /* code here */
})();

// 4
-(function () {
  /* code here */
})();

// 5
+(function () {
  /* code here */
})();

// Minifying
// (function ($) {
//   $(this).addClass("MyClass");
// })(window.JQuery);

// Scope Lookup, Private Methods...

var counter = (function () {
  var i = 0;

  return {
    get: function () {
      return i;
    },
    set: function (val) {
      i = val;
    },
    increment: function () {
      i++;
    },
  };
})();

console.log(counter.get()); // 0
counter.set(5); // 5
counter.increment();
console.log(counter.get()); // 6
