console.log('this is the final copy to be uploaded to github for review');

//init variables
let firstTime = true;
let displayCounter = '';
let runningTotal = 0;
let lastSelectedOperator = '';
let lastSelectedNumber;

let keepTrackOfOperators = [];
let keepTrackOfLastOperatorSelectedInEquals = '';

let numberPad = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < numberPad.length; i++) {
	numberPad[i].addEventListener('click', displayInput);
}

function displayInput(event) {
	let newStringArray = [];

	newStringArray.push(event.target.id);

	let operationsArray = ['+', '-', 'x', '%'];
	for (let i = 0; i < operationsArray.length; i++) {
		const operation = operationsArray[i];
		document.getElementById(operation).classList.remove('active');
	}

	for (let index = 0; index < newStringArray.length; index++) {
		let newString = displayCounter.concat(newStringArray[index]);
		displayCounter = newString;
		document.getElementById('display').innerText = newString;
	}
}

function clearInput() {
	document.getElementById('display').innerText = '0';

	firstTime = true;
	displayCounter = '';
	runningTotal = 0;
	lastSelectedOperator = '';
	lastSelectedNumber;
	keepTrackOfOperators = [];
	keepTrackOfLastOperatorSelectedInEquals = '';

	for (let i = 0; i < operationItem.length; i++) {
		if (
			document.getElementById(operationItem[i].id).classList.contains('active')
		) {
			document.getElementById(operationItem[i].id).classList.remove('active');
		}
	}
}

let operationItem = document.querySelectorAll('.operation-item');
for (let i = 0; i < operationItem.length; i++) {
	operationItem[i].addEventListener('click', addActiveClass);
}

function addActiveClass(event) {
	let operationsArray = ['+', '-', 'x', '%'];
	let id = event.target.id;

	for (let i = 0; i < operationsArray.length; i++) {
		const operation = operationsArray[i];

		if (operation === id) {
			document.getElementById(operation).classList.add('active');
		} else {
			document.getElementById(operation).classList.remove('active');
		}
	}
}

function evaluate(operator, currentlyDisplayed) {
	switch (operator) {
		case '+':
			runningTotal = runningTotal + parseFloat(currentlyDisplayed);
			break;
		case '-':
			runningTotal = runningTotal - parseFloat(currentlyDisplayed);
			break;
		case 'x':
			runningTotal = runningTotal * parseFloat(currentlyDisplayed);
			break;
		case '%':
			runningTotal = runningTotal / parseFloat(currentlyDisplayed);
			break;
		case '=':
			runningTotal = runningTotal;
			break;
		default:
			console.log('this is where the problem may be');
			break;
	}

	return (lastSelectedNumber = parseFloat(currentlyDisplayed));
}

function calculate(activeOperator) {
	keepTrackOfOperators.push(activeOperator);

	if (keepTrackOfOperators.length > 3) {
		keepTrackOfOperators.shift();
	}

	activeOperator = activeOperator;

	let currentlyDisplayed = document.getElementById('display').innerText;

	if (firstTime) {
		runningTotal = parseFloat(document.getElementById('display').innerText);
		firstTime = false;
		displayCounter = '';
		switch (activeOperator) {
			case '+':
				lastSelectedOperator = '+';
				break;
			case '-':
				lastSelectedOperator = '-';
				break;
			case 'x':
				lastSelectedOperator = 'x';
				break;
			case '%':
				lastSelectedOperator = '%';
				break;
			case '=':
				lastSelectedOperator = '=';
				break;
			default:
				console.log('keep here to capture anything not accounted for');
				break;
		}
	} else if (lastSelectedOperator === '=' && activeOperator === '=') {
		if (keepTrackOfOperators[0] !== '=') {
			keepTrackOfLastOperatorSelectedInEquals = keepTrackOfOperators[0];
		}
		if (keepTrackOfLastOperatorSelectedInEquals) {
			switch (keepTrackOfLastOperatorSelectedInEquals) {
				case '+':
					runningTotal =
						parseFloat(runningTotal) + parseFloat(lastSelectedNumber);
					break;
				case '-':
					runningTotal =
						parseFloat(runningTotal) - parseFloat(lastSelectedNumber);
					break;
				case 'x':
					runningTotal =
						parseFloat(runningTotal) * parseFloat(lastSelectedNumber);
					break;
				case '%':
					runningTotal =
						parseFloat(runningTotal) / parseFloat(lastSelectedNumber);
					break;
				case '=':
					console.log('what to do here?');
					break;
				default:
					console.log('have i not defined something for');
					break;
			}
		}
		document.getElementById('display').innerText = runningTotal;
		displayCounter = '';
	} else if (
		parseFloat(runningTotal) === parseFloat(currentlyDisplayed) &&
		document.getElementById(activeOperator).classList.contains('active')
	) {
		document.getElementById('display').innerText = currentlyDisplayed;
		lastSelectedOperator = activeOperator;
		displayCounter = '';
	} else if (activeOperator !== lastSelectedOperator) {
		lastSelectedNumber = parseFloat(currentlyDisplayed);
		evaluate(lastSelectedOperator, currentlyDisplayed);
		document.getElementById('display').innerText = runningTotal;
		displayCounter = '';
		lastSelectedOperator = activeOperator;
	} else {
		lastSelectedNumber = parseFloat(currentlyDisplayed);
		evaluate(lastSelectedOperator, currentlyDisplayed);
		document.getElementById('display').innerText = runningTotal;
		displayCounter = '';
		lastSelectedOperator = activeOperator;
	}
}

function add() {
	activeOperator = '+';
	calculate(activeOperator);
}

function subtract() {
	activeOperator = '-';
	calculate(activeOperator);
}

function multiply() {
	activeOperator = 'x';
	calculate(activeOperator);
}

function division() {
	activeOperator = '%';
	calculate(activeOperator);
}

function equals() {
	activeOperator = '=';
	calculate(activeOperator);
}
