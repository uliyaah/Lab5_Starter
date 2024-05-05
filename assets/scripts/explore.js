// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  if (typeof speechSynthesis === "undefined") {
    return;
  }
  //load voices
  populateVoiceList();

  //press to talk button
  const button = document.querySelector('button');
  button.addEventListener('click', speak);
}

function populateVoiceList(){
  //load voice options
  const voices = speechSynthesis.getVoices();

  //add voice options to the Select Voice dropdown
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function speak() {
  //get the text to speak
  const textToSpeak = document.getElementById('text-to-speak');

  //get the voice that was selected
  const selectedVoice = document.getElementById('voice-select');

  //create new utterance
  const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);

  //get the name of the selectedVoice
  const selectedOption = selectedVoice.selectedOptions[0].getAttribute("data-name");

  //find the voice that was selected
  const voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++){
    if(voices[i].name == selectedOption){
      utterThis.voice = voices[i];
      break;
    }
  }

  //change image when speaking
  utterThis.addEventListener("start", (event) => {
    const image = document.querySelector('img');
    image.src = "assets/images/smiling-open.png";
  });

  utterThis.addEventListener("end", (event) => {
    const image = document.querySelector('img');
    image.src = "assets/images/smiling.png";
  });

  //speak
  speechSynthesis.speak(utterThis);
}

init();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = init;
}

