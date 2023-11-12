import { pickLocation } from "./utils/operations.js";

let intervalId1 = null;
let intervalId2 = null;
let intervalId3 = null;

document.querySelector('.js-left-container').innerHTML = `
<div class="positiveCue">+</div>
        <div class="negativeCue">-</div>
        <div class="leftArrow">
          <img
            class="arrowL"
            src="Assets/arrow-fat-right-thin-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div class="rightArrow">
          <img
            class="arrowR"
            src="Assets/arrow-fat-right-thin-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div class="buttonBox">
          <button data-button-id="1" class="buttonGeneral button1"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="2" class="buttonGeneral button2"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="3" class="buttonGeneral button3"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="4" class="buttonGeneral button4"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="5" class="buttonGeneral button5"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="6" class="buttonGeneral button6"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="7" class="buttonGeneral button7"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="8" class="buttonGeneral button8"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="9" class="buttonGeneral button9"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="10" class="buttonGeneral button10"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="11" class="buttonGeneral button11"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="12" class="buttonGeneral button12"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="13" class="buttonGeneral button13"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="14" class="buttonGeneral button14"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="15" class="buttonGeneral button15"></button>
        </div>
        <div class="buttonBox">
          <button data-button-id="16" class="buttonGeneral button16"></button>
        </div>
`;

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

  document.querySelector('.js-left-container').innerHTML = `
  <div class="positiveCue">+</div>
          <div class="negativeCue">-</div>
          <div class="leftArrow">
            <img
              class="arrowL"
              src="Assets/arrow-fat-right-thin-svgrepo-com.svg"
              alt=""
            />
          </div>
          <div class="rightArrow">
            <img
              class="arrowR"
              src="Assets/arrow-fat-right-thin-svgrepo-com.svg"
              alt=""
            />
          </div>
          <div class="buttonBox">
            <button data-button-id="1" class="buttonGeneral button1"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="2" class="buttonGeneral button2"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="3" class="buttonGeneral button3"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="4" class="buttonGeneral button4"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="5" class="buttonGeneral button5"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="6" class="buttonGeneral button6"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="7" class="buttonGeneral button7"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="8" class="buttonGeneral button8"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="9" class="buttonGeneral button9"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="10" class="buttonGeneral button10"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="11" class="buttonGeneral button11"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="12" class="buttonGeneral button12"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="13" class="buttonGeneral button13"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="14" class="buttonGeneral button14"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="15" class="buttonGeneral button15"></button>
          </div>
          <div class="buttonBox">
            <button data-button-id="16" class="buttonGeneral button16"></button>
          </div>
  `;  
  let matchingButton = '';

  let intervalCue = null;
  let intervalButton = null;

  document.querySelector('.arrowL').style.display = "none";
  document.querySelector('.arrowR').style.display = "none";
  document.querySelector('.positiveCue').style.display = "none";
  document.querySelector('.negativeCue').style.display = "none";

  function animation () {
      clearInterval(intervalButton);

      let location = pickLocation();
      let cueDirection = pickLocation();
      let arrowDirection = pickLocation();

      document.querySelectorAll('.buttonGeneral').forEach((button) => {
        button.style.display = "none";});


      if (arrowDirection < 8) {
        document.querySelector('.arrowL').style.display = "inline-block";
      } else if (cueDirection >= 8) {
        document.querySelector('.arrowR').style.display = "inline-block";
      }
    
      intervalCue = setTimeout(cuePart, 800);
      intervalButton = setTimeout(buttonPart, 1600);

      function cuePart () {
        document.querySelector('.arrowL').style.display = "none";
        document.querySelector('.arrowR').style.display = "none";
        if (cueDirection < 8) {
          document.querySelector('.positiveCue').style.display = "inline-block";
        } else if (cueDirection >= 8) {
          document.querySelector('.negativeCue').style.display = "inline-block";
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
      }
    }
  intervalId3 = setInterval(animation, 3000);
}

export function stopAnimation3 () {
  clearInterval(intervalId3)
}

export function graphAnimation () {
  document.querySelector('.js-left-container').innerHTML = `
  <div class="left-container-graphbox">
  <div class="column1"></div>
  <div class="column2"></div>
  <div class="column3"></div>
</div>
  `;

  setTimeout(animation, 200)

  function animation () {
    document.querySelector('.column1').style.height = '90px';
    document.querySelector('.column2').style.height = '40px';
    document.querySelector('.column3').style.height = '65px';
  }
}

let html = document.querySelector('.js-left-container');

export function startAnimation () {
  html.innerHTML = `
  <p>S</p>
  `;
setTimeout(tinsert, 1000)
setTimeout(ainsert, 2000)
setTimeout(rinsert, 3000)

function tinsert () {
  html += 't'
}function ainsert () {
  html += 'a'
}function rinsert () {
  html += 'r'
}
return html;
}