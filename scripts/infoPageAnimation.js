export function runAnimation1 () {
  // this function returns the nextLocationId
let nextLocationId = '';

function pickLocation () {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <= 1/16 ) {
    nextLocationId = '1'
  } else if (randomNumber > 1/16 && randomNumber <= 2 / 16 ) {
    nextLocationId = '2'
  } else if (randomNumber > 2/16 && randomNumber <= 3 / 16 ) {
    nextLocationId = '3'
  } else if (randomNumber > 3/16 && randomNumber <= 4 / 16 ) {
    nextLocationId = '4'
  } else if (randomNumber > 4/16 && randomNumber <= 5 / 16)  {
    nextLocationId = '5'
  } else if (randomNumber > 5/16 && randomNumber <= 6 / 16)  {
    nextLocationId = '6'
  } else if (randomNumber > 6/16 && randomNumber <= 7 / 16 ) {
    nextLocationId = '7'
  } else if (randomNumber > 7/16 && randomNumber <= 8 / 16 ) {
    nextLocationId = '8'
  } else if (randomNumber > 8/16 && randomNumber <= 9 / 16 ) {
    nextLocationId = '9'
  } else if (randomNumber > 9/16 && randomNumber <= 10 / 16 ) {
    nextLocationId = '10'
  } else if (randomNumber > 10/16 && randomNumber <= 11 / 16 ) {
    nextLocationId = '11'
  } else if (randomNumber > 11/16 && randomNumber <= 12 / 16 ) {
    nextLocationId = '12'
  } else if (randomNumber > 12/16 && randomNumber <= 13 / 16 ) {
    nextLocationId = '13'
  } else if (randomNumber > 13/16 && randomNumber <= 14 / 16 ) {
    nextLocationId = '14'
  } else if (randomNumber > 14/16 && randomNumber <= 15 / 16 ) {
    nextLocationId = '15'
  } else if (randomNumber > 15/16 && randomNumber <= 1 ) {
    nextLocationId = '16'
  }
  return nextLocationId;
  }

// starting function
let matchingButton = '';

function startGame () {

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

setInterval(startGame, 1000);
}




export function runAnimation2 () {
  // this function returns the nextLocationId
let nextLocationId = '';

function pickLocation () {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber <= 1/16 ) {
    nextLocationId = '1'
  } else if (randomNumber > 1/16 && randomNumber <= 2 / 16 ) {
    nextLocationId = '2'
  } else if (randomNumber > 2/16 && randomNumber <= 3 / 16 ) {
    nextLocationId = '3'
  } else if (randomNumber > 3/16 && randomNumber <= 4 / 16 ) {
    nextLocationId = '4'
  } else if (randomNumber > 4/16 && randomNumber <= 5 / 16)  {
    nextLocationId = '5'
  } else if (randomNumber > 5/16 && randomNumber <= 6 / 16)  {
    nextLocationId = '6'
  } else if (randomNumber > 6/16 && randomNumber <= 7 / 16 ) {
    nextLocationId = '7'
  } else if (randomNumber > 7/16 && randomNumber <= 8 / 16 ) {
    nextLocationId = '8'
  } else if (randomNumber > 8/16 && randomNumber <= 9 / 16 ) {
    nextLocationId = '9'
  } else if (randomNumber > 9/16 && randomNumber <= 10 / 16 ) {
    nextLocationId = '10'
  } else if (randomNumber > 10/16 && randomNumber <= 11 / 16 ) {
    nextLocationId = '11'
  } else if (randomNumber > 11/16 && randomNumber <= 12 / 16 ) {
    nextLocationId = '12'
  } else if (randomNumber > 12/16 && randomNumber <= 13 / 16 ) {
    nextLocationId = '13'
  } else if (randomNumber > 13/16 && randomNumber <= 14 / 16 ) {
    nextLocationId = '14'
  } else if (randomNumber > 14/16 && randomNumber <= 15 / 16 ) {
    nextLocationId = '15'
  } else if (randomNumber > 15/16 && randomNumber <= 1 ) {
    nextLocationId = '16'
  }
  return nextLocationId;
  }

// starting function
let matchingButton = '';

function startGame () {
  document.querySelectorAll('.buttonGeneral').forEach((button) => {
    button.style.display = "none";});

  let location = pickLocation();

  if (location < 8) {
    document.querySelector('.positiveCue').style.display = "inline-block";
  } else if (location >= 8) {
    document.querySelector('.negativeCue').style.display = "inline-block";
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
    matchingButton.removeEventListener('click', makeClickable);
    matchingButton.addEventListener('click', makeClickable)
  }
}

setInterval(startGame, 1000);
}