// Main variables
let a = 0;
let b = 0;
let c = 0;
let operation = "";
let op = true;

// Functions
function add(...num) {
    return b + a;
}

function subtract(...num) {
    return b - a;
}

function multiply(...num) {
    return b * a;
}

function divide(...num) {
    return b / a;
}

// Get all buttons and display
const calc = document.querySelector(".calc p");
const result = document.querySelector(".result p");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "ac") {
            a = 0;
            b = 0;
            c = 0;
            op = true;
            calc.innerText = a;
            result.innerText = c
        } else if (button.classList.contains("num")) {
            a = a * 10 + Number(button.innerText);
            calc.innerText = a;
        } else if (button.classList.contains("operator")) {
            if (op) {
                operation = button.innerText;
                b = a;
                a = 0;
                calc.innerText = operation;
                op = false;
            }
        } else if (button.id == "equal") {
            switch (operation) {
                case "+":
                    c = add(a,b);
                    break;
                case "-":
                    c = subtract(a,b);
                    break;
                case "*":
                    c = multiply(a,b);
                    break;
                case "÷":
                    c = divide(a,b);
                    break;
                default:
                    c = a;
            }
            a = c;
            op = true;
            result.innerText = c
            c = 0;
            b = 0;
        } else if (button.id == "del") {
            a = Math.floor(a / 10);
            calc.innerText = a;
        }
    });
});
