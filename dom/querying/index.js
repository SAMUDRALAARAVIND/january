// extract the bold elemnt object from the DOM tree 

/**
 * 1. getElementById(elementId) => returns an HTML element | null
 * 2. getElementsByTagName(tagName) => returns an array like data structure => HTMLCollection of html element object
 * 3. getElementsByClassName(className) => returns HTMLCollection of all the found elements.
 *
 * 4. querySelector(cssSelector) => returns a single html element
 * 5. querySelectorAll(cssSelector) => returns all html elements which are match with the passed selector.
 */

// let boldElement = document.getElementById("name");
// console.log({ x: boldElement });
// console.log(boldElement);

/**
 * For every HTML element:
 *
 *  tagName: "B" ,
 *  children: [] ,
 *  innerText: "Aravind",
 *  className: "username",
 *  parentElement: Another HTML element object,
 *  draggable: false
 */

// let boldElements = document.getElementsByTagName("b");
// console.log(boldElements);

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);


// let e = document.querySelector("#container > p + b");
// console.log(e);


// let elements = document.querySelectorAll("#container > p + b");
// console.log(elements);




/*
 Seat Booking

// 1. how to create HTML element dynamically onto UI.
// 2. how to manipulate the classnames of html elements dynamically
// 3. How to handle the click event


// booked seat => gray (default)
// female booked => pink
// highlight => green

// Seat
{
    seatName: "A3",
    price: 3000,
    isBooked: true | false,
    gender: null | "male" | "female",
}
*/

// const btn = document.getElementById("btn");


// classList => just an array representation of className

/**
 *
 * classList
 *
 * add
 */

// 'red-btn active-btn abc mno xyz'
// classList.add(c1, c2, c3 ...)
// classList.remove(c1, c2, c3 ...)
// classList.contains(c1) => boolean
// toggle => if class present removes it else adds it.


// const buttons = document.getElementsByTagName("button");
// buttons[0].classList.add("primary");
// buttons[1].classList.add("danger");


// function callme(button) {
//     // button.id = "test";
//     // button.classList.toggle("danger");
//     button.draggable = !button.draggable;
// }


// function createBoldElement() {
//     // step 1: create bold elemnt 
//     const bold = document.createElement("b");
//     bold.innerText = "Aravind Samudrala";

//     // step 2: attach that bold element inside #container 
//     const container = document.getElementById("container");
//     container.appendChild(bold);
// }

const students = [
    {
        name: "Rajesh",
        age: 22,
    },
    {
        name: "Anurag",
        age: 20
    },
    {
        name: "Harshal",
        age: 23
    },
    {
        name: "Rahul Kumar",
        age: 30
    }
]

/**
 * <div class="card">
 *  <span>{}</span>
 *  <span>{}</span>
 * </div>
 */


// const container = document.querySelector("#container");
// function createStudents() {
//     students.forEach(student => {
//         const card = document.createElement("div");
//         // <div></div>
//         // card.className=  "card"
//         card.classList.add("card");
//         // <div class="card"></div>

//         const name = document.createElement("span"); // className: ""
//         name.innerText = student.name;
//         // <span>Aravind Smaudrala</span>

//         const age = document.createElement("span");
//         age.innerText = student.age;
//         // <span>23</span>

//         card.append(name, age);
//         /**
//          * <div class="card">
//          *  <span>Aravind Smaudrala</span>
//          *  <span>23</span>
//          * </div>
//          */

//         container.appendChild(card)
//     })
// }

// function createUser() {
//     return {
//         name: null,
//         age: null,
//         rollNumber: null,
//         className: ''
//     }
// }

// let u1 = createUser();

// u1.name = "Aravind";
// console.log(u1);

// let x = { name: "aravind" }, x = { name: "aravind" };
// console.log(x === y); // false