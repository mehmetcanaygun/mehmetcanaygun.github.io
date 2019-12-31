// DOM
const circles = document.querySelectorAll(".circle");
const playBtn = document.querySelector("#play-btn");
const duration = document.querySelector("#duration");

// Variables
let playing = false;
let initialDur = 1;
let light = "lighten " + initialDur + "s linear infinite";
let lightDelayed = "lighten " + initialDur + "s linear infinite 0.5s";

playBtn.onclick = () => {
  playing = !playing;
  play(initialDur);
};

function play(dur) {
  light = "lighten " + dur + "s linear infinite";
  lightDelayed = "lighten " + dur + "s linear infinite 0.5s";
  if (playing) {
    playBtn.value = "STOP";
    for (let i = 0; i < circles.length; i++) {
      if (i % 2 == 0) {
        circles[i].style.animation = light;
      } else {
        circles[i].style.animation = lightDelayed;
      }
    }
  } else {
    playBtn.value = "PLAY";
    circles.forEach(circle => {
      circle.style.animation = null;
    });
  }
}

function changeDuration(val) {
  duration.innerHTML = val;
  initialDur = val;
  play(initialDur);
}
