// DOM Elements
const box = document.querySelector("#box");
const copyText = document.querySelector("#copy-text");

// Variables
let topLeft = "0";
let topRight = "0";
let bottomLeft = "0";
let bottomRight = "0";

borderRadius = "";

function changeRadius(id, val) {
  if (id == "top-left") {
    topLeft = val;
  } else if (id == "top-right") {
    topRight = val;
  } else if (id == "bottom-left") {
    bottomLeft = val;
  } else if (id == "bottom-right") {
    bottomRight = val;
  }
  borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  box.style.borderRadius = borderRadius;
  copyText.value = `border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
}

function copyRadius() {
  copyText.select();
  document.execCommand("copy");
}
