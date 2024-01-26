const box = document.querySelector(".box");
const container = document.querySelector(".container");

// Adding dragstart , dragend events to box 
box.addEventListener("dragstart", () => {
    console.log("dragging started");
})

box.addEventListener("dragend", () => {
    console.log("dragging ended");
})


// adding dragenter , dragover, dragleave & drop events to container 

container.addEventListener("dragenter", () => {
    console.log("some dragged element entered the container");
})

container.addEventListener("dragleave", () => {
    console.log("some dragged element left the container");
})

container.addEventListener("dragover", (event) => {
    // by default dragover will not allow the drop event to trigger even if the element is dropped.

    // preventing the default behaviour will enable the drop event.
    event.preventDefault();
    console.log("some dragged element on top of the container");
})


// by default the drop event will be prevented by dragover event
container.addEventListener("drop", () => {
    console.log("Some dragged element is dropped on the container");
    container.appendChild(box);
})