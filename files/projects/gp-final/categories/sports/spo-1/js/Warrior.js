const PLAYER_MOVE_SPEED = 620.0;
const DESTINATION_STARTING_X = 10;
const DESTINATION_STARTING_Y = 10;
const DESTINATION_INCREMENT_X = 10;
const DESTINATION_INCREMENT_Y = 10;
const WORLD_WIDTH = 1300 / DESTINATION_INCREMENT_X - 1;
const WORLD_HEIGHT = 800 / DESTINATION_INCREMENT_Y - 1;

function warriorClass(numberOfTheWarrior) {
  this.myWarriorPic; // which picture to use
  this.name = "Untitled Warrior";
  this.keysHeld = 0;
  this.destinationX =
    DESTINATION_STARTING_X +
    DESTINATION_INCREMENT_X * (numberOfTheWarrior % WORLD_WIDTH);
  this.destinationY =
    DESTINATION_STARTING_Y +
    Math.floor(numberOfTheWarrior / WORLD_WIDTH) * DESTINATION_INCREMENT_Y;
  this.x = this.destinationX;
  this.y = this.destinationY + 200 + this.destinationX;

  this.move = function() {
    if (this.y > this.destinationY + 20) {
      //console.log("hi");
      this.y -= PLAYER_MOVE_SPEED / (this.destinationY / 3);
    } else {
      this.y = this.destinationY;
    }
  };

  this.draw = function() {
    //console.log("hey");
    var color;
    if (numberOfTheWarrior < 1636) {
      color = "#2f9b3e";
    } else if (numberOfTheWarrior < 2555) {
      color = "#b86e2a";
    } else if (numberOfTheWarrior < 2963) {
      color = "#3a679b";
    } else if (numberOfTheWarrior < 3472) {
      color = "#c4c439";
    } else if (numberOfTheWarrior < 3658) {
      color = "#f8b029";
    } else if (numberOfTheWarrior < 3852) {
      color = "#5f5c5c";
    } else if (numberOfTheWarrior < 3898) {
      color = "#b1b1a4";
    } else if (numberOfTheWarrior < 4052) {
      color = "#8d4394";
    } else if (numberOfTheWarrior < 4199) {
      color = "#a02a2a";
    } else if (numberOfTheWarrior < 5072) {
      color = "#6a8eb8";
    }
    //colorRect(this.x,this.y, DESTINATION_INCREMENT_X-1,DESTINATION_INCREMENT_Y -1, color)
    colorCircle(this.x, this.y, DESTINATION_INCREMENT_X / 2 - 1, color);
  };
}
function drawWarriors() {
  for (var i = 0; i < warriorArray.length; i++) {
    //console.log(warriorArray[i].x);
    warriorArray[i].draw();
  }
}
function moveWarriors() {
  for (var i = 0; i < warriorArray.length; i++) {
    warriorArray[i].move();
  }
}
