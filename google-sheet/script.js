const headRow = document.getElementById("head-row")
const sno = document.getElementById("sno");
const body = document.getElementById("body");

const rows = 100, columns = 26;

for (let i = 1; i < columns + 1; i++) {
    const headCell = document.createElement("div");
    if (i >= 1) {
        headCell.innerText = String.fromCharCode(i + 64); // "A" => 65
        headCell.className = "col-head";
    }
    headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
    const snoCell = document.createElement("div");
    snoCell.innerText = i + 1;
    snoCell.className = "sno-cell";
    sno.appendChild(snoCell);
}

for (let i = 1; i <= rows; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= columns; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.contentEditable = true;
        cell.id = `${String.fromCharCode(j + 64)}${i}`;

        cell.addEventListener("focus", onFocusCell);
        cell.addEventListener("input", onChangeInnerText)
        row.appendChild(cell);
    }

    body.appendChild(row)
}