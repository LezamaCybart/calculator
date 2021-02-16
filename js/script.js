// operations
function add(firstNumber, secondNumber) {
    let sum =  +firstNumber + +secondNumber;
    return(roundNumber(sum));
}

function substract(firstNumber, secondNumber) {
    let subs = firstNumber - secondNumber;
    return(roundNumber(subs));
}

function multiply(firstNumber, secondNumber) {
    let product = firstNumber * secondNumber;
    return(roundNumber(+product));
}

function divide(firstNumber, secondNumber) {
    if ( secondNumber == 0 ) {
        clearDisplay();
        alert("CAN'T DIVIDE BY 0!!");
        return;
    }
    let result = firstNumber / secondNumber;
    return(roundNumber(+result));
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
const decimalButton = document.querySelector('#decimal');
let firstNumber = "";
let secondNumber = "";
let operator = "";

function display ( value ) {
    if ( value == +value || value == "." ) {
        if ( value == "." ) {
            decimalButton.disabled = true;
        }
        if ( firstNumber == "") {
            inputDisplay.textContent += value;
        } else if ( secondNumber == "" ) {
            inputDisplay.textContent = "";
            decimalButton.disabled = false;
            inputDisplay.textContent += value;
            secondNumber = inputDisplay.textContent;
        } else {
            inputDisplay.textContent += value;
            secondNumber = inputDisplay.textContent;
        }
    } else if ( value == "clear" ) {
        clearDisplay();
    } else if ( value == "backspace" ){
        inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
    } else {
        compute(value);
    }
    checkDisplayOverflow();
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
            secondNumber = inputDisplay.textContent;
            inputDisplay.textContent = operate(firstNumber, secondNumber, operator);
        } else { 
            clearDisplay();
            alert("MISSING PARAMETERS");
        }
    }
}

function clearDisplay () {
    inputDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    decimalButton.disabled = false;
}

function checkDisplayOverflow() {
    if ( inputDisplay.textContent.length == 8 ) {
        alert("SCREEN OVERFLOW")
        clearDisplay()
    }
}



//rounding number function.
function roundNumber(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}


//keyboard support

calculator = document.querySelector('.container');

function displayKey ( event ) {

    let keyPressed = event.key;
    console.log(typeof(keyPressed));

    let button = Array.from(buttons).find(button => button.textContent === keyPressed);
    console.log(typeof(button));

    if ( typeof(button) != 'undefined' ) {
        display(button.value);
    }
}

document.addEventListener('keydown', displayKey);


