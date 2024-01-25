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

const employees = {};

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
    // every row will get a unique id
    record.id = employee.id;
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

    employees[employee.id] = employee;
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


/**
 * const employees = { 
 *      "1" : { 
 *              name: "Aravind",
 *              email: "aravind@gmail.com",
 *              gender: "Male",
 *              role: "Product"
 *         }
 * }
 */

const updateModal = document.getElementById("modal1");
const updateForm = document.getElementById("form1");

// this variable holds the editing employee's id.
let editingEmployeeId = null;

function toggleUpdateModal() {
    updateModal.classList.toggle("hide-modal");
    updateModal.classList.toggle("show-modal");
}

// takes an employee object and fills that data inside the updateForm
function prefillData(employee) {
    /**
     *  {
     *      id: "",
     *      name: "",
     *      email: "",
     *      role: "",
     *      
     *  }
     */
    for (let property in employee) {
        updateForm[property] && (updateForm[property].value = employee[property])
    }
}

function editRecord(e) {
    const empId = e.target.parentNode.parentNode.id;
    editingEmployeeId = empId;
    toggleUpdateModal();
    prefillData(employees[empId])
}

updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // update the emloyee data

    // collect the updated information from form.
    const updatedInfo = {
        name: updateForm.name.value,
        email: updateForm.email.value,
        id: editingEmployeeId,
        role: updateForm.role.value,
        doj: updateForm.doj.value,
        gender: updateForm.gender.value,
    };

    employees[editingEmployeeId] = updatedInfo;

    // before closing the form reset it's data
    updateForm.reset();

    // close the update popup
    toggleUpdateModal();

    // update the tr with the new data ? which tr needs to be updated ??
    const record = document.getElementById(editingEmployeeId);
    /**
     * <tr id="1">
     *          <td>Aravind Samudrala</td>
     *          <td>samudralaaravind1708@gmail.com</td>
     *          <td>1</td>
     *          <td>Product</td>
     *          <td>2024-01-15</td>
     *          <td>male</td>
     *          <td>
     *              <button class="material-icons">edit</button>
     *              <button class="material-icons">delete</button>
     *          </td>
     * </tr>
     */
    let tdCellIndex = 0;
    for (let property in updatedInfo) {
        // property = "name", tdCellIndex = 0
        record.children[tdCellIndex++].innerText = updatedInfo[property];
    }
})