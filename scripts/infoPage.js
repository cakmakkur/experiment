import { runAnimation1, runAnimation2 } from "./infoPageAnimation.js";

let leftPosition = 0;

let previousButton = document.querySelector('.previousButton')
let nextButton = document.querySelector('.nextButton')

let leftContainer = document.querySelector('.js-left-container')

previousButton.disabled = true;
nextButton.innerHTML = `<i
    class="fa-solid fa-arrow-right fa-2xl"
    style="color: #0f131a"
  ></i>`;
leftContainer.innerHTML = `<div class="positiveCue">+</div>
<div class="negativeCue">-</div>
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
runAnimation1();

nextButton.addEventListener('click', () => {
  if (leftPosition === -2000) {
    window.location.href = "index.html"
  } else {
    document.querySelector('.textSlideBox').style.left = (leftPosition - 400) + "px";
    leftPosition -= 400;
    disableButton()
  }
})
previousButton.addEventListener('click', () => {
  document.querySelector('.textSlideBox').style.left = (leftPosition + 400) + "px"
  leftPosition += 400;
  disableButton()
})

function disableButton () {
  if (leftPosition === 0) {
    previousButton.disabled = true;
  } else if (leftPosition > -2000 && leftPosition < 0) {
    previousButton.disabled = false;
    nextButton.style.flex = '1';
    nextButton.innerHTML = `<i
    class="fa-solid fa-arrow-right fa-2xl"
    style="color: #0f131a"
  ></i>`;
  } else if (leftPosition <= -2000) {
    nextButton.style.flex = '3';
    nextButton.innerHTML = `<p>GO!</p>`;
  }
}