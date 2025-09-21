//Add 
function add(a, b) {
    return a + b;
}

//Subtract
function subtract(a, b) {
    return a - b;
}

//Multiply
function multiply(a, b) {
    return a * b;
}

//Divide
function divide(a, b) {
    return a / b;
}


//Variables
const container = document.querySelector('.container');
const button = document.querySelectorAll('button')
const backspaceButton = document.querySelector('.btn-backspc');
const clearButton = document.querySelector('.btn-clear');
const sumButton = document.querySelector('.sum-button');
const input = document.querySelector('#input');

//


//Operate
const operate = function (firstNumber, operator, secondNumber) {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);

    if (operator === '+') {
        return add(a, b);
    }

    else if (operator === '-') {
        return subtract(a, b);
    }

    else if (operator === '/') {
        return divide(a, b);
    }

    else if (operator === 'x') {
        return multiply(a, b);
    }
}

//Get input
function getValue(value) {
    if (input.textContent == 0) {
        input.textContent = '';
    }

    if (value === 'backspace') {
        input.textContent = input.textContent.slice(0, -1);
        if (input.textContent === '') {
            input.textContent = '0';
        }
        return;
    }

    if (value === 'clear') {
        input.textContent = '0';
        return;
    }

    if (value === 'sum') {

        let separator = /^(-?\d+(?:\.\d+)?)([+\-x\/])(-?\d+(?:\.\d+)?)$/;

        let match = separator.exec(input.textContent);

        if (match == null) {
            alert('Check your operation!');
            return;
        } else if (match[2] == "/" && match[3] == 0) {
            alert('Ops, No Bruh..');
            input.textContent = '0';
            return;
        }

        let firstNumber = match[1];
        let operator = match[2];
        let secondNumber = match[3];

        input.textContent = operate(firstNumber, operator, secondNumber);
        return;
    }

    input.textContent += value;
}

//Click event
container.addEventListener('click', (e) => {

    if (e.target.tagName != 'BUTTON') return;

    if (e.target.classList.contains('btn-backspc')) {
        getValue('backspace');
        return;
    }

    if (e.target.classList.contains('btn-clear')) {
        getValue('clear');
        return;
    }

    if (e.target.classList.contains('sum-button')) {
        getValue('sum')
        return;
    }

    getValue(e.target.textContent);
});

//Keyboard event
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', 'x', '/', '.'].includes(key)) {
        getValue(key);
    } else if (key === 'Backspace') {
        getValue('backspace');
    } else if (key === 'c') {
        getValue('clear');
    } else if (key === 'Enter' || key === '=') {
        getValue('sum');
    }
});

container.addEventListener('mouseover', (e) => {
    const target = e.target
    if (target.tagName != 'BUTTON') return;

    if (target.style.backgroundColor = '#b3b3b3') {
        target.style.backgroundColor = '#d9d9d9';
    }

    if (target.classList.contains('special')) {
        target.style.backgroundColor = '#ff3333';
    }
})

container.addEventListener('mouseout', (e) => {
    const target = e.target
    if (target.tagName != 'BUTTON') return;

    if (target.style.backgroundColor = '#d9d9d9') {
        target.style.backgroundColor = '#b3b3b3';
    }

    if (target.classList.contains('special')) {
        target.style.backgroundColor = '#ff0000';
    }
})