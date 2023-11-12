export function pickLocation() {
  const randomNumber = Math.random();
  const nextLocationId = Math.floor(randomNumber * 16) + 1;
  return nextLocationId.toString();
}
