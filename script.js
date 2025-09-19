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
// const firstNumber;
// const operator;
// const secondNumber;
const input = document.querySelector('#input');
let currentDisplay = input.textContent;

//Operate
function operate(firstNumber, operator, secondNumber) {
    return add(firstNumber, secondNumber)
}


//Display input
container.addEventListener('click', (e) => {
    let target = e.target;
    
    if (target.tagName != 'BUTTON') return;

    if (input.textContent == 0) {
       input.textContent = '';
    }

    if (e.target.classList.contains('btn-backspc')) {
        return currentDisplay.slice(0, -1);
    }

    if (e.target.classList.contains('btn-clear')) {
        input.textContent = 0;
        return ;
    }

    input.textContent += e.target.textContent;
    console.log(input.textContent);
    return ;
})

