import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let berry = getRandomBerryPosition();
const expansionRate = 1;

export const update = () => {
  if (onSnake(berry)) {
    expandSnake(expansionRate);
    berry = getRandomBerryPosition();
  }
};

export function draw (map) {
  const berryElement = document.createElement('div');
  berryElement.style.gridRowStart = berry.y;
  berryElement.style.gridColumnStart = berry.x;
  berryElement.classList.add('berry');
  map.appendChild(berryElement);
};

function getRandomBerryPosition() {
  let newBerryPosition;
  while (newBerryPosition == null || onSnake(newBerryPosition)) {
    newBerryPosition = randomGridPosition();
  }
  return newBerryPosition;
}