// expose.js
/*
Requirements:

When you select a horn from the drop down menu, the following should occur:
- The correct image should display
- The correct audio sound file should be set
When you change the volume on the slider, the following should occur:
- At zero volume, the mute icon (level 0) should be displayed
- From 1 to < 33 volume the first volume level should be displayed
- From 33 to < 67 volume the second volume level should be displayed
- From 67 and up the third volume level should be displayed
- The correct volume icon should be set
- The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
- Hint: the volume slider's range is from 0 - 100, but the audio element has a different property Links to an external site.. 
When you click the “Play Sound” button the following should occur:
- The corresponding sound for the horn selected should play out loud at the specified volume
- If the Party Horn is selected, confetti should shoot out when the play button is clicked, as shown in the video
- A library has been included for you to accomplish this, more on how to use it here https://github.com/loonywizard/js-confetti Links to an external site.
Do not run the installation steps, or include the import statement as we have already installed and imported the confetti library for you 
*/ 

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const volume = document.getElementById("volume");
  const selection = document.getElementById("horn-select");
  let selectedHorn = selection.value;
  const imgElement = document.querySelector("#expose img");
  const audioElement = document.querySelector("#expose audio");
  const playButton = document.querySelector("#expose button");
  const volumeImgElement = document.querySelector("#volume-controls img");

  // Changes image based on selected horn
  function updateImage() {
    switch (selectedHorn) {
      case "air-horn":
        imgElement.src = "assets/images/air-horn.svg";
        break;
      case "car-horn":
        imgElement.src = "assets/images/car-horn.svg";
        break;
      case "party-horn":
        imgElement.src = "assets/images/party-horn.svg";
        break;
      default:
        imgElement.src = "assets/images/no-image.png";
    }
  }

  // Plays the respective sound for whichever horn is selected
  function playSound() {
    let soundSrc;
    switch (selectedHorn) {
      case "air-horn":
        soundSrc = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        soundSrc = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        soundSrc = "assets/audio/party-horn.mp3";
        jsConfetti.addConfetti();     //Adds confetti animation if part horn is selected
        break;
    }
    audioElement.src = soundSrc;
    audioElement.play();
  }

  // Changes volume icon based on which value is selected
  function updateVolumeIcon() {
    let volumeLevel = volume.value;
    let volumeIcon;
    if (volumeLevel == 0) {
      volumeIcon = "volume-level-0.svg";
    } else if (volumeLevel < 33) {
      volumeIcon = "volume-level-1.svg";
    } else if (volumeLevel < 67) {
      volumeIcon = "volume-level-2.svg";
    } else {
      volumeIcon = "volume-level-3.svg";
    }
    volumeImgElement.src = `assets/icons/${volumeIcon}`;
    audioElement.volume = volumeLevel / 100;
  }

  //Whenever a change is heard from the horn-select class, it updates the selected horn and image 
  selection.addEventListener("change", function() {
    selectedHorn = selection.value;
    updateImage();
  });

  //Plays the sound when the button is clicked
  playButton.addEventListener("click", function() {
    playSound();
  });

  //Whenever volume input is changed it calls the function to update the icon
  volume.addEventListener("input", function() {
    updateVolumeIcon();
  });

  // Initial setup
  updateImage();
  updateVolumeIcon();
}
