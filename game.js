import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateBerry, draw as drawBerry} from './berry.js';
import { outsideGrid } from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const map = document.getElementById('gameMap');

const loop = (currentTime) => {
	if (gameOver) {
		if(confirm('You lost. Press OK to restart')) {
			window.location.reload();
		}
		return;
	}


  window.requestAnimationFrame(loop);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceLastRender < 1 / snakeSpeed){
		return;
	}

	lastRenderTime = currentTime;

	update();
	draw();
};

window.requestAnimationFrame(loop)

const update = () => {
	updateSnake();
	updateBerry();
	checkDeath();
};

const draw = () => {
	gameMap.innerHTML = '';
	drawSnake(map);
	drawBerry(map);
};

const checkDeath = () => {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}