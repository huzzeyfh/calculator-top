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
        let sumAdd = add(a, b);
        console.log(sumAdd);
    } else if (operator === '-') {
        let sumSubstract = subtract(a, b);
        console.log(sumSubstract);
    } else if (operator === '/') {
        let sumDivide = divide(a, b);
        console.log(sumDivide)
    } else if (operator === 'x') {
        let sumMultiply = multiply(a, b);
        console.log(sumMultiply);
    }

    return ;
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
        let firstNumber = input.textContent.charAt(0);
        let operator = input.textContent.charAt(1);
        let secondNumber = input.textContent.charAt(2);

        console.log(input.textContent);
        console.log(firstNumber);
        console.log(operator);
        console.log(secondNumber);

        return operate(firstNumber, operator, secondNumber);
    }

    input.textContent += e.target.textContent;
    console.log(input.textContent);
    return;
})

