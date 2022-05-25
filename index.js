//happens when the page loads
let buttonContainer = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', displayInput);
}

let operationButton = document.querySelectorAll('.operation-item');
for (let i = 0; i < operationButton.length; i++) {
	operationButton[i].addEventListener('click', addActiveClass);
}

function addActiveClass(event) {
	let currentOperatorSelected = document.getElementById(event.target.id);
	console.log(event.target);

	switch (event.target.id) {
		case '+':
			currentOperatorSelected.classList.add('active');
			document.getElementById('-').classList.remove('active');
			document.getElementById('x').classList.remove('active');
			document.getElementById('%').classList.remove('active');
			return (selectedOperator = '+');
			break;
		case '-':
			currentOperatorSelected.classList.add('active');
			document.getElementById('+').classList.remove('active');
			document.getElementById('x').classList.remove('active');
			document.getElementById('%').classList.remove('active');
			return (selectedOperator = '-');
			break;

		case 'x':
			currentOperatorSelected.classList.add('active');
			document.getElementById('-').classList.remove('active');
			document.getElementById('+').classList.remove('active');
			document.getElementById('%').classList.remove('active');
			return (selectedOperator = 'x');
			break;
		case '%':
			currentOperatorSelected.classList.add('active');
			document.getElementById('-').classList.remove('active');
			document.getElementById('x').classList.remove('active');
			document.getElementById('+').classList.remove('active');
			return (selectedOperator = '%');
			break;
	}
}

let counter = 0;
//document.getElementById('display').innerText = counter;
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

let lastDigitTyped = 0;

let newStringCounter = '';

function displayInput(event) {
	let newStringArray = [];

	newStringArray.push(event.target.id);

	for (let index = 0; index < newStringArray.length; index++) {
		//console.log(newStringArray[index]);
		let newString = newStringCounter.concat(newStringArray[index]);
		newStringCounter = newString;
		document.getElementById('display').innerText = newString;
		//console.log(newString);

		// if (
		// 	newString.includes('+') ||
		// 	newString.includes('-') ||
		// 	newString.includes('%') ||
		// 	newString.includes('x')
		// ) {
		// 	document.getElementById('display').innerText = newString[1];
		// 	console.log(`this is the stripped version ${newString[0]}`);
		// 	return newString;
		// } else {
		// 	document.getElementById('display').innerText = newString;
		// 	console.log(`display function is outputing newString to be ${newString}`);
		// 	return newString;
		// }

		if (!firstTime) {
			document.getElementById(selectedOperator).classList.remove('active');
		}
	}
}

function add(a = parseFloat(counter)) {
	newStringCounter = '';

	if (firstTime && activeOperator !== '+') {
		counter = parseFloat(document.getElementById('display').innerText);

		newStringCounter = '';
		firstTime = false;
		activeOperator = '+';

		return newStringCounter;
	} else if (activeOperator !== '+' && plusOperator) {
		let currentValue = parseFloat(document.getElementById('display').innerText);
		console.log(activeOperator);
		switch (activeOperator) {
			case '+':
				counter = currentValue;
				console.log(counter);
				break;
			case '-':
				counter = currentValue;
				console.log(counter);
				break;
			case 'x':
				counter = currentValue;
				break;
			case '%':
				counter = currentValue;
				break;
		}

		activeOperator = '+';
		plusOperator = false;
		minusOperator = true;
		divisionOperator = true;
		multitplyOperator = true;

		document.getElementById('display').innerText = counter;
		return (counter = document.getElementById('display').innerText);
	} else if (
		document.getElementById(activeOperator).classList.contains('active')
	) {
	} else {
		lastDigitTyped = parseFloat(document.getElementById('display').innerText);
		console.log(lastDigitTyped);
		document.getElementById('display').innerText =
			a + parseFloat(document.getElementById('display').innerText);

		return (counter = document.getElementById('display').innerText);
	}
}

function subtract(a = parseFloat(counter)) {
	newStringCounter = '';

	if (firstTime && activeOperator !== '-') {
		counter = document.getElementById('display').innerText;

		newStringCounter = '';
		firstTime = false;
		activeOperator = '-';

		return newStringCounter;
	} else if (activeOperator !== '-' && minusOperator) {
		let currentValue = parseFloat(document.getElementById('display').innerText);

		switch (activeOperator) {
			case '+':
				//counter = parseFloat(counter) + currentValue;
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = currentValue;
				console.log(`in /= case ${counter}`);
				break;
		}

		activeOperator = '-';
		plusOperator = true;
		minusOperator = false;
		divisionOperator = true;
		multitplyOperator = true;

		document.getElementById('display').innerText = counter;
		return (counter = document.getElementById('display').innerText);
	} else if (
		document.getElementById(activeOperator).classList.contains('active')
	) {
		document.getElementById('display').innerText = a;
	} else {
		lastDigitTyped = parseFloat(document.getElementById('display').innerText);
		document.getElementById('display').innerText =
			a - parseFloat(document.getElementById('display').innerText);

		return (counter = document.getElementById('display').innerText);
	}
}

