import { pickLocation } from "./utils/operations.js";

export let correctClicksPart3 = 0;
export let falseClicksPart3 = 0;

// starting function
let matchingButton = '';
let matchingCue = '';
let matchingArrow = '';
let count = 0;

let intervalCue = null;
let intervalButton = null;

document.querySelector('.arrowL').style.display = "none";
document.querySelector('.arrowR').style.display = "none";
document.querySelector('.positiveCue').style.display = "none";
document.querySelector('.negativeCue').style.display = "none";

function startGame () {
  count++;

  if (count < 15) {
    clearInterval(intervalButton);

    let location = pickLocation();
    let cueDirection = pickLocation();
    let arrowDirection = pickLocation();

    document.querySelectorAll('.buttonGeneral').forEach((button) => {
      button.style.display = "none";});


    if (arrowDirection < 8) {
      document.querySelector('.arrowL').style.display = "inline-block";
      matchingArrow = 'left'
    } else if (cueDirection >= 8) {
      document.querySelector('.arrowR').style.display = "inline-block";
      matchingArrow = 'right';
    }
  
    intervalCue = setTimeout(cuePart, 800);
    intervalButton = setTimeout(buttonPart, 1600);

    function cuePart () {
      document.querySelector('.arrowL').style.display = "none";
      document.querySelector('.arrowR').style.display = "none";
      if (cueDirection < 8) {
        document.querySelector('.positiveCue').style.display = "inline-block";
        matchingCue = 'left'
      } else if (cueDirection >= 8) {
        document.querySelector('.negativeCue').style.display = "inline-block";
        matchingCue = 'right';
      }
    }

    function buttonPart () {
      clearInterval(intervalCue);
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
    clearInterval(intervalButton);
    clearInterval(intervalId);

    localStorage.setItem('scorePart3correct', JSON.stringify(correctClicksPart3));
    localStorage.setItem('scorePart3false', JSON.stringify(falseClicksPart3));

    document.querySelector('.results').innerHTML = `<p>Experiment is finished.<br><br>Click <strong>Next</strong> to see the results.</p>`;
    startButton.innerHTML = `Finish`;
    startButton.addEventListener('click', () => {
      window.location.href = "results.html"
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
textBox.innerHTML = `Part 3 <br><br>After '+' leftclick on the button before it disappears.<br>After '-' leftclick on the button before it disappears.`;

//on/off button
let intervalId = null;
startButton.addEventListener('click', () => {
  intervalId = setInterval(startGame, 3000);
  startButton.removeEventListener('click', () => {
    intervalId = setInterval(startGame, 3000);
});
})
