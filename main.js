
// document.body.style.backgroundColor = "red";
// find my test button
const testButton = document.getElementById("test-button");
// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);
// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");

////// Modal
// browser loads html > browser loads js > js to open modal > user presses ok on modal > modal closes > audio init
// user can also close modal with esc key
// show modal on page load
introModal.showModal();
// when ok clicked, close modal
introModalCloseButton.addEventListener("click", function closeIntroModal(){
    // close our modal
    introModal.close();
});
// when dialog closes by whatever means, load audio system
introModal.addEventListener("close", toneInit);

// introModalCloseButton.addEventListener("click", () => {
//    introModal.close();
// });


////// Tone

// create instrument
const synth = new Tone.Synth();

function toneInit(){
    // connect synth to audio output
    synth.connect(Tone.Destination);
}

// do something when we click that button
testButton.addEventListener("click", playTestNote);

function playTestNote(){
    synth.triggerAttackRelease("C4", "8n");
}







// the way this JS file is organised is to make the class exercise easier
// as previously covered, I tend to use categories rather than order on page to make my JS readable

///////////// Button
const exampleButton = document.getElementById("exampleButton");
const buttonOutputText = document.getElementById("buttonOutput");
const buttonEventText = document.getElementById("currentButtonEvent");
const heldButtonText = document.getElementById("buttonHeldEvent");

// here we're passing a parameter called e
// the first parameter passed to any function called from an event listener is the event information
// typically this is called e but it can technically be called anything and anything declared as the first parameter will
// be assigned to the event info
function printWindowWidth(e){
  console.log(e);
  buttonOutputText.textContent = window.innerWidth;
}

exampleButton.addEventListener("mouseenter", () => {
  buttonEventText.textContent = "mouseenter";
});

exampleButton.addEventListener("mouseleave", () => {
  buttonEventText.textContent = "mouseleave";
});

exampleButton.addEventListener("mousedown", () => {
  buttonEventText.textContent = "mousedown";
});

exampleButton.addEventListener("mouseup", () => {
  buttonEventText.textContent = "mouseup";
});

///////////// Checkbox
const exampleCheckbox = document.getElementById("exampleCheckbox");
const checkboxOutputText = document.getElementById("checkboxOutput");
const checkboxCheckedText = document.getElementById("checkboxChecked");
const textColourCheck = document.getElementById("checkColour");
const textUnderlineCheck = document.getElementById("checkUnderline");
const checkboxFormatText = document.getElementById("checkboxFormatText");

exampleCheckbox.addEventListener("change", (e) => {
  checkboxOutputText.textContent = e.target.value;
  checkboxCheckedText.textContent = e.target.checked;
});

textColourCheck.addEventListener("click", updateTextFormat);
textUnderlineCheck.addEventListener("click", updateTextFormat);

function updateTextFormat(){
  if(textColourCheck.checked === true){
    checkboxFormatText.style.color = "red";
  } else {
    checkboxFormatText.style.color = "unset";
  }
  if(textUnderlineCheck.checked === true){
    checkboxFormatText.style.textDecoration = "underline";
  } else {
    checkboxFormatText.style.textDecoration = "unset";
  }
}

///////////// Radio
const sineRadio = document.getElementById("sine");
const triangleRadio = document.getElementById("triangle");
const radioOutputText = document.getElementById("radioOutput");

function listRadioSelection(e){
  radioOutputText.textContent = e.target.value;
}

sineRadio.addEventListener("input", listRadioSelection);
triangleRadio.addEventListener("input", listRadioSelection);

///////////// Select
const petSelect = document.getElementById("pet-select");
const petSelectionOutputText = document.getElementById("selectOutput");

petSelect.addEventListener("change", (e) => {
  petSelectionOutputText.textContent = e.target.value;
});

///////////// Range
const exampleRange = document.getElementById("exampleRange");
const rangeOutputText = document.getElementById("rangeOutput");

exampleRange.addEventListener("input", (e) => {
  rangeOutputText.textContent = e.target.value;
});