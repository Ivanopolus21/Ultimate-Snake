let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const codes = {
	'ArrowLeft': false,
  'ArrowRight': false,
  'ArrowUp': false,
  'ArrowDown': false,
  'KeyA': false,
  'KeyD': false,
  'KeyW': false,
  'KeyS': false,
};

export function checkForTrue () {
	if ((codes['ArrowUp'] === true || codes['KeyW'] === true) && lastInputDirection.y === 0) {
		inputDirection = { x: 0, y : -1};
	}

	if ((codes['ArrowDown'] === true || codes['KeyS'] === true) && lastInputDirection.y === 0) {
		inputDirection = { x: 0, y : 1};
	}

	if ((codes['ArrowRight'] === true || codes['KeyD'] === true) && lastInputDirection.x === 0){
		inputDirection = { x: 1, y : 0};
	}

	if ((codes['ArrowLeft'] === true || codes['KeyA'] === true) && lastInputDirection.x === 0) {
		inputDirection = { x: -1, y : 0};
	}
};

export function controls () {
	window.addEventListener('keydown', (e) => {
		codes[e.code] = true;
		checkForTrue();
	})

	window.addEventListener('keyup', (e) => {
		codes[e.code] = false;
		checkForTrue();
	})
};

export const getInputDirection = () => {
	lastInputDirection = inputDirection;
	return inputDirection;
};