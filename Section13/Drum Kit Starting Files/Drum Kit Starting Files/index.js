// Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var innerHTMLbutton = this.innerHTML;
        MakeSound(innerHTMLbutton);
        ButtonAnimation(innerHTMLbutton);
    });
}

//Detecting keydoard press

document.addEventListener("keydown", function(event) {
    MakeSound(event.key);
    ButtonAnimation(event.key);
})


function MakeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();

            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();

            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();

            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();

            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();

            break;
        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();

            break;
        case "l":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();

            break;

        default:
            console.log(innerHTMLbutton);
            break;
    }
}

function ButtonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100);


}