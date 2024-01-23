// debugger;
// const h1 = document.querySelector("h1");
// console.log(h1.innerText);

// let loading = document.createElement("h1");
// loading.innerText = "Loading ....";

// document.body.appendChild(loading);
// debugger;
// document.addEventListener("DOMContentLoaded", () => {
//     loading.innerText = "Loaded"
// })


// Replit Asian paints
// const gridContainer = document.querySelector(".grid");
// const form = document.querySelector("#form");
// let previousSelectedElement = null;

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // inputId, color

//     let cellId = form.inputId.value; // "3"
//     let selectedColor = form.color.value; // "#fjf88"

//     // inputId = "3"
//     // selectedColor = "#e7e7e7" ;
//     let cell = document.getElementById(cellId);
//     cell.style.backgroundColor = selectedColor;
//     if (previousSelectedElement) {
//         previousSelectedElement.style.backgroundColor = "white";
//     }

//     previousSelectedElement = cell;
// });

// for (let i = 1; i <= 9; i++) {
//     const gridItem = document.createElement("div");
//     gridItem.id = i;
//     gridItem.innerText = i;
//     gridItem.className = "grid-item"
//     gridContainer.appendChild(gridItem);
// }


// OTP 
const codeContainer = document.querySelector(".code-container");
const numberOfInputs = 8;
let lastEnteredInputElement = null;

function onInput(event) {
    const currentElement = event.target;
    console.log("event triggered");
    if (currentElement.value) {
        // for doing a click/focus just call the methods click() , and focus() on that HTML element object
        // console.log("Next element", currentElement.nextElementSibling);
        // console.log("Previous Element", currentElement.previousElementSibling);
        lastEnteredInputElement = currentElement;
        currentElement.nextElementSibling && currentElement.nextElementSibling.focus();
    }
}

function onBackSpace(e) {
    // i need to know last entered input element ?
    // lastEnteredInputElement.value = "";
    // if (lastEnteredInputElement.previousElementSibling) {
    //     lastEnteredInputElement.previousElementSibling.focus();
    //     lastEnteredInputElement = lastEnteredInputElement.previousElementSibling;
    // }
    // else {
    //     lastEnteredInputElement = null;
    // }
    e.target.value = "";
    e.target.previousElementSibling && e.target.previousElementSibling.focus();
}

function onEnter(e) {
    if (e.target.value) {
        e.target.nextElementSibling && e.target.nextElementSibling.focus();
    }
}

function onKeyUp(e) {
    if (e.key === "Enter") {
        onEnter(e);
    }
    else if (e.key === "Backspace") {
        onBackSpace(e);
    }
}

for (let i = 1; i <= numberOfInputs; i++) {
    const input = document.createElement("input");
    input.className = "code";
    input.maxLength = 1;

    input.addEventListener("input", onInput);
    input.addEventListener("keyup", onKeyUp);

    codeContainer.appendChild(input);
}
