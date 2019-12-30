// DOM Elements
const binaryInput = document.querySelector("#binary-input");
const outputBox = document.querySelector("#output-box");

function convert(val) {
  if (
    val.includes("2") ||
    val.includes("3") ||
    val.includes("4") ||
    val.includes("5") ||
    val.includes("6") ||
    val.includes("7") ||
    val.includes("8") ||
    val.includes("9")
  ) {
    outputBox.className = "h2 alert alert-danger";
    outputBox.innerHTML =
      "Binary numbers should not contain any number other than 0 and 1.";
  } else {
    outputBox.className = "h2 alert alert-dark";
    outputBox.innerHTML = "";
    let decimal = 0;
    let currentDigit = 0;
    for (let i = val.length - 1; i >= 0; i--) {
      currentDigit = parseInt(val[i]);
      decimal += currentDigit * Math.pow(2, Math.abs(i - val.length + 1));
    }
    outputBox.innerHTML = decimal;
  }
}