function multiply(a = parseFloat(counter)) {
	newStringCounter = '';

	if (firstTime && activeOperator !== 'x') {
		counter = document.getElementById('display').innerText;

		newStringCounter = '';
		firstTime = false;
		activeOperator = 'x';

		return newStringCounter;
	} else if (activeOperator !== 'x' && multitplyOperator) {
		console.log(activeOperator);
		let currentValue = parseFloat(document.getElementById('display').innerText);

		console.log(currentValue);

		switch (activeOperator) {
			case '+':
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = currentValue;
				console.log(`in /= case ${counter}`);
				break;
		}

		activeOperator = 'x';
		plusOperator = true;
		minusOperator = true;
		divisionOperator = true;
		multitplyOperator = false;

		document.getElementById('display').innerText = counter;
		return (counter = document.getElementById('display').innerText);
	} else if (
		document.getElementById(activeOperator).classList.contains('active')
	) {
	} else {
		lastDigitTyped = parseFloat(document.getElementById('display').innerText);
		document.getElementById('display').innerText =
			a * parseFloat(document.getElementById('display').innerText);

		return (counter = document.getElementById('display').innerText);
	}
}

function division(a = parseFloat(counter)) {
	newStringCounter = '';

	if (firstTime && activeOperator !== '%') {
		counter = document.getElementById('display').innerText;

		newStringCounter = '';
		firstTime = false;
		activeOperator = '%';

		return newStringCounter;
	} else if (activeOperator !== '%' && divisionOperator) {
		let currentValue = parseFloat(document.getElementById('display').innerText);

		switch (activeOperator) {
			case '+':
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = currentValue;
				console.log(`in /= case ${counter}`);
				break;
		}
		activeOperator = '%';

		plusOperator = true;
		minusOperator = true;
		divisionOperator = false;
		multitplyOperator = true;

		document.getElementById('display').innerText = counter;
		return (counter = document.getElementById('display').innerText);
	} else if (
		document.getElementById(activeOperator).classList.contains('active')
	) {
	} else {
		lastDigitTyped = parseFloat(document.getElementById('display').innerText);
		document.getElementById('display').innerText =
			a / parseFloat(document.getElementById('display').innerText);
		return (counter = document.getElementById('display').innerText);
	}
}

function equals(a = parseFloat(counter)) {
	let currentValue = parseFloat(document.getElementById('display').innerText);
	console.log(activeOperator);
	console.log(`current number ${currentNumber}`);
	console.log(`counter is ${counter}`);

	if (!firstTime) {
		currentValue = lastDigitTyped;
	}

	if (selectedPlus) {
		counter = a + currentNumber;
		console.log('equals selected plus part');
	} else if (selectedMinus) {
		counter = a - currentNumber;
		console.log('equals selected minus part');
	} else if (selectedMultiply) {
		counter = a * currentNumber;
		console.log('equals selected multiply part');
	} else if (selectedDivide) {
		counter = a / currentNumber;
		console.log('equals selected divide part');
	}
	switch (activeOperator) {
		case '+':
			if (selectedPlus == false) {
				counter = counter + parseFloat(currentNumber);
				console.log(`current number ${currentNumber}`);
				console.log(`counter is ${counter}`);
			}

			counter = a + currentValue;
			currentNumber = currentValue;
			activeOperator = '';

			firstTime = true;
			selectedPlus = true;
			selectedMinus = false;
			selectedMultiply = false;
			selectedDivide = false;
			break;
		case '-':
			if (selectedMinus == false) {
				counter = counter - parseFloat(currentNumber);
				console.log(`current number ${currentNumber}`);
				console.log(`counter is ${counter}`);
			}

			counter = a - currentValue;
			currentNumber = currentValue;
			activeOperator = '';
			console.log(`in - case ${counter}`);
			firstTime = true;
			selectedPlus = false;
			selectedMinus = true;
			selectedMultiply = false;
			selectedDivide = false;
			break;
		case 'x':
			if (selectedMultiply == false) {
				counter = counter * parseFloat(currentNumber);
				console.log(`current number ${currentNumber}`);
				console.log(`counter is ${counter}`);
			}

			counter = a * currentValue;
			currentNumber = currentValue;
			activeOperator = '';
			console.log(`in * case ${counter}`);
			firstTime = true;
			selectedPlus = false;
			selectedMinus = false;
			selectedMultiply = true;
			selectedDivide = false;

			break;
		case '%':
			if (selectedDivide == false) {
				counter = counter / parseFloat(currentNumber);
				console.log(`current number ${currentNumber}`);
				console.log(`counter is ${counter}`);
			}

			counter = a / currentValue;
			currentNumber = currentValue;
			activeOperator = '';
			console.log(`in / case ${counter}`);
			firstTime = true;
			selectedPlus = false;
			selectedMinus = false;
			selectedMultiply = false;
			selectedDivide = true;
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
	activeOperator = '';
	plusOperator = true;
	minusOperator = true;
	multitplyOperator = true;
	divisionOperator = true;
}
