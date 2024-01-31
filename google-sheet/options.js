const activeCellElement = document.querySelector(".selected-cell");
const form = document.getElementById("options-form"); // <form></form>
const expressionInput = document.getElementById("expression");

// selectedCell => points to the html element which is focused.
let selectedCell = null;
const state = {};

const defaultState = {
    innerText: "",
    isBold: false,
    align: "left",
    isUnderlined: false,
    isItalic: false,
    fontSize: "16",
    fontFamily: "Sans Serif",
    textColor: "#000000",
    backgroundColor: "#ffffff"
}

/**
 * state = {
 *     C5: {
 *         innerText: "Aravind",
 *         isBold: true,
 *         align: "center",
 *         isUnderlined: false,
 *         isItalic: true,
 *         fontSize: "16",
 *         fontFamily: "Sans Serif",
 *         textColor: "#d78",
 *         backgroundColor: "#000"
 *     }
 * }
 * 
 * For every cell the data in the state object should get updated upon every form change & innerText change
 */

function applyCellInfoToForm() {
    // this function will sync the options inside form with the actual data of cell.

    if (state[selectedCell.id]) {
        // Already edited cell
        const data = state[selectedCell.id];
        for (let key in data) {
            // key = "isBold"
            // form["isBold"] => <input type="checkbox" />
            if (form[key].type === "checkbox") {
                form[key].checked = data[key]; // data["isBold"] => true | false
            }
            else form[key].value = data[key];
        }
    }
    else {
        // Focused for the first time.
        form.reset();
    }
}

function onChangeInnerText() {
    if (state[selectedCell.id]) {
        // already if it's data is present inside the state object
        state[selectedCell.id].innerText = selectedCell.innerText;
    }
    else {
        // if it's for the first time
        state[selectedCell.id] = { ...defaultState, innerText: selectedCell.innerText }
    }
}

function onFocusCell(e) {
    if (selectedCell) {
        selectedCell.classList.remove("active-cell");
    }
    selectedCell = e.target;
    activeCellElement.innerText = selectedCell.id;
    selectedCell.classList.add("active-cell")
    applyCellInfoToForm();
}

function applyStylesToSelectedCell(styles) {
    // takes the styles selected by user and applies to the active cell.
    selectedCell.style.fontSize = styles.fontSize + "px";
    selectedCell.style.fontFamily = styles.fontFamily;
    selectedCell.style.fontWeight = styles.isBold ? "bold" : "400";
    selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
    selectedCell.style.textDecoration = styles.isUnderlined ? "underline" : "none";
    selectedCell.style.textAlign = styles.align; // "left" | "center" | "right"
    selectedCell.style.color = styles.textColor;
    selectedCell.style.backgroundColor = styles.backgroundColor;
}

form.addEventListener("change", function () {
    if (!selectedCell) {
        alert("Please select a cell before making any change on the options");
        form.reset();
        return;
    }

    // form.fontFamily => form["fontFamily"]
    const formData = {
        fontFamily: form["fontFamily"].value,
        fontSize: form["fontSize"].value, // "18"
        isBold: form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderlined: form["isUnderlined"].checked,
        align: form["align"].value,
        textColor: form["textColor"].value,
        backgroundColor: form["backgroundColor"].value
    }

    state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };
    applyStylesToSelectedCell(formData);
});

expressionInput.addEventListener("keyup", (e) => {
    if (!selectedCell) {
        alert("Please select a cell to apply the result");
        return;
    }

    if (e.code === "Enter") {
        try {
            let expression = expressionInput.value;
            let result = eval(expression)
            selectedCell.innerText = result;
        }
        catch (error) {
            alert("Please enter a valid expression")
        }
    }
})
