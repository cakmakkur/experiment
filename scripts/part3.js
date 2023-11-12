import { pickLocation } from "./utils/operations.js";

// starting function
let matchingButton = '';
let matchingCue = '';

function startGame () {
  clearInterval(buttonPart);

  let location = pickLocation();

  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";});

  if (location < 8) {
    document.querySelector('.arrowL').style.display = "inline-block";
    matchingCue = true;
  } else if (location >= 8) {
    document.querySelector('.arrowR').style.display = "inline-block";
    matchingCue = false;
  }

  setTimeout(cuePart, 200);
  setTimeout(buttonPart, 700);


  function cuePart () {
    document.querySelector('.arrowL').style.display = "none";
    document.querySelector('.arrowR').style.display = "none";
    document.querySelector('.negativeCue').style.display = "inline-block";
    document.querySelector('.positiveCue').style.display = "inline-block";
  }

  function buttonPart () {
    clearInterval(cuePart)
    document.querySelector('.positiveCue').style.display = "none";
    document.querySelector('.negativeCue').style.display = "none";
    document.querySelectorAll('.buttonGeneral').forEach((button) => {
      const buttonId = button.dataset.buttonId;
  
      if (buttonId === location) {
        matchingButton = button;
      }
    });
    matchingButton.style.display = "inline-block"
    matchingButton.removeEventListener('click', makeClickable);
    matchingButton.addEventListener('click', makeClickable)
  }
}

function makeClickable () {
  if (matchingCue) {
    correctClicks += 1;
  } else {
    falseClicks += 1;
  }
  matchingButton.removeEventListener('click', makeClickable)
}

//on/off button
let correctClicks = 0;
let falseClicks = 0;
let intervalId = null;
let isOn = false;
document.querySelector('.js-start-button').addEventListener('click', () => {

    if (!isOn) {
      document.querySelector('.results').innerHTML = ``;
      intervalId = setInterval(startGame, 1800);
      isOn = true;
    } else {
      clearInterval(intervalId);
      document.querySelector('.results').innerHTML = `You clicked ${correctClicks} times on time and ${falseClicks} times wrong`;
      correctClicks = 0;
      falseClicks = 0;
      isOn = false;
    }
  })
