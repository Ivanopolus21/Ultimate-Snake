import { onSnake, speedDown } from './snake.js';
import { randomGridPosition } from './grid.js';

export const audio = new Audio('bad_apple.mp3');
let apple = getRandomApplePosition();

export const update = () => {
  if (onSnake(apple)) {
    apple = getRandomApplePosition();
    speedDown(1);
    audio.play();
  }
};

export function draw (map) {
  const appleElement = document.createElement('div');
  appleElement.style.gridRowStart = apple.y;
  appleElement.style.gridColumnStart = apple.x;
  appleElement.classList.add('apple');
  map.appendChild(appleElement);
};

function getRandomApplePosition() {
  let newApplePosition;
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition();
  }
  return newApplePosition;
}

