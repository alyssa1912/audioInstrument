
const snapSound = new Audio("sounds/Asnap.mp3");

const snapSound = new Audio("sounds/Asnap.mp3");

document.addEventListener("keydown", function(event) {

    // Check if the physical keyboard key pressed is A
    if (event.key.toLowerCase() === "a") {

        snapSound.play();
    }


    if (event.key.toLowerCase() === "b") {

        snapSound.play();
    }

});


// two different areas for imporvement, 1. the aesthetic & visuals 2. randomness.
// create three branches for each improvement, meaning total 6 branches.