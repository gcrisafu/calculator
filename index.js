const buttons = document.getElementsByClassName("num");
const display = document.querySelector("h1")
const operators = document.getElementsByClassName("op")

let valueOne = 0
let valueTwo = 0
let currentOperator = ""
let arr = [];
let value = 0;

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (e) => {
    const htmlContent = e.target.innerText;
    storeValue(htmlContent)
  });
});

Array.from(operators).forEach(button => {
    button.addEventListener("click", (e) => {
    const operator = e.target.innerText; 
    // get the clicked button’s content
    if (operator === "="){
    valueTwo = value
      const result = operate(valueOne, valueTwo, currentOperator);
      display.innerText = result;
      // reset for next operation
      valueOne = result;
      arr = [];
      value = result;
    } else {
        if (valueOne !== 0 && arr.length > 0){
      // When an operator (+,-,*,/) is pressed
      valueTwo = value;
      const result = operate(valueOne, valueTwo, currentOperator);
      valueOne = result
      display.innerText = result
      } else {
        valueOne = value
      }

      currentOperator = operator;
      arr = [];
      value = 0;
      display.innerText = `${valueOne} ${currentOperator}`
    }
  });
});



const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  arr = [];
  valueOne = 0;
  valueTwo = 0;
  value = 0;
  currentOperator = "";
  display.innerText = "";
});


function storeValue(num){
    arr.push(num);
    const result = parseFloat(arr.join(''));
    display.innerText = result
    value = result
}

function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    if (b === 0) return "Error";
    return a / b;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+": return add(num1, num2);
    case "-": return subtract(num1, num2);
    case "*": return multiply(num1, num2); // adjust symbol if needed
    case "/": return divide(num1, num2);
    default: return num2;
  }
}


