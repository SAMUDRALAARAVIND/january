const body = document.body;
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector(".btn");

// By default all the events are added for the bubbling phase only 

// body.addEventListener("click", () => {
//     console.log("body click listener");
// }, false);

// output: 1, 2, 5, 4, 3


// event.stopPropagation => event will not be propagated to another HTML element
//  event.stopImmediatePropagation => stops the propagation immediately

parent.addEventListener("click", (event) => {
    event.stopPropagation()
    // event.stopImmediatePropagation();
    console.log(1);
}, true);

parent.addEventListener("click", (event) => {
    console.log(2);
}, true);

parent.addEventListener("click", (event) => {
    console.log(3);
}, false);

child.addEventListener("click", (event) => {
    console.log(4);
});

// child.addEventListener("click", (event) => {
//     console.log(5);
// }, false);


// child.addEventListener("click", (event) => {
//     console.log(6);
// }, true);


