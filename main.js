
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

    a: { sound: "sounds/a.wav",},
    b: { sound: "sounds/b.wav",},
    c: { sound: "sounds/c.wav",},
    d: { sound: "sounds/d.wav",},
    e: { sound: "sounds/e.wav",},
    f: { sound: "sounds/f.wav",},
    g: { sound: "sounds/g.wav",},
    h: { sound: "sounds/h.wav",},
    i: { sound: "sounds/i.wav",},
    j: { sound: "sounds/j.wav",},
    k: { sound: "sounds/k.wav",},
    l: { sound: "sounds/l.wav",},
    m: { sound: "sounds/m.wav",},
    n: { sound: "sounds/n.wav",},
    o: { sound: "sounds/o.wav",},
    p: { sound: "sounds/p.wav",},
    q: { sound: "sounds/q.wav",},
    r: { sound: "sounds/r.wav",},
    s: { sound: "sounds/s.wav",},
    t: { sound: "sounds/t.wav",},
    u: { sound: "sounds/u.wav",},
    v: { sound: "sounds/v.wav",},
    w: { sound: "sounds/w.wav",},
    x: { sound: "sounds/x.wav",},
    y: { sound: "sounds/y.wav",},
    z: { sound: "sounds/z.wav",}
};


// find the stars container
const starsContainer = document.querySelector(".stars");

document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();
     if (!starSounds[key] || event.repeat) {
        return;
    }

    // Play the sound
    const audio = new Audio(starSounds[key].sound);
    audio.play();

// creating a new star - chooses a random star png
const star = document.createElement("span");
star.classList.add("star-pop");

const randomStar = Math.floor(Math.random() * 8) + 1;
star.style.backgroundImage = `url("img/${randomStar}.png")`;

// MATH RANDOM TECHNIQUE - positions stars randomly in sky
    const randomLeft = Math.random() * 90 + 5;
    const randomTop = Math.random() * 55 + 5;

    star.style.left = randomLeft + "%";
    star.style.top = randomTop + "%";

    starsContainer.appendChild(star);

// Make the star fade away
    setTimeout(function() {
        star.classList.add("star-fade");
    }, 900);

// Remove the star
    setTimeout(function() {
        star.remove();
    }, 1400);

});



