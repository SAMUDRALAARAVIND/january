/*
ES6 Features :
  BigInt
  Symbol

Timers ( setTimeout , setInterval ):
*/

// number => 8bytes of memory
// 8Bytes = 64 Bits 
// 2^64 - 1 

// 9007199254740992

// 2^63 - 1 => 9223372036854775807
// let n = 9223372036854775807;
// console.log(n + 2);
// 9223372036854775807 + 7 => 9223372036854775814


// let n = 9223372036854775807n;
// // bingint literal
// console.log(n + 2n);
// Number()
// String()
// Boolean()
// long => 8bytes  => 2^63 - 1

// number => all type of numbers 
// maximum size BigInt => 128Bits
// let n = BigInt("38399330030303");
// console.log(n);

// size of number data type in js is 64 bits | 8Bytes
// 9.34
// 2^53 - 1 => maximum safest integer

// let n1 = 293020;
// let n2 = 39493040303403003n;

// console.log(BigInt(n1) + n2); // Error: 




// Symbol data types

// let o1 = { a: 10 }; // #100 
// let o2 = { a: 10 }; // #200

// console.log(o1 === o2); // false

// let x = Symbol("a");
// let y = Symbol("a");
// console.log(x === y); // false

// all the keys in object are converted into strings

let o1 = {};
let o2 = { name: "ajdjdj" };
// String(o1) , String(o2) => "[object Object]"

// let obj = {
//     ["aravind"]: 29303,
//     10: 33883,
//     undefined: 399302,
//     [undefined]: 83993,
//     [true]: 3993,
//     true: 3939,

//     [o1]: "aravind",
//     [o2]: "rajesh"
// }

// console.log(obj.o1);
// console.log(obj);

// let s1 = Symbol(o1);
// let s2 = Symbol(o2);

// console.log(s1 === s2);

//             1029     ===   3892
// let k1 = Symbol("a");
// let k2 = Symbol("a");
// // k1 !== k2 

// let user = {
//     [k1]: "Aravind",
//     [k2]: "Rajesh"
// };
// console.log(user[k1]); // aravind
// console.log(user[Symbol("a")]); // undefined


// let key = "name";
// let x = {
//     [key]: 10
// }
// console.log(x);


// function getObject() {
//     let s;
//     s = Symbol("age");
//     return {
//         name: "aravind",
//         [s]: 22
//     }
// }

// let x = getObject();

// // age + 5
// console.log(x[Symbol("age")] + 5) // NaN

// // symbols are by default not enumarable properties in objects
// for (let k in x) {
//     console.log(k);
// }

// let obj = {}; // #479494004
// console.log(obj);

// let s = Symbol("age"); // #38494994
// let s2 = Symbol("name");
// console.log(s, s2);


// event loop, callback queue
// Timers : setTimeout, setInterval <=> clearTimeout, clerInterval


// setTimeout returns a number ( timeoutId )
// setTimeout takes 2 paramters 1(mandatory) , 2(optional)

// let f = function () {
//     console.log("inside callback");
// };
// // 1000ms => 1s
// console.log("before setTimeout");
// // setTimeout registers the callback function for about 2300ms
// let id = setTimeout(f, 20); // 2.3s
// console.log("after setTimeout");



// let aravind = function () {
//     console.log("Aravind");
// }

// let rahul = function () {
//     console.log("Rahul");
// }

// let vishal = function () {
//     console.log("Vishal");
// }

// console.log("Amit started working", "10:00AM");
// setTimeout(vishal, 5000); // after 5 sec vishal will be registered
// setTimeout(aravind, 1000); // after 1 sec aravind will be registered
// setTimeout(rahul, 3000); // after 3sec rahul will be registered
// console.log(2);

// console.log(0);
// setTimeout(() => { // #400
//     console.log(1);
// }, 1000)
// console.log(2);
// for (let i = 0; i < 5e9; i++) {
//     // 10e8 => 10 * 10^8 => 10^9
//     // 3.8 seconds
// }
// console.log(3);

/**
 * output:
 * 0
 * 2
 * 3
 * 1
 */
// Callback queue = [  #400  ]

// we can terminate the execution of registered function when it is with schedular (  not entered into the callback queue) ;

// let timerId = setTimeout(() => {
//     console.log("aravind");
// }, 1000)

// console.log("clearing the timeout");
// clearTimeout(timerId);

// let count = 0;
// let timerId = setInterval(() => {
//     console.log(++count);
// }, 1000);

// setTimeout(() => {
//     console.log("clearing the interval");
//     clearInterval(timerId);
// }, 3000)

// const timerText = document.getElementById("timer");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// let count = 0;
// let timerId;

// start.addEventListener("click", () => {
//     timerId = setInterval(() => {
//         timerText.innerText = ++count;
//     }, 1000)
// });

// stop.addEventListener("click", () => {
//     console.log("clearing the timer");
//     (typeof timerId === "number") ? clearInterval(timerId) : alert("please start timer")
//     timerId = undefined;

// })



// Create a timer for showing reamining time for release of a video 
// I am release a video on Feb 05th 2024 6:30PM IST 

// const releaseDate = new Date(2024, 1, 5, 18, 30, 0, 0);
// const element = document.getElementById("remaining-time");
// const stopBtn = document.getElementById("stop-timer");

// function findDifference(instance) {
//     // returns the string, difference b/w instance and releaseDate
//     let secondsGap = (releaseDate - instance) / 1000;
//     let days = parseInt(secondsGap / (24 * 60 * 60));
//     secondsGap = secondsGap - (days * 24 * 60 * 60);
//     let hrs = parseInt(secondsGap / (60 * 60));
//     secondsGap = secondsGap - (hrs * 60 * 60);
//     let mins = parseInt(secondsGap / 60);
//     secondsGap = secondsGap - (mins * 60);
//     return `${days} Days : ${hrs} Hours : ${mins} Mins : ${parseInt(secondsGap)} seconds`
//     // `3 Days : 4hrs : 32 mins: 20 second`
// }

// function updateTime() {
//     let currentTime = new Date();
//     element.innerText = findDifference(currentTime);
// }

// let id = setInterval(updateTime, 1000);

// stopBtn.addEventListener("click", () => {
//     clearInterval(id);
// });