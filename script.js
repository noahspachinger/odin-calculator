//basic math funtions
function addition(number1, number2) {
    return +(Math.round(number1 + number2 + "e+2")  + "e-2");
}

function subtraction(number1, number2) {
    return +(Math.round(number1 - number2 + "e+2")  + "e-2");
}

function multiplication(number1, number2) {
    return +(Math.round(number1 * number2 + "e+2")  + "e-2");
}

function division(number1, number2) {
    //error if divsion by 0
    if (number2 == 0) {
        alert("You can't divide by 0");
        clear();
        return;
    }
    return +(Math.round(number1 / number2 + "e+2")  + "e-2");
}

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

//clear button, that resets the calculator
document.getElementById("clear").addEventListener('click', () => clear())

function clear() {
    displayValue = "";
    document.getElementById("display").textContent = displayValue;
    value1 = "";
    value2 = "";
    operator = "";
    document.getElementById("subtraction").style.backgroundColor = "";
    document.getElementById("multiplication").style.backgroundColor = "";
    document.getElementById("division").style.backgroundColor = "";
    document.getElementById("addition").style.backgroundColor = "";
    number1 = "";
    number2= "";
}

//variable declaration
let value1 = "";
let value2 = "";
let operator = "";

document.getElementById("addition").addEventListener('click', () => {
    //highlight button
    document.getElementById("addition").style.backgroundColor = "darkgrey";

    //reset other buttons to default
    document.getElementById("subtraction").style.backgroundColor = "";
    document.getElementById("multiplication").style.backgroundColor = "";
    document.getElementById("division").style.backgroundColor = "";

    //store the value
    if (value1 == "") {
        value1 = parseInt(displayValue);
        displayValue = "";
    }

    else if (value1 != "") {
        if (displayValue == "") {
            operator = "addition";
            return;
        }
        value2 = parseInt(displayValue);
        displayValue = "";
    }

    //call operate function
    if (operator == "") {
        operator = "addition";
    }

    else if (operator != "") {
        displayValue = operate(operator, value1, value2);
        document.getElementById("display").textContent = displayValue;
        if (displayValue != undefined) {
        value1 = parseInt(displayValue);
        }
        value2 = "";
        displayValue = "";
        operator = "addition";
    }
})

document.getElementById("subtraction").addEventListener('click', () => {
    //highlight button
    document.getElementById("subtraction").style.backgroundColor = "darkgrey";

    //reset other buttons to default
    document.getElementById("addition").style.backgroundColor = "";
    document.getElementById("multiplication").style.backgroundColor = "";
    document.getElementById("division").style.backgroundColor = "";

    //store the value
    if (value1 == "") {
        value1 = parseInt(displayValue);
        displayValue = "";
    }

    else if (value1 != "") {
        if (displayValue == "") {
            operator = "subtraction";
            return;
        }
        value2 = parseInt(displayValue);
        displayValue = "";
    }

    //call operate function
    if (operator == "") {
        operator = "subtraction";
    }

    else if (operator != "") {
        displayValue = operate(operator, value1, value2);
        document.getElementById("display").textContent = displayValue;
        if (displayValue != undefined) {
            value1 = parseInt(displayValue);
            }
        value2 = "";
        displayValue = "";
        operator = "subtraction";
    }
})

document.getElementById("multiplication").addEventListener('click', () => {
    //highlight button
    document.getElementById("multiplication").style.backgroundColor = "darkgrey";

    //reset other buttons to default
    document.getElementById("addition").style.backgroundColor = "";
    document.getElementById("subtraction").style.backgroundColor = "";
    document.getElementById("division").style.backgroundColor = "";

    //store the value
    if (value1 == "") {
        value1 = parseInt(displayValue);
        displayValue = "";
    }

    else if (value1 != "") {
        if (displayValue == "") {
            operator = "multiplication";
            return;
        }
        value2 = parseInt(displayValue);
        displayValue = "";
    }

    //call operate function
    if (operator == "") {
        operator = "multiplication";
    }

    else if (operator != "") {
        displayValue = operate(operator, value1, value2);
        document.getElementById("display").textContent = displayValue;
        if (displayValue != undefined) {
            value1 = parseInt(displayValue);
            }
        value2 = "";
        displayValue = "";
        operator = "multiplication";
    }
})

document.getElementById("division").addEventListener('click', () => {
    //highlight button
    document.getElementById("division").style.backgroundColor = "darkgrey";

    //reset other buttons to default
    document.getElementById("addition").style.backgroundColor = "";
    document.getElementById("multiplication").style.backgroundColor = "";
    document.getElementById("subtraction").style.backgroundColor = "";

    //store the value
    if (value1 == "") {
        value1 = parseInt(displayValue);
        displayValue = "";
    }

    else if (value1 != "") {
        if (displayValue == "") {
            operator = "division";
            return;
        }
        value2 = parseInt(displayValue);
        displayValue = "";
    }

    //call operate function
    if (operator == "") {
        operator = "division";
    }

    else if (operator != "") {
        displayValue = operate(operator, value1, value2);
        document.getElementById("display").textContent = displayValue;
        if (displayValue != undefined) {
            value1 = parseInt(displayValue);
            }
        value2 = "";
        displayValue = "";
        operator = "division";
    }
})

//equal button
document.getElementById("equal").addEventListener('click', () => {
    if(value1 == "") {
        alert("You have to type in something");
        return;
    }
    
    if(operator == "") {
        alert("You have to type in something");
        return;
    }

    value2 = parseInt(displayValue);
    if (isNaN(value2)) {
        alert("You have to type in something");
        return;
    }

    displayValue = operate(operator, value1, value2);
    document.getElementById("display").textContent = displayValue;
    value1 = displayValue;
    value2 = "";
    operator = "";
    document.getElementById("subtraction").style.backgroundColor = "";
    document.getElementById("multiplication").style.backgroundColor = "";
    document.getElementById("division").style.backgroundColor = "";
    document.getElementById("addition").style.backgroundColor = "";
})