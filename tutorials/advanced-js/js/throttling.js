// document.getElementById("myBtn").addEventListener("click", () => {
//   console.log("Clicked");
// });

const throttle = (fn, delay) => {
  let last = 0;

  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }

    last = now;
    return fn(...args);
  };
};

document.getElementById("myBtn").addEventListener(
  "click",
  throttle((e) => {
    console.log("Clicked");
  }, 5000)
);
