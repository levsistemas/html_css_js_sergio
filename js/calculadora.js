let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

document.getElementById('btn1').addEventListener('click', () => appendNumber('1'));
document.getElementById('btn2').addEventListener('click', () => appendNumber('2'));
document.getElementById('btn3').addEventListener('click', () => appendNumber('3'));
document.getElementById('btn4').addEventListener('click', () => appendNumber('4'));
document.getElementById('btn5').addEventListener('click', () => appendNumber('5'));
document.getElementById('btn6').addEventListener('click', () => appendNumber('6'));
document.getElementById('btn7').addEventListener('click', () => appendNumber('7'));
document.getElementById('btn8').addEventListener('click', () => appendNumber('8'));
document.getElementById('btn9').addEventListener('click', () => appendNumber('9'));
document.getElementById('btn0').addEventListener('click', () => appendNumber('0'));

document.getElementById('btnAdd').addEventListener('click', () => setOperation('+'));
document.getElementById('btnSubtract').addEventListener('click', () => setOperation('-'));
document.getElementById('btnMultiply').addEventListener('click', () => setOperation('*'));
document.getElementById('btnDivide').addEventListener('click', () => setOperation('/'));

document.getElementById('btnEqual').addEventListener('click', calculate);
document.getElementById('btnClear').addEventListener('click', clearDisplay);

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    firstOperand = display.value;
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}