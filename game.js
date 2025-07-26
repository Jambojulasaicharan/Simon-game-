buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userClickedPattern = [];
var level = 0;
started = false;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatepress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
        }
        else{
        startover();
        var audio2 = new Audio("sounds/wrong.mp3");
        audio2.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("h1").text("Game over, Press any key to Restart ");
    }
    
}

function startover(){
    level = 0;
    gamePattern = [];
    started = false;
}
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour)
}
function playsound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },100);
}



