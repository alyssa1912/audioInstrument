// document.body.style.backgroundColor = "red";
// find my test button
const testButton = document.getElementById("test-button");

//create instrument and connect to audio
const synth = new Tone.Synth().toDestination();

// do smth when we click the button
testButton.addEventListener("click", playTestNote);

function playTestNote() {
    synth.triggerAttackRelease("C4", "8n");
}