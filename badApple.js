import { onSnake, speedUp, doingAppleZero, appleFlag } from './snake.js';
import { randomGridPosition } from './grid.js';

export const audio = new Audio('audio/bad_apple.mp3');
export const badAppleInfluence = 30;
let apple = getRandomApplePosition();
let appleExistence;

export const update = () => {
  if (appleExistence == 1) {
    if (onSnake(apple)) {
      apple = getRandomApplePosition();
      doingAppleZero();
      speedUp(badAppleInfluence);
      audio.play();
    }
  }
};

export function draw (map) {
  const appleElement = document.createElement('div');
  appleElement.style.gridRowStart = apple.y;
  appleElement.style.gridColumnStart = apple.x;
  appleElement.classList.add('apple');
  if ( appleFlag === 1 ){
    appleExistence = 1;
    appleElement.style.display = 'block';
  } else if (appleFlag === 0){
    appleExistence = 0;
    appleElement.style.display = 'none';
  }
  map.appendChild(appleElement);
};

function getRandomApplePosition() {
  let newApplePosition;
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition();
  }
  return newApplePosition;
};