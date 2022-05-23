let counter = 0;

//happens when the page loads
let buttonContainer = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', displayInput);
}

function displayInput(event) {
	document.getElementById('display').innerText = event.target.id;
	//console.log(event.target.id);
	return event.target.id;
}

// function calculate(event) {
// 	let operation_selected = document.getElementById('+').innerHTML;
// 	console.log(operation_selected);

// 	switch (operation_selected) {
// 		case '+':
// 			add(parseInt(document.getElementById('display').innerText), counter);
// 			break;
// 		case '-':
// 			subtract(parseInt(document.getElementById('display').innerText), counter);
// 			break;
// 		case 'x':
// 			multiply(parseInt(document.getElementById('display').innerText), counter);
// 			break;
// 		case '%':
// 			divide(parseInt(document.getElementById('display').innerText), counter);
// 			break;
// 		default:
// 			break;
// 	}
// }

function add(num1, num2 = counter) {
	num1 = parseInt(document.getElementById('display').innerText);
	console.log(`num1 is ${num1}`);
	console.log(`counter is ${num2}`);
	console.log(`total is ${num1 + num2}`);
	document.getElementById('display').innerText = num1 + num2;
	return (counter = num1 + num2);
}

function subtract(num1, num2 = counter) {
	console.log(`counter coming in ${num2}`);
	num1 = parseInt(document.getElementById('display').innerText);
	console.log(num1 - num2);
	//	console.log(num1 - num2)
	return (counter = num1 - num2);
}

function calculate() {
	counter = parseInt(document.getElementById('display').innerText);

	document.getElementById('display').innerText = subtract(counter, 2);
	return (counter = subtract(counter, 2));
}

function multiply(num1, num2) {
	console.log(num1 * num2);
	document.getElementById('display').innerText = num1 * num2;
	return (counter = num1 * num2);
}

function divide(num1, num2) {
	console.log(num1 / num2);
	document.getElementById('display').innerText = num1 / num2;
	return (counter = num1 / num2);
}

//evaluate function will display the running total

function clearInput() {
	document.getElementById('display').innerText = 0;
	return (counter = 0);
}

////////////////// code take 2

let counter = 0;
let test = '';

//happens when the page loads
let buttonContainer = document.querySelectorAll('.number-item, .button-item');
for (let i = 0; i < buttonContainer.length; i++) {
	buttonContainer[i].addEventListener('click', displayInput);
}

function displayInput(event) {
	document.getElementById('display').innerText = event.target.id;
	console.log(event.target.id);
	return event.target.id;
}

function add(num1, num2) {
	num1 = parseInt(document.getElementById('display').innerText);
	document.getElementById('display').innerText = num1 + num2;
	console.log();
	return (counter = num1 + num2);
}

function subtract(num1, num2 = counter) {
	num1 = parseInt(document.getElementById('display').innerText);

	if (counter !== 0) {
		document.getElementById('display').innerText = num2 - num1;
		return (counter = num2 - num1);
	} else {
		document.getElementById('display').innerText = num1 - num2;
		return (counter = num1 - num2);
	}
}

function multiply() {}

function divide() {}
