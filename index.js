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
		console.log(`current value is ${currentValue}`);
		switch (activeOperator) {
			case '+':
				// counter = parseFLoat(counter) + currentValue;
				counter = currentValue;
				console.log(counter);
				break;
			case '-':
				// counter = parseFloat(counter) - currentValue;
				counter = currentValue;
				console.log(counter);
				break;
			case 'x':
				// counter = parseFloat(counter) + currentValue;
				counter = currentValue;
				break;
			case '%':
				// counter = parseFloat(counter) + currentValue;
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
		document.getElementById('display').innerText = a;
	} else {
		document.getElementById('display').innerText =
			a + parseFloat(document.getElementById('display').innerText);
		console.log(counter);
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
		console.log(`current value ${currentValue}`);
		console.log(`current counter ${counter}`);
		switch (activeOperator) {
			case '+':
				//counter = parseFloat(counter) + currentValue;
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				//counter = parseFloat(counter) - currentValue;
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				// counter = parseFloat(counter) * currentValue;
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				// counter = parseFloat(counter) / currentValue;
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
				// counter = parseFloat(counter) + currentValue;
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				// counter = parseFloat(counter) - currentValue;
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				// counter = parseFloat(counter) * currentValue;
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				// counter = parseFloat(counter) / currentValue;
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
		document.getElementById('display').innerText = a;
	} else {
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
				// counter = parseFloat(counter) + currentValue;
				counter = currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				// counter = parseFloat(counter) - currentValue;
				counter = currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				// counter = parseFloat(counter) * currentValue;
				counter = currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				// counter = parseFloat(counter) / currentValue;
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
		document.getElementById('display').innerText = a;
	} else {
		document.getElementById('display').innerText =
			a / parseFloat(document.getElementById('display').innerText);
		return (counter = document.getElementById('display').innerText);
	}
}

function equals(a = parseFloat(counter)) {
	let currentValue = parseFloat(document.getElementById('display').innerText);
	console.log(`current value ${currentValue}`);
	console.log(`counter is ${counter}`);

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
				console.log(`inside switch for plus ${currentValue}`);
				counter = counter + parseFloat(currentValue);
				console.log(`current number ${currentValue}`);
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
				counter = counter - parseFloat(currentValue);
				console.log(`current number ${currentValue}`);
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
				counter = counter * parseFloat(currentValue);
				console.log(`current number ${currentValue}`);
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
				counter = counter / parseFloat(currentValue);
				console.log(`current number ${currentValue}`);
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

	plusOperator = true;
	minusOperator = true;
	multitplyOperator = true;
	divisionOperator = true;

	if (activeOperator !== '') {
		document.getElementById(activeOperator).classList.remove('active');
		activeOperator = '';
	}

	selectedPlus = false;
	selectedMinus = false;
	selectedMultiply = false;
	selectedDivide = false;
	selectedOperator = '';

	currentNumber = 0;
}
