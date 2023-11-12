import { pickLocation } from "./utils/operations.js";

let intervalId1 = null;
let intervalId2 = null;
let intervalId3 = null;

export function runAnimation1 () {
  // this function returns the nextLocationId
  let matchingButton = '';

  function animation () {
  let location = pickLocation();
  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";
    const buttonId = button.dataset.buttonId;
    if (buttonId === location) {
      matchingButton = button;
    }
  });
  matchingButton.style.display = "inline-block"
}
intervalId1 = setInterval(animation, 1000);
}

export function stopAnimation1 () {
  clearInterval(intervalId1)
}

export function runAnimation2 () {
  let matchingCue = '';
  let matchingButton = '';

  function animation() {
    let location = pickLocation();
    document.querySelectorAll('.buttonGeneral').forEach((button) => {
      button.style.display = "none";});
   
    if (location < 8) {
      document.querySelector('.positiveCue').style.display = "inline-block";
      matchingCue = true;
    } else if (location >= 8) {
      document.querySelector('.negativeCue').style.display = "inline-block";
      matchingCue = false;
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
   }
  }
  intervalId2 = setInterval(animation, 1200);
}

export function stopAnimation2 () {
  clearInterval(intervalId2)
}

export function runAnimation3 () {
  let matchingCue = '';
  let matchingButton = '';

  function animation() {
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
    }
  }
  intervalId3 = setInterval(animation, 1200);
}

export function stopAnimation3 () {
  clearInterval(intervalId3)
}
