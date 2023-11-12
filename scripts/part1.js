import { pickLocation } from "./utils/operations.js";

// starting function
let matchingButton = '';
let count = 0;
export function startGame () {
  count++;
  
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
  correctClicksPart1 += 1;
  matchingButton.removeEventListener('click', clickEvent)
}

//on/off button
let correctClicksPart1 = 0;
let intervalId = null;
let isOn = false;
document.querySelector('.js-start-button').addEventListener('click', () => {
    if (count < 60) {
      intervalId = setInterval(startGame, 1000);
      isOn = true;
    } else {
      clearInterval(intervalId);
      document.querySelector('.results').innerHTML = `You clicked ${correctClicksPart1} times on time`;
      correctClicksPart1 = 0;
      isOn = false;
    }
  })
