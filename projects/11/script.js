// Selecting DOM Elements
const ob = document.getElementById("output-box");
const ed = document.getElementById("example-definition");

// Main function
function cardio(selectObject) {
  var value = selectObject.value;
  if (value === "example1") {
    example1();
  } else if (value === "example2") {
    example2();
  } else if (value === "example3") {
    example3();
  } else if (value === "example4") {
    example4();
  } else if (value === "example5") {
    example5();
  } else if (value === "example6") {
    example6();
  } else if (value === "example7") {
    example7();
  } else if (value === "example8") {
    example8();
  } else if (value === "example9") {
    example9();
  } else if (value === "example10") {
    example10();
  } else if (value === "example11") {
    example11();
  } else if (value === "example12") {
    example12();
  } else if (value === "example13") {
    example13();
  } else if (value === "example14") {
    example14();
  } else if (value === "example15") {
    example15();
  } else if (value === "example16") {
    example16();
  } else if (value === "example17") {
    example17();
  } else if (value === "example18") {
    example18();
  } else if (value === "example19") {
    example19();
  } else if (value === "example20") {
    example20();
  } else if (value === "example21") {
    example21();
  } else if (value === "example22") {
    example22();
  } else if (value === "example23") {
    example23();
  } else if (value === "example24") {
    example24();
  } else if (value === "example25") {
    example25();
  } else if (value === "example26") {
    example26();
  } else if (value === "example27") {
    example27();
  } else if (value === "example28") {
    example28();
  } else if (value === "example29") {
    example29();
  } else if (value === "example30") {
    example30();
  } else if (value === "example31") {
    example31();
  } else if (value === "example32") {
    example32();
  } else if (value === "example33") {
    example33();
  } else if (value === "example34") {
    example34();
  } else if (value === "example35") {
    example35();
  } else if (value === "example36") {
    example36();
  } else if (value === "example37") {
    example37();
  } else if (value === "example38") {
    example38();
  } else if (value === "example39") {
    example39();
  } else if (value === "example40") {
    example40();
  } else if (value === "example41") {
    example41();
  } else if (value === "example42") {
    example42();
  } else if (value === "example43") {
    example43();
  } else if (value === "example44") {
    example44();
  } else if (value === "example45") {
    example45();
  } else if (value === "example46") {
    example46();
  } else if (value === "example47") {
    example47();
  } else if (value === "example48") {
    example48();
  } else if (value === "example49") {
    example49();
  } else if (value === "example50") {
    example50();
  } else if (value === "example51") {
    example51();
  } else if (value === "example52") {
    example52();
  } else if (value === "example53") {
    example53();
  } else if (value === "example54") {
    example54();
  } else if (value === "example55") {
    example55();
  } else if (value === "example56") {
    example56();
  } else if (value === "example57") {
    example57();
  } else if (value === "example58") {
    example58();
  } else if (value === "example59") {
    example59();
  } else if (value === "example60") {
    example60();
  }
}

// Example 1: Write a JavaScript program to display the current day and time in the following format. Sample Output : "Today is : Tuesday. Current time is : 10 PM : 30 : 38"
function example1() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date();
  let today = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours >= 12) {
    hours = `${hours} PM`;
  }
  let output = `Today is: ${today}. Current time is: ${hours} : ${minutes} : ${seconds}`;
  ob.innerHTML = output;
}

// Example 2: Write a JavaScript program to print the contents of the current window.
function example2() {
  window.print();
}

// Example 3: Write a JavaScript program to get the current date.
function example3() {
  const date = new Date();
  ob.innerHTML = `${date.getDate()} / ${date.getMonth() +
    1} / ${date.getFullYear()}`;
}

// Example 4: Write a JavaScript program to find the area of a triangle.
function example4() {
  let a = parseInt(prompt("Enter the length of side A: "));
  let b = parseInt(prompt("Enter the length of side B: "));
  let c = parseInt(prompt("Enter the length of side C: "));
  let perimeter = a + b + c;
  let u = perimeter / 2;
  let area = Math.sqrt(u * (u - a) * (u - b) * (u - c));
  ob.innerHTML = area;
}
7;

