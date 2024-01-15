/**
 * Completed :
 *    Call Stack
 *    Hoisting ( Creation and Execution phase , TDZ)
 *    Heap Memory / Stack
 *    Primitive and Non primitive data types
 *
 * Today:
 *   Scope
 *   Closures
 *   Debugging js code
 */

// let and const declared variables are block scoped.
// scope => available region
// block => {} 
// inside the function => local scope
// not inside a function => global scope 
// inside block => block scope
// if() { // code } , loops

// function callme() {
//     console.log(a);
//     let a = 20;
// }
// callme();

// const f = () => {
//     console.log(a);
// };

// function scope() {
//     let a = 20;
//     a = 300;
//     f();
// }

// scope();

// let a = 100;

// function callme() {
//     let f = () => {
//         console.log(a);
//     }
//     let a = 90;
//     return f;
// }
// a = 93;
// callme()();
// a = 103
// console.log(a);
// callme returns f = callme() ; f() = callme()();


// let f1 = () => {
//     let f2 = () => {
//         console.log("inside f2");
//         return () => {
//             console.log("aravind");
//         }
//     }
//     return f2;
// }
// f1()()();