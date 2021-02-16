// operations
function add(firstNumber, secondNumber) {
    console.log(+firstNumber);
    return +firstNumber + +secondNumber;
}

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
// end operations

function operate(firstNumber, secondNumber, operator) {
    console.log(operator);
    return window[operator](firstNumber,secondNumber);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function (button) {
   display(button.target.value);
}))

const inputDisplay = document.querySelector('#input');
let firstNumber = "";
let secondNumber = "";
let operator = "";

function display ( value ) {
    if ( value == +value ) {
        if ( firstNumber == "") {
            inputDisplay.textContent += value;
        } else if ( secondNumber == "" ) {
            inputDisplay.textContent = "";
            inputDisplay.textContent += value;
            secondNumber = inputDisplay.textContent;
        } else {
            inputDisplay.textContent += value;
            secondNumber = inputDisplay.textContent;
        }
    } else if ( value == "clear" ) {
        clearDisplay();
    } else {
        compute(value);
    }
}

function compute ( value ) {
    if ( value != "equals" ) {
        if ( firstNumber != "" ) {
            inputDisplay.textContent = operate(firstNumber, secondNumber, operator);
            firstNumber = inputDisplay.textContent;
            secondNumber = "";
            operator = value;
        } else if ( firstNumber == "" ) {
            firstNumber = inputDisplay.textContent;
            operator = value;
        }
    } else {
        if ( firstNumber != "" && secondNumber != "" ) {
            inputDisplay.textContent = operate(firstNumber, secondNumber, operator);
        }
    }
}

function clearDisplay () {
    inputDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}