// Example 5: Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function example5() {
  let word = prompt("Enter a string: ");
  setInterval(() => {
    word =
      word.slice(word.length - 1, word.length) + word.slice(0, word.length - 1);
    ob.innerHTML = word;
  }, 300);
}

// Example 6: Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function example6() {
  let year = parseInt(prompt("Enter a year: "));
  divByFour = true ? year % 4 == 0 : false;
  if (divByFour) {
    ob.innerHTML = `${year} is a leap year.`;
  } else {
    ob.innerHTML = `${year} is not a leap year.`;
  }
}

// Example 7: Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
function example7() {
  let year1 = parseInt(prompt("Enter the first year: "));
  let year2 = parseInt(prompt("Enter the second year: "));

  for (let i = Math.min(year1, year2); i <= Math.max(year1, year2); i++) {
    let newDate = new Date(i, 0, 1);
    if (newDate.getDay() === 0) {
      ob.innerHTML += `1st January is Sunday in ${i}.<br>`;
    }
  }
}

// Example 8: Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function example8() {
  let num = Math.round(Math.random() * 10);
  console.log(num);
  let guess = parseInt(prompt("Enter your guess: "));

  if (num === guess) {
    ob.innerHTML = "Matched!";
  } else {
    ob.innerHTML = "Not matched.";
  }
}

// Example 9: Write a JavaScript program to calculate days left until new year eve.
function example9() {
  let date = new Date();
  let nextNYE = new Date(date.getFullYear(), 11, 31);
  let daysLeft = Math.round((nextNYE - date) / 86400000);
  ob.innerHTML = `${daysLeft} days left until the new year eve.`;
}

// Example 10: Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function example10() {
  let num1 = parseFloat(prompt("Enter the 1st number: "));
  let num2 = parseFloat(prompt("Enter the 2nd number: "));
  let mult = (num1 * num2).toFixed(2);
  let div = (num1 / num2).toFixed(2);
  ob.innerHTML = `${num1} x ${num2} = ${mult}<br>${num1} / ${num2} = ${div}`;
}

// Example 11: Write a JavaScript program to convert temperatures from Celsius to Fahrenheit.
function example11() {
  var celc = parseInt(prompt("Enter celcius: "));
  var fahr = ((9 * celc) / 5 + 32).toFixed(2);
  ob.innerHTML = `${celc}&#8451 Celcius = ${fahr}&#8451 Fahrenheit`;
}

// Example 12: Write a JavaScript program to get the website URL (loading page).
function example12() {
  ob.innerHTML = document.URL;
}

// Example 13: Write a JavaScript exercise to create a variable using a user-defined name.
function example13() {
  let varName = prompt("Enter a name for variable: ");
  let varValue = prompt("Enter an int value for the variable: ");
  this[varName] = varValue;
  ob.innerHTML = `${varName} = ${this[varName]}`;
}

// Example 14: Write a JavaScript exercise to get the extension of a filename.
function example14() {
  ed.innerHTML =
    "Write a JavaScript exercise to get the extension of a filename.";

  let fileName = prompt("Enter a file name with its extension: ");
  let file = fileName.split(".");
  let extension = fileName.split(".").pop();
  ob.innerHTML = `File name: <strong>${
    file[0]
  }</strong>. Extension: <strong>${extension}</strong>`;
}

// Example 15: Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function example15() {
  ed.innerHTML =
    "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.";

  let userInput = parseInt(prompt("Enter a number: "));
  let result = 0;
  if (userInput > 13) {
    result = Math.abs(13 - userInput) * 2;
  } else {
    result = 13 - userInput;
  }
  ob.innerHTML = `Result is ${result}`;
}

// Example 16: Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function example16() {
  ed.innerHTML =
    "Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.";

  let num1 = parseInt(prompt("Enter the 1st number: "));
  let num2 = parseInt(prompt("Enter the 2nd number: "));
  let sum = 0;
  if (num1 === num2) {
    sum = 3 * (num1 + num2);
  } else {
    sum = num1 + num2;
  }
  ob.innerHTML = sum;
}

