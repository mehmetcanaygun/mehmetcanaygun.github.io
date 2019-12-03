// DOM Elements
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const jsonTextarea = document.querySelector("#json-textarea");
const csvTextarea = document.querySelector("#csv-textarea");

// Variables
let jsonText = "";
let csvText = "";
let keys = [];
let values = [];
// let tempObj = { id: 1, username: "can" };
// console.log(Object.keys(tempObj));

// Get JSON with button click
convertBtn.onclick = () => {
  jsonText = jsonTextarea.value;
  // Check if JSON is valid
  if (!checkValidJson(jsonText)) {
    alert("JSON is invalid.");
  } else {
    convertToCSV(jsonText);
    displayCSV();
  }
};

// Clear both boxes with button click
clearBtn.onclick = () => {
  jsonTextarea.value = "";
  csvTextarea.value = "";
  head = "";
  body = "";
  keys = [];
  values = [];
};

// Funtion: JSON Validation
function checkValidJson(text) {
  try {
    JSON.parse(text);
  } catch (e) {
    return false;
  }
  return true;
}

// Function: Converting JSON To CSV
function convertToCSV(text) {
  let inputJson = JSON.parse(text);
  keys = Object.keys(inputJson[0]);
  for (let i = 0; i < inputJson.length; i++) {
    values.push(Object.values(inputJson[i]));
  }
}

// Function: Display CSV Format
function displayCSV() {
  let head = keys.join();
  let body = "";
  values.forEach(d => {
    body += d.join() + "\n";
  });
  csvTextarea.value = head + "\n" + body;
}
