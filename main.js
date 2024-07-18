// Main variables
let a = 0;
let b = 0;
let c = 0;
let operation = "";

// Get all buttons and display
const calc = document.querySelector(".calc p");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "ac") {
            a = 0;
            b = 0;
            c = 0;
            calc.innerText = b;
        } else if (button.classList.contains("num")){
            a = a * 10 + Number(button.innerText);
            b = a
            calc.innerText = b;
        }
    });
});
