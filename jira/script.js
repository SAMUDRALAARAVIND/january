const form = document.getElementById("create-task-form");
const modal = document.getElementById("modal");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskStatus = form.status.value; // "TODO" | "INPROGRESS" | "DONE" 

    const taskInfo = {
        title: form.title.value,
        description: form.description.value,
        developer: form.developer.value,
        estimate: form.estimate.value,
    }

    /**
     * <div class="task-card" title="This is a dummy task">
          <h3>Chat Box</h3>
          <div>
            <span class="badge">3 days</span>
            <span class="image">S</span>
          </div>
        </div>
     */

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.title = taskInfo.description;

    taskCard.innerHTML = `
        <h3>${taskInfo.title}</h3>
          <div>
            <span class="badge">${taskInfo.estimate} Days</span>
            <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
          </div>
        `;

    const taskContainer = document.getElementById(taskStatus);
    taskContainer.appendChild(taskCard);

})

function toggleModal(element) {
    modal.classList.toggle("hide-modal");

    // when hide-modal is present the innerText of icon = expand_less else : expand_more
    element.innerText = modal.classList.contains("hide-modal") ? "expand_less" : "expand_more";
}