// DOM Elements
const colorCode = document.querySelector("#color-code");
const increments = document.querySelector("#increments");
const startStopBtn = document.querySelector("#start-stop-btn");
const colorBox = document.querySelector("#color-box");

// Variables
let isHexa = false;
let hexaValue = "";
let rgbIncrements = "";
let rgbArr = [];
let incrementArr = [];
let interval = 250;
let isPlaying = false;
let myInterval;

// Get color code and increments.
startStopBtn.onclick = () => {
  hexaValue = colorCode.value;
  rgbIncrements = increments.value;

  // Check if color code is valid hexadecimal
  isHexa = checkIfHexa(hexaValue);

  if (isHexa) {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startStopBtn.value = "Stop";
      rgbArr = [];
      incrementArr = [];
      // Divide hexadecimal value to 3
      for (let i = 0; i < hexaValue.length; i += 2) {
        rgbArr.push(`${hexaValue[i]}${hexaValue[i + 1]}`);
      }
      // Convert hexa to decimal
      for (let i = 0; i < rgbArr.length; i++) {
        rgbArr[i] = parseInt(rgbArr[i], 16);
      }
      // Get increments for R,G,B
      incrementArr = rgbIncrements.split(",");
      // Change box color
      changeBoxColor();
    } else {
      startStopBtn.value = "Start";
      clearInterval(myInterval);
    }
  }
};

// Function: Check for hexadecimal value
function checkIfHexa(value) {
  const re = /^[0-9a-fA-F]+$/;
  if (re.test(value) && value.length == 6) {
    return true;
  } else {
    alert("Please enter a 6-digits hexadecimal value.");
    colorCode.value = "";
    return false;
  }
}

// Function: Change box color
function changeBoxColor() {
  myInterval = setInterval(() => {
    rgbArr[0] = rgbArr[0] < 255 ? rgbArr[0] + parseInt(incrementArr[0]) : 255;
    rgbArr[1] = rgbArr[1] < 255 ? rgbArr[1] + parseInt(incrementArr[1]) : 255;
    rgbArr[2] = rgbArr[2] < 255 ? rgbArr[2] + parseInt(incrementArr[2]) : 255;
    let bgStyle = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
    colorBox.style.background = bgStyle;
    colorBox.innerHTML = bgStyle;
  }, interval);
}
