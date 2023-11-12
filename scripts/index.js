import { runAnimation1, runAnimation2, stopAnimation1, stopAnimation2, runAnimation3, stopAnimation3 } from "./indexAnimation.js";

runAnimation1();

let previousButton = document.querySelector('.previousButton')
let nextButton = document.querySelector('.nextButton')

previousButton.disabled = true;
nextButton.innerHTML = `<i
    class="fa-solid fa-arrow-right fa-2xl"
    style="color: #0f131a"
  ></i>`;



// TEXT-BOX POSITION
let leftPosition = 0;

nextButton.addEventListener('click', () => {
  if (leftPosition === -2000) {
    window.location.href = "part1.html"
  } else {
    document.querySelector('.textSlideBox').style.left = (leftPosition - 400) + "px";
    leftPosition -= 400;
    arrowFunction();
  }
})
previousButton.addEventListener('click', () => {
  document.querySelector('.textSlideBox').style.left = (leftPosition + 400) + "px"
  leftPosition += 400;
  arrowFunction();
})

//BUTTON ROLES
function arrowFunction () {
    stopAnimation1();
    stopAnimation2();
    stopAnimation3();
    
    nextButton.style.flex = '1';
    nextButton.innerHTML = `<i
    class="fa-solid fa-arrow-right fa-2xl"
    style="color: #0f131a"
  ></i>`;
  if (leftPosition === 0) {
    previousButton.disabled = true;
  } else if (leftPosition > -800 && leftPosition < 0) {
    previousButton.disabled = false;
    
    runAnimation1();
  } else if (leftPosition > -1200 && leftPosition <= -800) {
    runAnimation2();
  } else if (leftPosition > -1600 && leftPosition <= -1200) {
    runAnimation3();
  } else if (leftPosition > -2000 && leftPosition <= -1600) {
    console.log('showGraph')
   } else if (leftPosition <= -2000) {
    nextButton.style.flex = '3';
    nextButton.innerHTML = `<p>START!</p>`;
  } 
}