const score1 = JSON.parse(localStorage.getItem('scorePart1'))*16;
const score2c = JSON.parse(localStorage.getItem('scorePart2correct'))*16;
const score2f = JSON.parse(localStorage.getItem('scorePart2false'))*16;
const score3c = JSON.parse(localStorage.getItem('scorePart3correct'))*16;
const score3f = JSON.parse(localStorage.getItem('scorePart3false'))*16;

document.querySelector('.js-results-left').innerHTML = `

  <div class="left-container-graphbox">
    <div class="column1"></div>
    <div class="columnBuffer"></div>
    <div class="column2"></div>
    <div class="column3"></div>
    <div class="columnBuffer"></div>
    <div class="column4"></div>
    <div class="column5"></div>
  </div>
  <div class="left-container-graph-info"><div>Part 1</div><div>Part 2</div><div>Part 3</div>
  </div>
  <div class="left-container-measure"><div>15</div><div>12</div><div>9</div><div>6</div><div>3</div><div>0</div>
  `;

document.querySelector('.js-results-right').innerHTML = `
In the first part you clicked ${score1/16} time(s) on time. <br><br>In the second part you clicked <a style="color: green;"> ${score2c/16} </a> time(s) right on time and <a style="color: red;">${score2f/16} </a>time(s) wrong. <br><br> In the third part you clicked <a style="color: green;">${score3c/16}</a> time(s) right on time and <a style="color: red;">${score3f/16}</a> time(s) wrong. 
<br><br><br>Thanks for your participation.
`;


console.log(score1);
console.log(score2c);
console.log(score2f)
console.log(score3c);
console.log(score3f);

function calculateResults () {
  document.querySelector('.column1').style.height = `${score1}px`;
  document.querySelector('.column2').style.height = `${score2c}px`;
  document.querySelector('.column3').style.height = `${score2f}px`;
  document.querySelector('.column4').style.height = `${score3c}px`;
  document.querySelector('.column5').style.height = `${score3f}px`;
}

setTimeout(calculateResults, 400);
