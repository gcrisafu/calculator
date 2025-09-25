const buttons = document.getElementsByClassName("num");
const display = document.querySelector("h1")
const operators = document.getElementsByClassName("op")
let valueOne = 0
let valueTwo = 0

let arr = [];
let arrTwo = [];

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (e) => {
    const htmlContent = e.target.innerText; // get the clicked button’s content
    arr.push(htmlContent);
    const result = parseInt(arr.join(''));
    display.innerText = result
    valueOne = result
    console.log(valueOne)
  });
});

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
arr = [];
display.innerText = ""
})

Array.from(operators).forEach(button => {
    button.addEventListener("click", (e) => {
    const htmlContent = e.target.innerText; // get the clicked button’s content
    display.innerText = 0 
    arrTwo.push(htmlContent)
    const result = parseInt(arrTwo.join(''));
    if (htmlContent === `+`){
        
        // not sure on the stuff below this comment

        }
        //  above this
 
    });
});






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
    return a / b;
}

function operate (num1, num2, operator){
    let a = num1
    let b = num2
    if (operator === "+"){
        console.log(add(a, b));     
    }
}
