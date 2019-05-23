var canvas, canvasContext;
var numberOfWarriors = 5071;
var warriorArray = new Array(numberOfWarriors);
var canvas;
var canvasContext;

var blueWarrior = new warriorClass();

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  /*colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');*/

  for (var i = 0; i < warriorArray.length; i++) {
    warriorArray[i] = new warriorClass(i);
  }
  imageLoadingDoneSoStartGame();
  //loadImages();
};

function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000 / framesPerSecond);
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  moveWarriors();
}

function drawAll() {
  colorRect(0, 0, 1600, 3000, "black");
  drawWarriors();
}
