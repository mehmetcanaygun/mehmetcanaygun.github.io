/*
// PART 1

console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
  console.log("Wife: I have the tickets.");
  console.log("Husband: We should go in.");
  console.log("Wife: No, I'm hungry.");

  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});

const getButter = getPopcorn.then((t) => {
  console.log("Husband: I got some popcorn. We should go in now.");
  console.log("Wife: No, I need butter on my popcorn.");

  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
});

getButter.then((t) => console.log(t));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");
*/

/*
// PART 2

console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("Popcorn"));

  const getButter = new Promise((resolve, reject) => resolve("Butter"));

  let ticket = await promiseWifeBringingTickets;

  console.log(`Wife: I have the ${ticket}.`);
  console.log("Husband: We should go in.");
  console.log("Wife: No, I'm hungry.");

  let popcorn = await getPopcorn;

  console.log(`Husband: I got some ${popcorn}. We should go in now.`);
  console.log("Wife: No, I need butter on my popcorn.");

  let butter = await getButter;

  console.log(`Husband: I got some ${butter} on popcorn. Anything else?`);
  console.log("No, let's go!");

  return ticket;
};

preMovie().then((m) => console.log(`Person 3: Show ${m}`));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");
*/

/*
// PART 3 - Resolve when everything is done
console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("Popcorn"));

  const getCandy = new Promise((resolve, reject) => resolve("Candy"));

  const getCoke = new Promise((resolve, reject) => resolve("Coke"));

  let ticket = await promiseWifeBringingTickets;

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getCoke,
  ]);

  console.log(`${popcorn}, ${candy}, ${coke}`);

  return ticket;
};

preMovie().then((m) => console.log(`Person 3: Show ${m}`));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");
*/

/*
// PART 4 - Error Handling
console.log("Person 1: Shows Ticket");
console.log("Person 2: Shows Ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Ticket");
    }, 3000);
  });

  let ticket;

  try {
    ticket = await promiseWifeBringingTickets;
  } catch (e) {
    ticket = "No Ticket";
  }

  return ticket;
};

preMovie().then((m) => console.log(`Person 3: Show ${m}`));

console.log("Person 4: Shows Ticket");
console.log("Person 5: Shows Ticket");
*/

// PART 5 - Testing
const testUserForm = async () => {
  const loadUserForm = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Page Loaded"), 3000);
  });

  const enterUserName = new Promise((resolve, reject) => {
    setTimeout(() => resolve("User Entered"), 3000);
  });

  const verifyUserDetails = () => {};

  await loadUserForm;
  await enterUserName;
  const testResult = verifyUserDetails(); // This will not happen because the form has to load first, and then user has to put some input

  return testResult;
};
