
const gamePattern = [];

const buttonColors = [ "red", "green" , "yellow" , "blue" ];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];

}

$("."+randomChosenColor).fadeOut(100).fadeIn(100);
