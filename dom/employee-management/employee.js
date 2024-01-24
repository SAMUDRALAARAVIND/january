/**
 * Every employee can have the below properties: 
 * {
 *   name: "",
 *   email: "",
 *   id: unique_integer,
 *   role: "",
 *   DOJ: "",
 *   gender: "" // "MALE", "FEMALE", "OTHERES"
 * }
 */

const modalToggleButton = document.getElementById("modal-toggle-btn");
const modal = document.getElementById("modal");
const closeIcon = document.getElementById("close-icon");
const form = document.getElementById("form");

const tableBody = document.querySelector("#employee-list > tbody");

let inc = 1;
function getNewId() {
    return inc++;
}

function toggleModal() {
    modal.classList.toggle("hide-modal");
    modal.classList.toggle("show-modal");
}

function editRecord(e) {
    // e.target = <button class="material-icons">edit</button>
    console.log("edit record", e.target)
}

function deleteRecord(e) {
    // parentNode of deleteButton is => td => td.parentNode => tr
    const deleteButton = e.target;
    const td = deleteButton.parentNode; // td element
    const tr = td.parentNode; // table row
    tr.remove(); // <button class="material-icons">delete</button>
}

function createNewEmployeeRecord(employee) {
    // it takes the employee info ( object ) and create a new row inside tbody

    // record = <tr></tr>
    const record = document.createElement("tr");
    for (let key in employee) {
        const cell = document.createElement("td");
        cell.innerText = employee[key];
        record.appendChild(cell);
    }

    const options = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.className = "material-icons";
    editButton.addEventListener("click", editRecord)

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.className = "material-icons";
    deleteButton.addEventListener("click", deleteRecord);

    options.append(editButton, deleteButton);

    record.appendChild(options);

    tableBody.appendChild(record);
}

modalToggleButton.addEventListener("click", toggleModal)
closeIcon.addEventListener("click", toggleModal);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const employee = {
        name: form.fullName.value,
        email: form.email.value,
        id: getNewId(),
        role: form.role.value,
        doj: form.doj.value,
        gender: form.gender.value,
    };

    // create a new record and add it to the table
    createNewEmployeeRecord(employee);

    // resets the form to empty values
    form.reset();
    // closes the modal ( toggles the modal )
    toggleModal();
})



/**
 * HOMEWORK: 
 * 
 *  upon clicking on the edit open a editor popup that container an update form
 *  that popup's input feilds should be prefilled with the data of the employee
 *  upon submitting the edit popup, the record table should be updated with new data.
 */