var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var usedClickedPattern = [];
var level = 0;
var started = false;


$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    usedClickedPattern.push(userChosenColour);
    PlaySound(userChosenColour);
    AnimatePress(userChosenColour);
    CheckAnswer(usedClickedPattern.length - 1);

});

$("body").keypress(function() {
    if (!started) {

        $("h1").text("Level " + level);
        NextSequence();
        started = true;
    }

});


function NextSequence() {

    usedClickedPattern = [];
    level = level++;
    $("#level-title").text("Level " + level);

    var RandomNumber = Math.floor(Math.random() * (4 - 0) + 0);

    var randomChosenColor = buttonColors[RandomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function PlaySound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}


function AnimatePress(currentColor) {

    $('#' + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function CheckAnswer(currentLevel) {
    if (gamePattern[currentLevel] === usedClickedPattern[currentLevel]) {
        console.log("success");

        if (gamePattern.length == usedClickedPattern.length) {
            setTimeout(function() {
                NextSequence();
            }, 1000);


        }
    } else {
        console.log("wrong");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $('body').addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 100)
        $("h1").text("Game Over, press any key to start");
        StartOver();
    }

}

function StartOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

//NextSequence();