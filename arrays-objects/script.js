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
