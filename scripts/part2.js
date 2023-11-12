import { pickLocation } from "./utils/operations.js";

// starting function
let matchingButton = '';
let matchingCue = '';

function startGame () {
  let location = pickLocation();
  let cueLocation = pickLocation();

  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";});

  if (cueLocation < 8) {
    document.querySelector('.positiveCue').style.display = "inline-block";
    matchingCue = 'left';
  } else if (cueLocation >= 8) {
    document.querySelector('.negativeCue').style.display = "inline-block";
    matchingCue = 'right';
  }
  setTimeout(buttonPart, 200);

  function buttonPart () {
    document.querySelector('.positiveCue').style.display = "none";
    document.querySelector('.negativeCue').style.display = "none";
    document.querySelectorAll('.buttonGeneral').forEach((button) => {
      const buttonId = button.dataset.buttonId;
  
      if (buttonId === location) {
        matchingButton = button;
      }
    });
    matchingButton.style.display = "inline-block"
    matchingButton.removeEventListener('click', leftClick);
    matchingButton.removeEventListener('contextmenu', rightClick);
    matchingButton.addEventListener('click', leftClick);
    matchingButton.addEventListener('contextmenu', rightClick);
  }
}

function leftClick () {
  if (matchingCue === 'left') {
    correctClicks += 1;
  } else {
    falseClicks += 1;
  }
  matchingButton.removeEventListener('click', leftClick)
}
function rightClick (event) {
  event.preventDefault();
  if (matchingCue === 'right') {
    correctClicks += 1;
  } else {
    falseClicks += 1;
  }
  matchingButton.removeEventListener('click', leftClick)
}

//on/off button
let correctClicks = 0;
let falseClicks = 0;
let intervalId = null;
let isOn = false;
document.querySelector('.js-start-button').addEventListener('click', () => {

    if (!isOn) {
      document.querySelector('.results').innerHTML = ``;
      intervalId = setInterval(startGame, 1200);
      isOn = true;
    } else {
      clearInterval(intervalId);
      document.querySelector('.results').innerHTML = `You clicked ${correctClicks} times on time and ${falseClicks} times wrong`;
      correctClicks = 0;
      falseClicks = 0;
      isOn = false;
    }
  })
