// function sum(a, b) {
//     return a + b;
// } // named function | regular function

// let result = sum(10, 20);
// console.log(result);

// Callback functions and Higher order functions

// let 1abc = 293 ;

// const printName = function (a, b, c) {
//     return a + b - c;
// };
// let r = printName(2, 3, 6); // r = 11
// console.log(r);


// arrow functions are introduceed in ES6 ( 2015 )
// let difference = a => 2 * a;

// let r = difference(10);
// console.log(r);


// Array methods shift, unshift, push, pop, slice, splice

// let nums = [10, 20, 12, 80, 13]
//          0    1   2   3   4
// 10 + 20 + 12 => 42 

// let f = function (x, i) {
//     console.log(x, i);
//     // 10  0  [10, 20, 12] 
//     // 20  1  [10, 20, 12]
//     // 12  2  [10, 20, 12]
// }
// forEach 
// forEach is used to iterate on the array.
// nums.forEach(f);

// let sum = 0; // 42
// let f = function (e, i) {
//     if (i % 2 == 0) {
//         sum = sum + e;
//     }
// }

// nums.forEach(f)
// console.log(sum);

let nums = [10, 20, 30, 40]
//          0
// map
// map method syntax is exactly same as forEach except one thing 

let f1 = function (value, idx, arr) {
    // value = 10, idx = 0, arr = [10, 20, 12]
    // console.log(value, idx, arr);
    // return 10;
};
// returned values = [undefined, undefined, iunde, und]

// forEach method doesn't return anything 
// r1 = udefined 
// let r1 = nums.forEach(f1);

// map returns another array length = source array length
let r2 = nums.map(f1);

// console.log(r1);
// console.log(r2); // [10, 21, 32, 43]





// filter 

// reduce



// function callme(a, b) {
//     // a = 10, b= undefined
//     console.log(a, b);
// }

// callme(10, 20, 30);

/*

Agenda:

 filter , reduce and sort function
 Problems on arrays

 Strings
*/


// function temp(x) {
//     /**
//      * x = 10
//      */
//     // console.log(x);
//     x(); // 10()
// }

// temp(10);

// a function passed as an argument to some other function is called as callback function.

// let arr = [10, 2, 3, 17];
// [20, 4, 6, 34]

// arr.forEach(function (e, i, l) {
//     console.log(e, i, l);
// })
// [-1, 8, 8, -5]

// let r = arr.map((e, i, l) => {
//     return i - e;
// })

// console.log(r);

// let r = arr.map(e => 2 * e)
// console.log(r);

// [10, 2, 3, 17] => even numbers => [10, 2]
// filter 
// let r = arr.filter(e =>  e % 2 == 1);
// console.log(r);



// let arr = [10, 2, 30, 12, 45];
// reduce takes two arguments 
// first => function 
// second => intial value

// the first callback function can take three parameters
// let r = arr.reduce(function (previous, current, index) {
//     console.log(previous, current, index);
//     return previous + current + index;
// }, 5);

// console.log(r); // 18

// let sum = 0;
// arr.forEach(e => {
//     sum += e;
// })
// console.log(sum);

// let r = arr.reduce((prev, e) => prev + e, 0)
// console.log(r);
let arr = [2, 3, 1, "aravind", 4, 3]
let r = arr.reduce((p, c, i) => {
    return p + c;
})
console.log(r); // 6

// 6 + "aravind" => "6aravind"

// "6aravind" + 4 => "6aravind4",

//     "6aravind4" + 3 => "6aravind43"


// Problems: 


// 1. Contains Property in an Object
// function containsProp(obj, key) {
//     // obj = , key = "age" 
//     // assume that key is not there 
//     // return Boolean(obj[key]); => will be wrong 
//     for (let i in obj) {
//         // i = "name", "college", "course"
//         if (i === key) {
//             // key is found
//             return true;
//         }
//     }
//     return false;
// }

// let r1 = containsProp({
//     name: "aravind",
//     college: "NITW",
//     course: "BTech",
//     salary: undefined
// }, "age")


// console.log(r1); // false


// Problem 2: Find nth fibonacci number

function fibonacci(n) {
    // return the nth fibonacci number .
    if (n <= 2) return n - 1;
    let a = 0, b = 1;

    // n = 3
    while (n > 2) {
        let curr = a + b;
        a = b;
        b = curr;
        n--;
    }

    return b;
}

let r1 = fibonacci(19);
console.log(r1);



function isSameType(v1, v2) {
    // v1 , v2 are always strings 

    // "10", "20" => true
    // "23", "abc" => false
    // "a" , "xyz" => true
    // "NaN", "10" => true
    // "NaN" , "abc" => 
    // "NaN" , "NaN"
}


let arr1 = [100, 20, 30, 40, 290, 12];

// arr1.sort((a, b) => { return a - b }) // incresing order 
// arr1.sort((a, b) => { return b - a }) // decreasing order

let users = [
    { name: "aravind", age: 23 },
    { name: "rajesh", age: 33 },
    { name: "Mahesh", age: 28 },
    { name: "Akhil", age: 19 }
]

// users.sort((a, b) => { return a.age - b.age }) // sort increasing order of age
// console.log(users);
users.sort((a, b) => { return b.age - a.age })
console.log(users);