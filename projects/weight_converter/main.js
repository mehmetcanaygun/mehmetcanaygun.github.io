var userInputInKg = document.getElementById("userInput");
var userInputInGr = 0;
var userInputInPo = 0;
var userInputInOu = 0;

userInputInKg.onkeyup = function(){
    var kgValue = userInputInKg.value;
    convertInput(kgValue);
    displayConvertedValues();
}

function convertInput(value) {
  userInputInGr = (value * 1000);
  userInputInPo = (value * 2.20462262);
  userInputInOu = (value * 35.2739619);
}

function displayConvertedValues() {
  document.getElementById("inGrams").innerHTML = userInputInGr + " grams";
  document.getElementById("inPounds").innerHTML = userInputInPo + " pounds";
  document.getElementById("inOunces").innerHTML = userInputInOu + " ounces";
}
