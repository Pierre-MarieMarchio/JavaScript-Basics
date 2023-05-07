
function add(num1, num2) {
    return num1 + num2;
};

function sub(num1, num2) { 
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    var operator = operator(num1, num2);
    console.log(operator)
}

calculator(12,2, mult);
calculator(35,4, div);
calculator(458,45, add);
calculator(54,12, sub);