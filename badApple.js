import { onSnake, speedDown, doingAppleZero, appleFlag } from './snake.js';
import { randomGridPosition } from './grid.js';

export const audio = new Audio('audio/bad_apple.mp3');
export const badAppleInfluence = 2;
let apple = getRandomApplePosition();
let existence;


export const update = () => {
  if (existence  == 1) {
    if (onSnake(apple)) {
      apple = getRandomApplePosition();
      doingAppleZero();
      speedDown(badAppleInfluence);
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
    existence = 1;
    appleElement.style.display = 'block';
  } else if (appleFlag === 0){
    existence = 0;
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
}