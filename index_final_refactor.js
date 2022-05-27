//init values
let counter = 0;
let firstTime = true;
let activeOperator = '';
let plusOperator = true;
let minusOperator = true;
let multitplyOperator = true;
let divisionOperator = true;
let equalsOperator = true;
let currentNumber = 0;
let selectedPlus = false;
let selectedMinus = false;
let selectedMultiply = false;
let selectedDivide = false;
let selectedOperator = '';
let newStringCounter = '';
let lastDigit = 0;

//add display function to numberpad
let numberPad = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < numberPad.length; i++) {
	numberPad[i].addEventListener('click', displayInput);
}

//add add active class function to operator buttons
let operationButton = document.querySelectorAll('.operation-item');
for (let i = 0; i < operationButton.length; i++) {
	operationButton[i].addEventListener('click', addActiveClass);
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
	return (selectedOperator = id);
}

function displayInput(event) {
	let newStringArray = [];

	newStringArray.push(event.target.id);

	for (let index = 0; index < newStringArray.length; index++) {
		let newString = newStringCounter.concat(newStringArray[index]);
		newStringCounter = newString;
		document.getElementById('display').innerText = newString;

		if (!firstTime) {
			document.getElementById(selectedOperator).classList.remove('active');
		}
	}
}

function calculate(operator, a = counter) {
	if (firstTime && activeOperator !== operator) {
		counter = parseFloat(document.getElementById('display').innerText);

		newStringCounter = '';
		firstTime = false;
		activeOperator = operator;

		return newStringCounter;
	} else if (activeOperator !== operator && plusOperator) {
		let currentValue = parseFloat(document.getElementById('display').innerText);

		switch (activeOperator) {
			case '+':
				counter = currentValue;
				plusOperator = false;
				minusOperator = true;
				divisionOperator = true;
				multitplyOperator = true;
				break;
			case '-':
				counter = currentValue;
				plusOperator = true;
				minusOperator = false;
				divisionOperator = true;
				multitplyOperator = true;
				break;
			case 'x':
				counter = currentValue;
				plusOperator = true;
				minusOperator = true;
				divisionOperator = true;
				multitplyOperator = false;
				break;
			case '%':
				counter = currentValue;
				plusOperator = true;
				minusOperator = true;
				divisionOperator = false;
				multitplyOperator = true;
				break;
		}
		activeOperator = operator;

		document.getElementById('display').innerText = counter;
		return (counter = document.getElementById('display').innerText);
	} else if (
		document.getElementById(activeOperator).classList.contains('active')
	) {
		document.getElementById('display').innerText = a;
	} else {
		lastDigit = parseFloat(document.getElementById('display').innerText);

		switch (operator) {
			case '+':
				document.getElementById('display').innerText =
					a + parseFloat(document.getElementById('display').innerText);
				break;
			case '-':
				document.getElementById('display').innerText =
					a - parseFloat(document.getElementById('display').innerText);
				break;
			case 'x':
				document.getElementById('display').innerText =
					a * parseFloat(document.getElementById('display').innerText);
				break;
			case '%':
				document.getElementById('display').innerText =
					a / parseFloat(document.getElementById('display').innerText);
				break;
		}
		return (counter = document.getElementById('display').innerText);
	}
}

function add(a = parseFloat(counter)) {
	newStringCounter = '';
	let plusSign = '+';
	calculate(plusSign, a);
}

function subtract(a = parseFloat(counter)) {
	newStringCounter = '';
	let minusSign = '-';
	calculate(minusSign, a);
}

function multiply(a = parseFloat(counter)) {
	newStringCounter = '';
	let multiplySign = 'x';
	calculate(multiplySign, a);
}

function division(a = parseFloat(counter)) {
	newStringCounter = '';
	let divisionSign = '%';
	calculate(divisionSign, a);
}

function resetValues(operatorSign, a, currentValue) {
	switch (operatorSign) {
		case '+':
			counter = a + currentValue;
			selectedPlus = true;
			selectedMinus = false;
			selectedMultiply = false;
			selectedDivide = false;
			break;
		case '-':
			counter = a - currentValue;
			selectedPlus = false;
			selectedMinus = true;
			selectedMultiply = false;
			selectedDivide = false;
			break;
		case 'x':
			counter = a * currentValue;
			selectedPlus = false;
			selectedMinus = false;
			selectedMultiply = true;
			selectedDivide = false;
			break;
		case '%':
			counter = a / currentValue;
			selectedPlus = false;
			selectedMinus = false;
			selectedMultiply = false;
			selectedDivide = true;
			break;
	}
	currentNumber = currentValue;
	activeOperator = '';
	firstTime = true;
}

function equals(a = parseFloat(counter)) {
	let currentValue = parseFloat(document.getElementById('display').innerText);

	if (selectedPlus) {
		counter = a + currentNumber;
	} else if (selectedMinus) {
		counter = a - currentNumber;
	} else if (selectedMultiply) {
		counter = a * currentNumber;
	} else if (selectedDivide) {
		counter = a / currentNumber;
	}

	switch (activeOperator) {
		case '+':
			let plus = '+';
			if (selectedPlus == false) {
				if (
					document.getElementById(activeOperator).classList.contains('active')
				) {
					currentValue = lastDigit;
				}
				counter = counter + parseFloat(currentValue);
			}
			resetValues(plus, a, currentValue);
			break;
		case '-':
			let minus = '-';
			if (selectedMinus == false) {
				if (
					document.getElementById(activeOperator).classList.contains('active')
				) {
					currentValue = lastDigit;
				}
				counter = counter - parseFloat(currentValue);
			}
			resetValues(minus, a, currentValue);
			break;
		case 'x':
			let multiply = 'x';
			if (selectedMultiply == false) {
				if (
					document.getElementById(activeOperator).classList.contains('active')
				) {
					currentValue = lastDigit;
				}
				counter = counter * parseFloat(currentValue);
			}

			resetValues(multiply, a, currentValue);
			break;
		case '%':
			let division = '%';
			if (selectedDivide == false) {
				if (
					document.getElementById(activeOperator).classList.contains('active')
				) {
					currentValue = lastDigit;
				}
				counter = counter / parseFloat(currentValue);
			}
			resetValues(division, a, currentValue);
			break;
	}

	document.getElementById('display').innerText = counter;
	return (counter = document.getElementById('display').innerText);
}

function clearInput() {
	document.getElementById('display').innerText = '0';

	firstTime = true;
	counter = 0;
	newStringCounter = '';

	plusOperator = true;
	minusOperator = true;
	multitplyOperator = true;
	divisionOperator = true;

	for (let i = 0; i < operationButton.length; i++) {
		if (
			document
				.getElementById(operationButton[i].id)
				.classList.contains('active')
		) {
			document.getElementById(operationButton[i].id).classList.remove('active');
		}
	}

	activeOperator = '';
	selectedPlus = false;
	selectedMinus = false;
	selectedMultiply = false;
	selectedDivide = false;
	selectedOperator = '';

	currentNumber = 0;
}
