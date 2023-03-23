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
document.getElementById("zero").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("0"));
})

document.getElementById("one").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("1"));
})

document.getElementById("two").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("2"));
})

document.getElementById("three").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("3"));
})

document.getElementById("four").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("4"));
})

document.getElementById("five").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("5"));
})

document.getElementById("six").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("6"));
})

document.getElementById("seven").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("7"));
})

document.getElementById("eight").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("8"));
})

document.getElementById("nine").addEventListener('click', () => {
    document.getElementById("display").appendChild(document.createTextNode("9"));
})