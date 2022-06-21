import { onSnake, expandSnake, speedUp, snakeSpeed } from './snake.js';
import { audio, badAppleInfluence } from './badApple.js';
import { randomGridPosition } from './grid.js';

let berry = getRandomBerryPosition();
const expansionRate = 1;
const expansionSpeed = 3;

export const update = () => {
  if (onSnake(berry)) {
    berry = getRandomBerryPosition();
    expandSnake(expansionRate, expansionSpeed);
    if(snakeSpeed == badAppleInfluence) {
      speedUp();
    }

    audio.pause();
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