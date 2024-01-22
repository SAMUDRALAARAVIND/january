/**
 * Events a user can make on a website :
 *  click
 *  doubleclick
 *  submit
 *  keyboard events
 *  dragging
 *  change, zoom in
 *  scroll
 *  reset 
 *  drawing => (mousedown, mousemove, mouseup )
 *  focus 
 *  blur
 * 
 * 
 * custom events
 */

const [span] = document.getElementsByTagName("span");  // []

// Event handler => is function which will be triggered/executed upon making that event

// addEventListener => takes minimum of 2 parameters i. event type , ii. event listener/callback

/**
 * Advantages of adding event listeners from javascript instead of inside HTML:
 *  1) Clean code
 *  2) Any number of event listeners we can add.
 *  3) We can remove any event listener dynamically.( by using removeEventListener )
 *  4) we get the event object ( gives details about the event ).
 *
 * Event Object
 */

// let listener1 = function (event) {
//     console.log(event);
//     console.log("click listener 1");
// };

// let listener2 = function (event) {
//     console.log(event);
//     console.log("click listener 2");
// };

// span.addEventListener("click", listener1);
// span.addEventListener("click", listener2);



// input events 
const input = document.querySelector("input");


// input.addEventListener("focus", () => {
//     console.log("focused on the input");
// })

// input.addEventListener("blur", () => {
//     console.log("blurred the input");
// })

// input.addEventListener("input", () => {
//     console.log("entered something");
// })
// input.addEventListener("change", () => {
//     // triggers when there's a chnage of value of an input before focusing and after blurring
//     console.log("changed value of input");
// })

// keyboard events on input element


const students = [
    "Rajesh",
    "Praveen",
    "Nikhil",
    "Manoj",
    "Rahul",
    "Adavi Sesh",
    "Ansari",
    "Sonu",
    "Javed Shahzeb",
    "Riya"
];

const namesContainer = document.getElementById("names-container");

input.addEventListener("change", (event) => {
    // "r"
    // "ra"
    namesContainer.innerHTML = "";

    let searchedValue = event.target.value.toLowerCase();


    students.forEach((student) => {
        if (student.toLowerCase().includes(searchedValue)) {
            const para = document.createElement("p");
            para.innerText = student;

            namesContainer.appendChild(para);
        }
    })
})




const test = document.querySelector("#test")
console.log({ innerText: test.innerText });
console.log({ innerHTML: test.innerHTML });
console.log({ textContent: test.textContent });