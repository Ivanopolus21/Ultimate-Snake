import { onSnake, expandSnake, speedDown, snakeSpeed } from './snake.js';
import { audio, badAppleInfluence } from './badApple.js';
import { randomGridPosition } from './grid.js';

const expansionRate = 1;
const expansionSpeed = 3;
let soul = getRandomSoulPosition();

export const update = () => {
  if (onSnake(soul)) {
    soul = getRandomSoulPosition();
    expandSnake(expansionRate, expansionSpeed);
    if(snakeSpeed == badAppleInfluence) {
      speedDown();
    }
    audio.pause();
  }

};

export function draw (map) {
  const soulElement = document.createElement('div');
  soulElement.style.gridRowStart = soul.y;
  soulElement.style.gridColumnStart = soul.x;
  soulElement.classList.add('soul');
  map.appendChild(soulElement);
};

function getRandomSoulPosition() {
  let newSoulPosition;
  while (newSoulPosition == null || onSnake(newSoulPosition)) {
    newSoulPosition = randomGridPosition();
  }
  return newSoulPosition;
};