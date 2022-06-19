import { onSnake, speedDown, flag } from './snake.js';
import { randomGridPosition } from './grid.js';

export const audio = new Audio('bad_apple.mp3');
let apple = getRandomApplePosition();
let checkForApple = 0;
let existence;

export const update = () => {
  if (existence  == 1) {
    if (onSnake(apple)) {
    checkForApple = 1;
    apple = getRandomApplePosition();

    speedDown(2);
    audio.play();
    }
  }
};

export function draw (map) {
  const appleElement = document.createElement('div');
  appleElement.style.gridRowStart = apple.y;
  appleElement.style.gridColumnStart = apple.x;
  appleElement.classList.add('apple');
  if (flag < 5 || checkForApple == 1) {
    existence = 0;
    appleElement.style.display = 'none';
  } else {
    existence = 1;
    appleElement.style.display = 'block';
  }
  map.appendChild(appleElement);
};

function getRandomApplePosition() {
  let newApplePosition;
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition();
  }
  return newApplePosition;
}