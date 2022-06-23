import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateSoul, draw as drawSoul} from './soul.js';
import {update as updateApple, draw as drawApple, audio} from './badApple.js';
import { outsideGrid } from './grid.js';

const map = document.getElementById('gameMap');
let lastRenderTime = 0;
let gameOver = false;

const loop = (currentTime) => {
	if (gameOver) {
		audio.pause();
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
	updateSoul();
	updateApple();
	checkDeath();
};

const draw = () => {
	gameMap.innerHTML = '';
	drawSnake(map);
	drawSoul(map);
	drawApple(map);
};

const checkDeath = () => {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};