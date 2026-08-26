document.addEventListener("keydown", function(event) {

    // Check if the physical keyboard key pressed is A
    if (event.key.toLowerCase() === "a") {

        const snapSound = new Audio("sounds/Asnap.mp3");

        snapSound.play();

    }

});