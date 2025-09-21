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
// const firstNumber;
// const operator;
// const secondNumber;
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



//Display input
container.addEventListener('click', (e) => {


    if (e.target.tagName != 'BUTTON') return;

    if (input.textContent == 0) {
        input.textContent = '';
    }

    if (e.target.classList.contains('btn-backspc')) {
        input.textContent = input.textContent.slice(0, -1);
        if (input.textContent === '') {
            input.textContent = '0';
            console.log(input.textContent);
            return;
        }
        console.log(input.textContent);
        return;
    }

    if (e.target.classList.contains('btn-clear')) {
        input.textContent = '0';
        console.log(input.textContent);
        return;
    }

    if (e.target.classList.contains('sum-button')) {

        let separator = /^(-?\d+(?:\.\d+)?)([+\-x\/])(-?\d+(?:\.\d+)?)$/;

        let match = separator.exec(input.textContent);
        console.log(match)

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

    input.textContent += e.target.textContent;
    console.log(input.textContent);
    return;
})

