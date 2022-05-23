//happens when the page loads
let buttonContainer = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', displayInput);
}

let counter = 0;
//document.getElementById('display').innerText = counter;
let firstTime = true;
let activeOperator = '';
let plusOperator = true;
let minusOperator = true;
let multitplyOperator = true;
let divisionOperator = true;

let newStringCounter = '';


function displayInput(event) {
	let newStringArray = [];

	newStringArray.push(event.target.id);

	for (let index = 0; index < newStringArray.length; index++) {
		//console.log(newStringArray[index]);
		let newString = newStringCounter.concat(newStringArray[index]);
		newStringCounter = newString;
		document.getElementById('display').innerText = newString;
		console.log(`display function is outputing newString to be ${newString}`);
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

		switch (activeOperator) {
			case '+':
				counter = parseFloat(counter) + currentValue;
				console.log(counter)
				break;
			case '-':
				counter = parseFloat(counter) - currentValue;
				console.log(counter)
				break;
			case 'x':
				counter = parseFloat(counter) * currentValue;
				break;
			case '%':
				counter = parseFloat(counter) /= currentValue;
				break;
		}

		activeOperator = '+';
		plusOperator = false;
		minusOperator = true;
		divisionOperator = true;
		multitplyOperator = true;

		document.getElementById('display').innerText = counter;

		return (counter = document.getElementById('display').innerText);
	} else {
		console.log('add else part');

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
				counter = parseFloat(counter) + currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = parseFloat(counter) - currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = parseFloat(counter) * currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = parseFloat(counter) /= currentValue;
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
	} else {
		document.getElementById('display').innerText =
			a - parseFloat(document.getElementById('display').innerText);

		return (counter = document.getElementById('display').innerText);
	}
}

// changing operators then do the same as 'restarting'

function multiply(a = parseFloat(counter)) {
	newStringCounter = '';

	if (firstTime && activeOperator !== 'x') {
		counter = document.getElementById('display').innerText;

		newStringCounter = '';
		firstTime = false;
		activeOperator = 'x';

		return newStringCounter;
	} else if (activeOperator !== 'x' && multitplyOperator) {
		console.log(activeOperator)
		let currentValue = parseFloat(document.getElementById('display').innerText);

		console.log(currentValue)

		switch (activeOperator) {
			case '+':
				counter = parseFloat(counter) + currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = parseFloat(counter) - currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = parseFloat(counter) * currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = parseFloat(counter) /= currentValue;
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
				counter = parseFloat(counter) + currentValue;
				console.log(`in + case ${counter}`);
				break;
			case '-':
				counter = parseFloat(counter) - currentValue;
				console.log(`in - case ${counter}`);
				break;
			case 'x':
				counter = parseFloat(counter) * currentValue;
				console.log(`in * case ${counter}`);
				break;
			case '%':
				counter = parseFloat(counter) /= currentValue;
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
	} else {
		document.getElementById('display').innerText = a /= parseFloat(
			document.getElementById('display').innerText
		);
		return (counter = document.getElementById('display').innerText);
	}
}

// dont parseInt numbers to concatante

function clearInput() {
	document.getElementById('display').innerText = '0';

	firstTime = true;
	counter = 0;
	newStringCounter = '';
		activeOperator = ''
		plusOperator = true;
	minusOperator = true;
	multitplyOperator = true;
	divisionOperator = true;

}
