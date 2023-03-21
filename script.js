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