// Example 17: Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function example17() {
  ed.innerHTML =
    "Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.";

  let num = parseInt(prompt("Enter a number: "));
  let result = 0;
  if (num > 19) {
    result = 3 * Math.abs(19 - num);
  } else {
    result = 19 - num;
  }
  ob.innerHTML = result;
}

// Example 18: Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function example18() {
  ed.innerHTML =
    "Example 18: Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.";

  let num1 = parseInt(prompt("Enter the 1st number: "));
  let num2 = parseInt(prompt("Enter the 2nd number: "));
  let isFifty = true ? num1 == 50 || num2 == 50 || num1 + num2 == 50 : false;

  if (isFifty) {
    ob.innerHTML = "One of these numbers or sum is 50.";
  } else {
    ob.innerHTML = "There is nothing about 50.";
  }
}

// Example 19: Write a JavaScript program to check a given integer is within 20 of 100 or 400.
function example19() {
  ed.innerHTML =
    "Write a JavaScript program to check a given integer is within 20 of 100 or 400.";

  let num = parseInt(prompt("Enter a number: "));
  if ((num >= 80 && num <= 120) || (num >= 380 && num <= 420)) {
    ob.innerHTML = `${num} is within 20 of 100 or 400.`;
  } else {
    ob.innerHTML = `${num} is not within 20 of 100 or 400.`;
  }
}

// Example 20: Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function example20() {
  ed.innerHTML =
    "Write a JavaScript program to check from two given integers, if one is positive and one is negative.";

  let num1 = parseInt(prompt("Enter the 1st number: "));
  let num2 = parseInt(prompt("Enter the 2nd number: "));
  let isNeg = true ? num1 < 0 || num2 < 0 : false;
  let isPos = true ? num1 > 0 || num2 > 0 : false;
  if (isNeg && isPos) {
    ob.innerHTML = "There is exactly 1 negative and 1 positive number.";
  } else {
    ob.innerHTML = "Not only 1 negative and 1 positive.";
  }
}

// Example 21: Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
function example21() {
  ed.innerHTML =
    "Write a JavaScript program to create a new string adding 'Py' in front of a given string. If the given string begins with 'Py' then return the original string.";

  let input = prompt("Enter a string: ");
  let output = "";
  if (input[0] === "P" && input[1] === "y") {
    output = input;
  } else {
    output = `Py${input}`;
  }
  ob.innerHTML = output;
}

// Example 22: Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function example22() {
  ed.innerHTML =
    "Write a JavaScript program to remove a character at the specified position of a given string and return the new string.";

  let input = prompt("Enter a string: ");
  let position = parseInt(
    prompt("Enter a position of a character that you want to remove: ")
  );
  let charArr = input.split("");
  charArr.splice(position, 1);
  let output = charArr.join("");
  ob.innerHTML = output;
}

// Example 23: Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
function example23() {
  ed.innerHTML =
    "Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.";

  let input = prompt("Enter a string: ");
  let output = "";
  if (input.length >= 1) {
    output = `${input[input.length - 1]}${input.substr(1, input.length - 2)}${
      input[0]
    }`;
  } else {
    alert("String length must be greater than or equal to 1.");
  }
  ob.innerHTML = output;
}

// Example 24: Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function example24() {
  ed.innerHTML =
    "Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.";

  let input = prompt("Enter a string: ");
  let output = `${input[0]}${input}${input[0]}`;
  ob.innerHTML = output;
}

// Example 25: Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function example25() {
  let num = parseInt(prompt("Enter a number: "));
  if (num % 3 == 0 || num % 7 == 0) {
    ob.innerHTML = `${num} is a multiple of 3 or 7`;
  } else {
    ob.innerHTML = `${num} is not a multiple of 3 or 7`;
  }
}

// Example 26: Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
function example26() {
  ed.innerHTML =
    "Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.";

  let input = prompt("Enter a string: ");
  if (input.length >= 3) {
    let firstThree = input.substr(input.length - 3, 3);
    ob.innerHTML = `${firstThree}${input}${firstThree}`;
  } else {
    alert("Input length must be at least 3.");
  }
}
