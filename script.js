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
// const firstNumber;
// const operator;
// const secondNumber;
const input = document.querySelector('#input');


//Operate
function operate(firstNumber, operator, secondNumber) {
    return add(firstNumber, secondNumber)
}


//Display input
container.addEventListener('click', (e) => {
    if (input.textContent == 0) {
        input.textContent = '';
    }
    input.textContent += e.target.textContent;
})