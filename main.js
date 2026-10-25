
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


const starSounds = {
    q: { sound: "sounds/q.wav",
    },

    w: { sound: "sounds/w.wav",
    },

    e: { sound: "sounds/e.wav",
    },

    r: { sound: "sounds/r.wav",
    },

    t: { sound: "sounds/t.wav",
    },

    y: { sound: "sounds/y.wav",
    },

    u: { sound: "sounds/u.wav",
    },

    i: { sound: "sounds/i.wav",
    },

    o: { sound: "sounds/o.wav",
    },

    p: { sound: "sounds/p.wav",
    },
};

// find the stars container
const starsContainer = document.querySelector(".stars");

document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();
    if (!starSounds[key]) return;

    const audio = new Audio(starSounds[key].sound);
    audio.play();

// creating a new star
const star = document.createElement("span");
star.classList.add("star");

// MATH RANDOM TECHNIQUE - positions stars randomly in sky
    const randomLeft = Math.random() * 90 + 5;
    const randomTop = Math.random() * 55 + 5;

    star.style.left = randomLeft + "%";
    star.style.top = randomTop + "%";

    starsContainer.appendChild(star);

// make the star glow
    setTimeout(() => {
        star.classList.add("star-active");
    }, 10);

    setTimeout(() => {
    star.classList.add("star-fade");

    setTimeout(() => {
        star.remove();
    }, 500);

}, 900);

});




document.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();

    if (!starSounds[key]) return;

    // play sound
    const audio = new Audio(starSounds[key].sound);
    audio.play();

    // finding the star
    const star = document.getElementById(starSounds[key].star);

    // flashing star
    star.classList.add("star-active");

    setTimeout(() => {
    star.classList.remove("star-active");
    }, 500);

});



const starMap = {
q: document.getElementById("star-q"),
w: document.getElementById("star-w"),
e: document.getElementById("star-e"),
r: document.getElementById("star-r"),
t: document.getElementById("star-t"),
y: document.getElementById("star-y"),
u: document.getElementById("star-u"),
i: document.getElementById("star-i"),
o: document.getElementById("star-o"),
p: document.getElementById("star-p")
};


