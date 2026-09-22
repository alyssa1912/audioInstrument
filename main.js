
// find my test button              const testButton = document.getElementById("test-button");
// find my key test button          const key = document.getElementById("key-test");



// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);

// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");


// show modal on page load
introModal.showModal();

// when OK clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){    
// closes modal     
introModal.close();     
});




// This is the instrument ------------------------ //

// const snapSound = new Audio("sounds/Asnap.mp3");


document.addEventListener("keydown", function(event) {

    // Check if the physical keyboard key pressed is A
    if (event.key.toLowerCase() === "a") {
            
        const snapSound = new Audio("sounds/Asnap.mp3");
        snapSound.play();
    }


    if (event.key.toLowerCase() === "b") {

        const chimeSound = new Audio("sounds/Bchime.mp3");
        chimeSound.play();
    }

    if (event.key.toLowerCase() === "c") {

        const bubbleSound = new Audio("sounds/Cbubble.mp3");
        bubbleSound.play();
    }
});


// two different areas for imporvement, 1. the aesthetic & visuals 2. randomness.
// create three branches for each improvement, meaning total 6 branches.


//--------- letters ---------
const keyColours = {
    a: "#ff9ecf",
    b: "#ffb86c",
    c: "#ffd166",
    d: "#a8e6cf",
    e: "#7dd3fc",
    f: "#a78bfa",
    g: "#c4b5fd",
    h: "#f9a8d4",
    i: "#fca5a5",
    j: "#fdba74",
    k: "#a855f7",
    l: "#818cf8",
    m: "#67e8f9",
    n: "#86efac",
    o: "#ff8c42",
    p: "#f472b6",
    q: "#facc15",
    r: "#fb7185",
    s: "#60a5fa",
    t: "#34d399",
    u: "#c084fc",
    v: "#f9a8d4",
    w: "#fde68a",
    x: "#93c5fd",
    y: "#86efac",
    z: "#f0abfc"
};