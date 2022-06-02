console.log('startNewREFACTORfinal.js');

//init NEW variables
let firstTime = true;
let displayCounter = '';
let runningTotal = 0;
//let activeOperator = '';
let lastSelectedOperator = '';
let lastSelectedNumber;

//add display function to numberpad/////////////////////////////////
let numberPad = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < numberPad.length; i++) {
	numberPad[i].addEventListener('click', displayInput);
}

function displayInput(event) {
	let newStringArray = [];

	newStringArray.push(event.target.id);

	for (let index = 0; index < newStringArray.length; index++) {
		let newString = displayCounter.concat(newStringArray[index]);
		displayCounter = newString;
		document.getElementById('display').innerText = newString;

		// if (!firstTime) {
		// 	document.getElementById(selectedOperator).classList.remove('active');
		// }
	}
}
/////////////////////////////////////////////////////////////////////

function clearInput() {
	document.getElementById('display').innerText = '0';

	console.log(`display counter before ${displayCounter}`);

	firstTime = true;
	displayCounter = '';
	runningTotal = 0;
	lastSelectedOperator = '';
	lastSelectedNumber;

	for (let i = 0; i < operationItem.length; i++) {
		if (
			document.getElementById(operationItem[i].id).classList.contains('active')
		) {
			document.getElementById(operationItem[i].id).classList.remove('active');
		}
	}
}

//add add active class function to operator buttons//////////////
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
			//activeOperator = operation;
		} else {
			document.getElementById(operation).classList.remove('active');
		}
	}
	//return activeOperator;
}
//////////////////////////////////////////////////////////////////

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
		default:
			break;
	}
	return (lastSelectedNumber = parseFloat(currentlyDisplayed));
}

function calculate(activeOperator) {
	activeOperator = activeOperator;
	let currentlyDisplayed = document.getElementById('display').innerText;

	if (firstTime) {
		runningTotal = parseFloat(displayCounter);
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
			default:
				console.log('keep here to capture anything not accounted for');
				break;
		}
	} else if (parseFloat(runningTotal) === parseFloat(currentlyDisplayed)) {
		document.getElementById('display').innerText = currentlyDisplayed;
		lastSelectedOperator = activeOperator;
	} else if (activeOperator !== lastSelectedOperator) {
		evaluate(lastSelectedOperator, currentlyDisplayed);

		lastSelectedNumber = currentlyDisplayed;
		// switch (lastSelectedOperator) {
		// 	case '+':
		// 		runningTotal = runningTotal + parseFloat(currentlyDisplayed);
		// 		break;
		// 	case '-':
		// 		runningTotal = runningTotal - parseFloat(currentlyDisplayed);
		// 		break;
		// 	case 'x':
		// 		runningTotal = runningTotal * parseFloat(currentlyDisplayed);
		// 		break;
		// 	case '%':
		// 		runningTotal = runningTotal / parseFloat(currentlyDisplayed);
		// 		break;
		// 	default:
		// 		break;
		// }

		document.getElementById('display').innerText = runningTotal;
		displayCounter = '';
		lastSelectedOperator = activeOperator;
	} else {
		evaluate(activeOperator, currentlyDisplayed);
		lastSelectedNumber = currentlyDisplayed;
		// switch (activeOperator) {
		// 	case '+':
		// 		runningTotal = runningTotal + parseFloat(currentlyDisplayed);
		// 		break;
		// 	case '-':
		// 		runningTotal = runningTotal - parseFloat(currentlyDisplayed);
		// 		break;
		// 	case 'x':
		// 		runningTotal = runningTotal * parseFloat(currentlyDisplayed);
		// 		break;
		// 	case '%':
		// 		runningTotal = runningTotal / parseFloat(currentlyDisplayed);
		// 		break;
		// 	default:
		// 		console.log('capture anything that may be missed');
		// 		break;
		// }

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

//work on changing operators and evaluation

function multiply() {
	activeOperator = 'x';
	calculate(activeOperator);
}

function division() {
	activeOperator = '%';
	calculate(activeOperator);
}

function equals() {
	let currentlyDisplayed = document.getElementById('display').innerText;

	console.log(currentlyDisplayed);
	console.log(`last selected operator is ${lastSelectedOperator}`);

	console.log(`last selected number is ${lastSelectedNumber}`);

	if (firstTime) {
		document.getElementById('display').innerText = currentlyDisplayed;
	} else if (parseFloat(runningTotal) === parseFloat(currentlyDisplayed)) {
		//grab last digit selected
		evaluate(lastSelectedOperator, lastSelectedNumber);
		console.log(`running total is ${runningTotal}`);
		document.getElementById('display').innerText = runningTotal;
		console.log(currentlyDisplayed);

		displayCounter = '';
	} else {
		evaluate(lastSelectedOperator, currentlyDisplayed);

		document.getElementById('display').innerText = runningTotal;
		displayCounter = '';
	}
}