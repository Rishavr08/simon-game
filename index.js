var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var i=0; 

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").text("LeveL " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColour);
}

 function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
    nextSequence();
  }, 1000);
}
}
else {
  playSound("wrong");
  $( "body").addClass("game over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  setTimeout(function () {
    $("body").removeClass("game over");
  }, 200);
  startOver();
  }

} 

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
var started = false;

var     level = 0;
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("LeveL " + level);
    nextSequence();
    started = true;
  }
});


 