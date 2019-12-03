// DOM Elements
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const csvTextarea = document.querySelector("#csv-textarea");
const jsonTextarea = document.querySelector("#json-textarea");

// Variables
let csvText = "";
let jsonText = "";
let keys = [];
let values = [];
let finalJson = [];

// Get CSV with button click
convertBtn.onclick = () => {
  csvText = csvTextarea.value;
  // Check if CSV is valid
  if (csvText == "") {
    alert("CSV text is empty.");
  } else {
    convertToJSON(csvText);
    displayJSON();
  }
};

// Clear both boxes with button click
clearBtn.onclick = () => {
  csvTextarea.value = "";
  jsonTextarea.value = "";
  keys = [];
  values = [];
  finalJson = [];
};

// Function: Converting JSON To CSV
function convertToJSON(text) {
  let dataArr = text.split("\n");
  keys = dataArr[0].split(",");
  for (let i = 1; i < dataArr.length; i++) {
    values.push(dataArr[i].split(","));
  }

  for (let i = 0; i < values.length; i++) {
    let newObj = {};
    for (let j = 0; j < keys.length; j++) {
      newObj[keys[j]] = values[i][j];
    }
    finalJson.push(newObj);
  }
}

// Function: Display JSON Format
function displayJSON() {
  jsonTextarea.value = JSON.stringify(finalJson);
}
