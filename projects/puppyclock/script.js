var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

var puppyImg = new Image();
puppyImg.src = "img/puppy1.jpg";

var currentTime = "";
var timeWrapper = document.getElementById("time-wrapper");

const puppyImgArr = [
  "img/puppy1.jpg",
  "img/puppy2.jpg",
  "img/puppy3.jpg",
  "img/puppy4.jpg",
  "img/puppy5.jpg",
  "img/puppy6.jpg",
  "img/puppy7.jpg",
  "img/puppy8.jpg",
  "img/puppy9.jpg",
  "img/puppy10.jpg"
];

// Display current time
window.setInterval(function() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  currentTime = hour + ":" + minute + ":" + second;

  timeWrapper.innerHTML = currentTime;
}, 1000);

// Canvas and Images
puppyImg.onload = function() {
  ctx.drawImage(puppyImg, 0, 0);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "40px Indie Flower";
  ctx.textAlign = "center";
  canvas.textBaseline = "bottom";
  ctx.fillText(puppyMessage, canvas.width / 2, canvas.height - 60);
};
window.setInterval(function() {
  changePuppyImage();
}, 5000);

// Function to change puppy image
function changePuppyImage() {
  var rand = Math.floor(Math.random() * 10);
  puppyImg.src = puppyImgArr[rand];
}

// Get selected input
var wakeUpTime = document.getElementById("wake-up-time");
var lunchTime = document.getElementById("lunch-time");
var napTime = document.getElementById("nap-time");

var puppyMessage = "Puppy Hugs";

function notifyChange() {
  var wut = wakeUpTime.options[wakeUpTime.selectedIndex].text;

  var lt = lunchTime.options[lunchTime.selectedIndex].text;

  var nt = napTime.options[napTime.selectedIndex].text;

  changePuppyMessage(wut, lt, nt);
}

// Change Puppy Message
function changePuppyMessage(w, l, n) {
  newW = w.substring(0, w.indexOf(":"));
  newL = l.substring(0, l.indexOf(":"));
  newN = n.substring(0, n.indexOf(":"));

  if (currentTime.includes(newW)) {
    puppyMessage = "Good morning!";
    console.log(puppyMessage);
  }
  if (currentTime.includes(newL)) {
    puppyMessage = "Lunch Time!";
    console.log(puppyMessage);
  }
  if (currentTime.includes(newN)) {
    puppyMessage = "Take a nap!";
    console.log(puppyMessage);
  }
}

// Party Button
var partyBtn = document.getElementById("party-btn");

partyBtn.onclick = function() {
  puppyMessage = "Party Time!";
  puppyImg.src = "img/puppy12.jpg";
};
