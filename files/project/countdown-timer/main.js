// DOM Elements
const eventNameInput = document.querySelector("#event-name");
const eventDateInput = document.querySelector("#event-date");
const eventTimeInput = document.querySelector("#event-time");
const startBtn = document.querySelector("#start-btn");
const countdownBox = document.querySelector("#countdown-box");

// Variables
let eventName = "";
let eventDate = [];
let eventTime = [];
let event = "";
let today = "";
let timeDifference = 0;
let daysDifference = 0;
let hoursDifference = 0;
let minutesDifference = 0;
let secondsDifference = 0;
let timer = "";
let error = "";

// Get event info
startBtn.onclick = function() {
  // Generate an error message if inputs are blank
  if (eventNameInput.value == "") {
    error += "Enter an event name. ";
  }
  if (eventDateInput.value == "") {
    error += "Enter date. ";
  }
  if (error != "") {
    alert("Plese fix error(s) before you proceed: " + error);
    error = "";
  } else {
    eventName = eventNameInput.value;
    eventDate = eventDateInput.value.split("-").reverse();
    eventTime = eventTimeInput.value.split(":");

    event = new Date(
      eventDate[2],
      eventDate[1] - 1,
      eventDate[0],
      eventTime[0],
      eventTime[1],
      0
    );

    calculateTimeLeft();
    displaytime();
  }
};

// Function to calculate how many times left until the event
function calculateTimeLeft() {
  today = new Date();

  // Check if event date is valid
  if (event.getTime() - today.getTime() < 0) {
    console.log("Date is not valid.");
  } else {
    timeDifference = Math.abs(event.getTime() - today.getTime());

    daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));
    minutesDifference = Math.ceil(timeDifference / (1000 * 60));
    secondsDifference = Math.ceil(timeDifference / 1000);

    daysDifference--;
    hoursDifference = hoursDifference % 24;
    minutesDifference = minutesDifference % 60;
    secondsDifference = secondsDifference % 60;

    if (hoursDifference > 0 && minutesDifference < 60) {
      hoursDifference--;
    }

    if (minutesDifference == 0 && secondsDifference > 0) {
      minutesDifference = 59;
    }

    if (
      daysDifference == 0 &&
      hoursDifference == 0 &&
      minutesDifference <= 60
    ) {
      hoursDifference = 0;
    }

    // Make it 2 digits if less than 10
    if (daysDifference < 10) {
      daysDifference = "0" + daysDifference;
    }

    if (hoursDifference < 10) {
      hoursDifference = "0" + hoursDifference;
    }

    if (minutesDifference < 10) {
      minutesDifference = "0" + minutesDifference;
    }

    if (secondsDifference < 10) {
      secondsDifference = "0" + secondsDifference;
    }
  }
}

function displaytime() {
  timer = setInterval(() => {
    calculateTimeLeft();
    countdownBox.innerHTML = `${daysDifference} D : ${hoursDifference} H : ${minutesDifference} M : ${secondsDifference} S<span><br />left until ${eventName}.</span>`;

    // console.log("Days: " + daysDifference);
    // console.log("Hours: " + hoursDifference);
    // console.log("Minutes: " + minutesDifference);
    // console.log("Seconds: " + secondsDifference);
  }, 1000);
}
