var question;
var questionCount = 1;
var correctCount = 0;
var rand;
var chosenQuestionArr = [];

// Store images, question itself, options, and the correct option in a double array
var questionArray = [
  ["img/q.jpg", "The Cassini-Huygens probe was sent to visit which planet?", "Jupiter", "Uranus", "Saturn", "Saturn"],
  ["img/q.jpg", "The Cerberus Fossae is found on which planet?", "Mercury", "Mars", "Earth", "Mars"],
  ["img/q.jpg", "The Core of the earth is believed to consist of 88.8% of what?", "Iron", "Carbon", "Lava", "Iron"],
  ["img/q.jpg", "The Dawn spacecraft is due to land where in 2015?", "Ceres", "Makemake", "Pluto", "Ceres"],
  ["img/q.jpg", "The Earth is composed of 32% of what?", "Magnesium", "Nickel", "Iron", "Iron"],
  ["img/q.jpg", "The Enke Gap is a feature of which planet?", "Saturn", "Neptune", "Jupiter", "Saturn"],
  ["img/q.jpg", "The Equator forms a major part of which planet?", "Mars", "Venus", "Earth", "Earth"],
  ["img/q.jpg", "The ESA mission BepiColombo is aimed at reaching what planet?", "Saturn", "Mercury", "Venus", "Mercury"],
  ["img/q.jpg", "The Great Red Storm is a feature of which planet?", "Uranus", "Jupiter", "Neptune", "Jupiter"],
  ["img/q.jpg", "The Kuiper Belt lies how many AU’s away from the sun?", "50", "10", "100", "50"]
];

// Start Quiz
$("#startButton").click(function() {
  $("#startQuiz").css("display", "none");
  $("#questionWrapper").css("display", "block");
  chooseQuestion();
});

// Answer the question to see the next one
$("#submitButton").click(function() {
  questionCount++;
  if(questionCount == 11) {
    checkIfCorrect();
    console.log("Finished");
    $("#endQuizButton").css("display", "block");
  } else {
    checkIfCorrect();
    chooseQuestion();
    console.log(correctCount+"/"+questionCount);
  }

});

// See your result
$("#endQuizButton").click(function() {
  endQuiz();
});

function chooseQuestion() {

  rand = Math.floor(Math.random() * questionArray.length);
  if(!chosenQuestionArr.includes(rand)) {

    chosenQuestionArr.push(rand);

    question = {
      picture: questionArray[rand][0],
      q: questionArray[rand][1],
      o1: questionArray[rand][2],
      o2: questionArray[rand][3],
      o3: questionArray[rand][4],
      a: questionArray[rand][5]
    }

    $("#imgBox").html("<img src='" + question.picture + "'>");
    $("#questionBox").html(question.q);
    $("#optionsBox").html("<input type='radio' name='option' value='"+ question.o1 +"'>"+ question.o1 +"<br>" +
                          "<input type='radio' name='option' value='"+ question.o2 +"'>"+ question.o2 +"<br>" +
                          "<input type='radio' name='option' value='"+ question.o3 +"'>"+ question.o3 +"");

  } else{
    chooseQuestion();
  }
  console.log(chosenQuestionArr);



}

function checkIfCorrect() {

  var selectedOption = document.querySelector('input[name="option"]:checked').value;
  if(questionArray[rand][5] == selectedOption) {
    correctCount++;
  }

}

function endQuiz() {
  // questionWrapper gizle, scoreBoard görünür yap, her şeyi sıfırla
  questionCount--;
  $("#questionWrapper").css("display", "none");
  $("#endQuizButton").css("display", "none");
  $("#scoreBoard").html("Your score is: " + correctCount + " / " + questionCount);
  $("#startQuiz").css("display", "block");
  questionCount = 1;
  correctCount = 0;
  chosenQuestionArr = [];
}
