import { pickLocation } from "./utils/operations.js";

// starting function
let matchingButton = '';
export function startGame () {

  let location = pickLocation();

  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";
    const buttonId = button.dataset.buttonId;

    if (buttonId === location) {
      matchingButton = button;
    }
  });
  matchingButton.style.display = "inline-block"
  matchingButton.removeEventListener('click', clickEvent);
  matchingButton.addEventListener('click', clickEvent)
}

function clickEvent () {
  correctClicks += 1;
  matchingButton.removeEventListener('click', clickEvent)
}

//on/off button
let correctClicks = 0;

let intervalId = null;
let isOn = false;
document.querySelector('.js-start-button').addEventListener('click', () => {
    if (!isOn) {
      document.querySelector('.results').innerHTML = ``;
      intervalId = setInterval(startGame, 1000);
      isOn = true;
    } else {
      clearInterval(intervalId);
      document.querySelector('.results').innerHTML = `You clicked ${correctClicks} times on time`;
      correctClicks = 0;
      isOn = false;
    }
  })
