
function performOperation(operator) {
    
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;

    
    a = parseFloat(a);
    b = parseFloat(b);

    
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
