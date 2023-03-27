/*
 * Implement all your JavaScript in this file!
 */
let display = document.getElementById("display"); // the calculator display
let output = document.getElementById("output"); // used for writing debug messages
let operand1 = null; // 1st operand
let operand2 = null; // 2nd operand
let operator = null; // operator
// event listener used for digit buttons
for (let i = 0; i < 10; i++) {
    let button = document.getElementById("button" + i);
    button.addEventListener("click", function() {
      handleDigit(i);
    });
  }
  
  // event listener used for operator buttons
  let addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function() {
    handleOperator("+");
  });
  
  let subtractButton = document.getElementById("subtractButton");
  subtractButton.addEventListener("click", function() {
    handleOperator("-");
  });
  
  let multiplyButton = document.getElementById("multiplyButton");
  multiplyButton.addEventListener("click", function() {
    handleOperator("*");
  });
  
  let divideButton = document.getElementById("divideButton");
  divideButton.addEventListener("click", function() {
    handleOperator("/");
  });
  
  // event listener used for clear button
  let clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", function() {
    clear();
  });
  
  // event listener used for equals button
  let equalsButton = document.getElementById("equalsButton");
  equalsButton.addEventListener("click", function() {
    calculate();
  });
  function handleDigit(digit) {
    display.value += digit;
  }
  function handleOperator(op) {
    operand1 = parseFloat(display.value);
    operator = op;
    display.value = "";
  }
  function clear() {
    operand1 = null;
    operand2 = null;
    operator = null;
    display.value = "";
  }
  function calculate() {
    operand2 = parseFloat(display.value);
    let result;
  
    switch(operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        result = operand2;
    }
  
    display.value = result;
    operand1 = null;
    operand2 = null;
    operator = null;
  } 
