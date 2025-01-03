function calculate() {
    const operation = document.getElementById('operation').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    if (operation === '1') {
        result = num1 + num2;
    } else if (operation === '2') {
        result = num1 - num2;
    } else if (operation === '3') {
        if (num2 === 0) {
            resultElement.textContent = "Division by zero is not allowed.";
            return;
        }
        result = num1 / num2;
    } else if (operation === '4') {
        result = num1 * num2;
    } else {
        resultElement.textContent = "Invalid operation selected.";
        return;
    }

    resultElement.textContent = `Result: ${result}`; // Fixed the interpolation issue
}
