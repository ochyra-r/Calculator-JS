const commaBtn = document.getElementById('comma');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const displayElement = document.getElementById('display-value');

const numberBtns = [...document.getElementsByClassName('number')];
const operatorBtns = [...document.getElementsByClassName('operator')];

let displayValue = '0';
let awaitValue;
let calcArray = [];

const renderDisplay = (e) => {
	const btnText = e.target.innerText;

	if (displayValue === '0') {
		displayValue = '';
	}

	displayValue += btnText;
	displayElement.innerText = displayValue;
}

const calculation = (e) => {
	const operator = e.target.innerText;

	switch (operator) {
		case '+':
			awaitValue = displayValue;
			displayValue = '0';
			displayElement.innerText = displayValue;
			calcArray.push(awaitValue);
			calcArray.push('+');
			break;

		case '-':
			awaitValue = displayValue;
			displayValue = '0';
			displayElement.innerText = displayValue;
			calcArray.push(awaitValue);
			calcArray.push('-');
			break;

		case 'x':
			awaitValue = displayValue;
			displayValue = '0';
			displayElement.innerText = displayValue;
			calcArray.push(awaitValue);
			calcArray.push('*');
			break;

		case '÷':
			awaitValue = displayValue;
			displayValue = '0';
			displayElement.innerText = displayValue;
			calcArray.push(awaitValue);
			calcArray.push('/');
			break;

		case '=':
			calcArray.push(displayValue);
			let calculate = eval(calcArray.join(' '));
			displayValue = calculate + '';
			displayElement.innerText = displayValue;
			calcArray = [];
			break;

		default:
			break;
	}
}

numberBtns.forEach((numberBtn) => numberBtn.addEventListener('click', renderDisplay));

operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener('click', calculation))

clearBtn.addEventListener('click', function () {
	displayValue = '0';
	awaitValue = undefined;
	calcArray = [];
	displayElement.innerText = displayValue;
})

backspaceBtn.onclick = () => {
	let displayValueLength = displayValue.length;
	displayValue = displayValue.slice(0, displayValueLength - 1);

	if (displayValue === '') {
		displayValue = '0';
	}

	displayElement.innerText = displayValue;
}

commaBtn.addEventListener('click', function () {
	if (displayValue.includes('.')) {
		return
	} else {
		displayValue += '.';
	}

	// if (!displayValue.includes('.'))
	// 	displayValue += '.';

	displayElement.innerText = displayValue;
})