// document.getElementById("myBtn").addEventListener("click", () => {
//   console.log("Clicked");
// });

// Click many times but accept the last click
// Debounce - Set a timeout.
const debounce = (fn, delay) => {
  let timeoutID;

  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.getElementById("myBtn").addEventListener(
  "click",
  debounce((e) => {
    console.log("Clicked");
  }, 2000)
);
