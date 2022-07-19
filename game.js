
var gamePattern = [];

var userClickPattern = [];

var buttonColors = [ "red", "green" , "yellow" , "blue" ];

var level = 0;

var start = false ;

$(document).keypress(function(){
  if(start==false){
    $("#level-title").text("level " + level);
    level++;
    nextSequence();
    start = true;
  }
});


$(".btn").click(function(){

  var userChosenColor = $(this).attr("id") ;
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickPattern.length-1);

});

function nextSequence(){

  $("#level-title").text("level "+level);
  level++;
  userClickPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
  playSound(randomChosenColor);

}

function checkAnswer(level){

  if( gamePattern[level] == userClickPattern[level] ){
    if(userClickPattern.length == gamePattern.length){
      setTimeout(function(){
        nextSequence()
      },100);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("game-over\n press any key to restart");

    startover();

  }

}



function playSound(randomChosenColor){

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

}

function animatePress(currentColor){

  $("." + currentColor).addClass("pressed");
  setTimeout(function (){
    $("." + currentColor).removeClass("pressed");
  },100);

}

function startover(){

  level = 0;
  gamePattern = [];
  start = false;

}
