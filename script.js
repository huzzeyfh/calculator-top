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
    let a = Number(firstNumber);
    let b = Number(secondNumber);

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

        //get firstNumber
        let splitFirstNum = /\d+/.exec(input.textContent);
        let firstNumber = splitFirstNum[0];

        //get operator
        let splitOperator = /\D/.exec(input.textContent);
        let operator = splitOperator[0];

        //get secondNumber
        let splitSecondNum = /\d+$/.exec(input.textContent);
        let secondNumber = splitSecondNum[0];

        input.textContent = operate(firstNumber, operator, secondNumber); 
        return;
    }

    input.textContent += e.target.textContent;
    console.log(input.textContent);
    return;
})

