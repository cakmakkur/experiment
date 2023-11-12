import { pickLocation } from "./utils/operations.js";

export let correctClicksPart2 = 0;
export let falseClicksPart2 = 0;

document.querySelector('.positiveCue').style.display = "none";
document.querySelector('.negativeCue').style.display = "none";


// starting function
let matchingButton = '';
let matchingCue = '';
let count = 0;

function startGame () {
  count++;
  if (count < 15) {
  let location = pickLocation();
  let cueDirection = pickLocation();

  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";});

  if (cueDirection < 8) {
    document.querySelector('.positiveCue').style.display = "inline-block";
    matchingCue = 'left';
  } else if (cueDirection >= 8) {
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
} else {
  clearInterval(intervalId);

  document.querySelector('.results').innerHTML = `<p>This part is finished. <br><br>Click <strong>Next</strong> to continue.</p>`;
  startButton.innerHTML = `Next!`;
  localStorage.setItem('scorePart2correct', JSON.stringify(correctClicksPart2));
  localStorage.setItem('scorePart2false', JSON.stringify(falseClicksPart2));
  startButton.addEventListener('click', () => {
    window.location.href = "part3.html"
});
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

const startButton = document.querySelector('.js-start-button');
startButton.innerHTML = `Start`;
const textBox = document.querySelector('.results');
textBox.innerHTML = `Part 2 <br><br>After '+' leftclick on the button before it disappears.<br>After '-' rightclick on the button before it disappears.`;

//on/off button
let intervalId = null;
startButton.addEventListener('click', () => {
  intervalId = setInterval(startGame, 1000);
  startButton.removeEventListener('click', () => {
    intervalId = setInterval(startGame, 1000);
});
})
