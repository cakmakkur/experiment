import { pickLocation } from "./utils/operations.js";

localStorage.removeItem('scorePart1');
localStorage.removeItem('scorePart2correct');
localStorage.removeItem('scorePart2false');
localStorage.removeItem('scorePart3correct');
localStorage.removeItem('scorePart3false');


export let correctClicksPart1 = 0;

// starting function
let matchingButton = '';
let count = 0;
export function startGame () {
  count++;
  //change the count to experiment duration
  if (count < 15) {
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
  } else {
    clearInterval(intervalId);
    
    document.querySelector('.results').innerHTML = `<p>This part is finished. <br><br>Click <strong>Next</strong> to continue.</p>`;
    startButton.innerHTML = `Next!`;
    localStorage.setItem('scorePart1', JSON.stringify(correctClicksPart1));
    startButton.addEventListener('click', () => {
      window.location.href = "part2.html"
  });
  }
}

function clickEvent () {
  correctClicksPart1 += 1;
  matchingButton.removeEventListener('click', clickEvent)
}

const startButton = document.querySelector('.js-start-button');
startButton.innerHTML = `Start`;
const textBox = document.querySelector('.results');
textBox.innerHTML = `Part 1 <br><br>Click on the button before it disappears...`;

//on/off button
let intervalId = null;
startButton.addEventListener('click', () => {
      intervalId = setInterval(startGame, 600);
      startButton.removeEventListener('click', () => {
        intervalId = setInterval(startGame, 600);
    });
  })
