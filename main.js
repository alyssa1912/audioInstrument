
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
a: document.getElementById("star-a"),
b: document.getElementById("star-b"),
c: document.getElementById("star-c"),
d: document.getElementById("star-d"),
e: document.getElementById("star-e"),
f: document.getElementById("star-f"),
g: document.getElementById("star-g"),

h: document.getElementById("star-h"),
i: document.getElementById("star-i"),
j: document.getElementById("star-j"),
k: document.getElementById("star-k"),
l: document.getElementById("star-l"),
m: document.getElementById("star-m"),
n: document.getElementById("star-n"),
o: document.getElementById("star-o"),
p: document.getElementById("star-p"),

q: document.getElementById("star-q"),
r: document.getElementById("star-r"),
s: document.getElementById("star-s"),
t: document.getElementById("star-t"),
u: document.getElementById("star-u"),
v: document.getElementById("star-v"),

w: document.getElementById("star-w"),
x: document.getElementById("star-x"),
y: document.getElementById("star-y"),
z: document.getElementById("star-z")
};


