export function pickLocation() {
  const randomNumber = Math.random();
  const nextLocationId = Math.floor(randomNumber * 16) + 1;
  return nextLocationId.toString();
}

// //on/off button
// let correctClicks = 0;
// let falseClicks = 0;
// let intervalId = null;
// let isOn = false;
// document.querySelector('.js-start-button').addEventListener('click', () => {

//     if (!isOn) {
//       document.querySelector('.results').innerHTML = ``;
//       intervalId = setInterval(startGame, 1200);
//       isOn = true;
//     } else {
//       clearInterval(intervalId);
//       document.querySelector('.results').innerHTML = `You clicked ${correctClicks} times on time and ${falseClicks} times wrong`;
//       correctClicks = 0;
//       falseClicks = 0;
//       isOn = false;
//     }
//   })
