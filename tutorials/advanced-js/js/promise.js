// Part 1

// let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
//   // Cleaning the room
//   let isClean = false;

//   if (isClean) {
//     resolve("clean");
//   } else {
//     reject("not clean");
//   }
// });

// promiseToCleanTheRoom
//   .then(function (fromResolve) {
//     console.log("The room is " + fromResolve);
//   })
//   .catch(function (fromReject) {
//     console.log("The room is " + fromReject);
//   });

// Part 2 - To remove garbage you have to clean the room, to win an icecream you have to finish both.

let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("clean the room");
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "remove garbage");
  });
};

let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "win ice cream");
  });
};

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIcecream(result);
  })
  .then(function (result) {
    console.log("Finished " + result);
  });

// Part 3 - Do everything at the same time
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
  console.log("All finished.");
});

// Part 4 - Wait for only one of them to finish
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
  console.log("One of them finished.");
});
