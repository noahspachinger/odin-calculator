//basic math funtions
function addition(number1, number2) {
    return number1 + number2;
}

function subtraction(number1, number2) {
    return number1 - number2
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

/*let number1 = 1;
let number2 = 1;
let operator;*/

//executes the math functions
function operate(operator, number1, number2) {
    if (operator == "addition") {
        return addition(number1, number2);
    }
    else if(operator == "subtraction") {
        return subtraction(number1, number2);
    }
    else if(operator == "multiplication") {
        return multiplication(number1, number2);
    }
    else if(operator == "division") {
        return division(number1, number2);
    }
}



//Eventlisteners to make the values of the buttons appear on the display
let displayValue = "";

document.getElementById("zero").addEventListener('click', () => {
    displayValue = displayValue + "0";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("one").addEventListener('click', () => {
    displayValue = displayValue + "1";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("two").addEventListener('click', () => {
    displayValue = displayValue + "2";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("three").addEventListener('click', () => {
    displayValue = displayValue + "3";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("four").addEventListener('click', () => {
    displayValue = displayValue + "4";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("five").addEventListener('click', () => {
    displayValue = displayValue + "5";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("six").addEventListener('click', () => {
    displayValue = displayValue + "6";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("seven").addEventListener('click', () => {
    displayValue = displayValue + "7";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("eight").addEventListener('click', () => {
    displayValue = displayValue + "8";
    document.getElementById("display").textContent = displayValue;
})

document.getElementById("nine").addEventListener('click', () => {
    displayValue = displayValue + "9";
    document.getElementById("display").textContent = displayValue;
})

//Back Button, that removes the last characters
document.getElementById("back").addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").textContent = displayValue;
})