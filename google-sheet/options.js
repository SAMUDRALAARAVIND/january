const activeCellElement = document.querySelector(".selected-cell");
const form = document.getElementById("options-form"); // <form></form>
const expressionInput = document.getElementById("expression");

// selectedCell => points to the html element which is focused.
let selectedCell = null;

function onFocusCell(e) {
    if (selectedCell) {
        selectedCell.classList.remove("active-cell");
    }
    selectedCell = e.target;
    activeCellElement.innerText = selectedCell.id;
    selectedCell.classList.add("active-cell")
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
