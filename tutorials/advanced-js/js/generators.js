function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Difference is, when we call the first next() it yields only 1(the first yield). Every time we call next, it yields the remaining values.

// *** How to build something that there is no limit
function* infiniteMaker() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

let iterator2 = infiniteMaker();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// It looks like an infinite loop, but it pauses everytime it yields a value, so it doesn't cause stack overflow. This is the advantage of generator. It pauses, it maintains the state.

// ***
function* genOne() {
  yield 1;
  yield* genTwo();
  return "hello"; // this will be the last one
  yield 3;
}

function* genTwo() {
  yield 2;
}

let iter = genOne();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// ***
function request(url) {
  return new Promise(function (resolve, reject) {
    makeAjaxCall(url, function (err, text) {
      if (err) reject(err);
      else resolve(text);
    });
  });
}

function* geno() {
  yield request("url1");
  yield request("url2");
}
