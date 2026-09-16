// MODAL ------------------------- 


// show modal on page load
introModal.showModal();

// when OK clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){

    introModal.close();
});




// find my test button              const testButton = document.getElementById("test-button");
// find my key test button          const key = document.getElementById("key-test");



// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);

// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");

// is the mouse button held?        let mouseButtonDown = false;

//introdialog.showModal();

////// Modal
// browser loads html 
// user can also close modal with esc key
// show modal on page load
introModal.showModal();

// when ok clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){
// closes modal
    introModal.close();
});

// when dialog closes by whatever means, load audio system
introModal.addEventListener("close", Tone.start);

// introModalCloseButton.addEventListener("click", () => {
//    introModal.close();
// });






// This is the instrument ------------------------ //

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