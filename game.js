
const gamePattern = [];

const userClickPattern = [];

const buttonColors = [ "red", "green" , "yellow" , "blue" ];

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id") ;
  userClickPattern.push(userChosenColor);

})

function nextSequence(){

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
  var audiostring = "sounds/"+randomChosenColor+".mp3";
  var audio = new audio(audiostring);
  audio.play();


}
