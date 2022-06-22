import { getInputDirection, controls } from "./input.js";

export let snakeSpeed = 4;
export let snakeLengthFlag = 1;
export let appleFlag = 0;
let savedSpeed = 0;
const centerOfTheMap = 11;
const snakeBody = [{x : centerOfTheMap, y : centerOfTheMap}];
let newSegments = 0;

export const update = () => {
	addSegments();
  controls();
  const inputDirection = getInputDirection();
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const draw = (map) => {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    map.appendChild(snakeElement);
  })
};

export const expandSnake = (expAmount, expSpeed) => {
	snakeLengthFlag += 1;
	newSegments += expAmount;
	if (snakeLengthFlag % 5 === 0) {
    snakeSpeed += expSpeed;
    savedSpeed = snakeSpeed;
    appleFlag = 1;
  }
  
}

export const onSnake = (position, { ignoreHead = false } = {} ) => {
  return snakeBody.some((segment, index) => {
		if (ignoreHead && index === 0) return false;
		return equalPositions(segment, position);
	})
}

export const getSnakeHead = () => {
  return snakeBody[0];
}

export const snakeIntersection = () => {
	return onSnake(snakeBody[0], { ignoreHead: true})
}

const equalPositions = (snakePos, itemPos) => {
	return (snakePos.x === itemPos.x && snakePos.y === itemPos.y);
}

const addSegments = () => {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push ({ ...snakeBody[snakeBody.length - 1] })
	}

	newSegments = 0;
}

export const speedDown = (downAmount) => {
  snakeSpeed = downAmount;
}

export const speedUp = () => {
  snakeSpeed = savedSpeed;
}

export const doingAppleZero = () => {
  appleFlag = 0;
}