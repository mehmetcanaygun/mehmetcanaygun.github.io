// ***
setTimeout(() => {
  console.log("Greetings from setTimeout");
}, 1000);

let message = () => {
  console.log("Hello");
};

setTimeout(message, 5000);

// ***
setInterval(message, 1000);
