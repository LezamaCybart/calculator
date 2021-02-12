// operation
function add (firstNumber, secondNumber ) {
    return firstNumber + secondNumber;
}

function substract (firstNumber, secondNumber ) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber ) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber ) {
    return firstNumber / secondNumber;
}

// operate button
function operate ( firstNumber, secondNumber, operator ) {
    return (operator(firstNumber, secondNumber));
}