/*
 1. Javascript execution and Debugging the code
 1.1. Primitive and Non primitve variables, HEAP Memory
 2. sort method, compare function
 3. quick recap on hof and callbacks ( forEach, filter )
*/

// How browser executes javascript ?

// for executing javascript => javascript engine is needed 
// Chrome => V8 Engine 
// Nodejs => V8 Engine

// Hositing , execution 
// scope , closures 

// let a = 20, b = 390;
// console.log(a + b);

/*
 Every line of code in JS can be divided into
 i. Global Scope (Statement not inside a function )
 ii. Local Scope (Statement present inside a function)
*/

// let a = 20 ;
// if(true){ 
//     console.log(a * 2);
// }
// function callme() {
//     console.log("aravind");
// }

// callme();

/**
 * Allocation of Memory to the variables during creation phase:
 * 1. We can declare variable with let, const , var , function keywords.
 * Allocation of memory depends on the keyword used for declaring that variable .
 *
 * **** CREATION PHASE
 * i. let , const => no data will be assigned to these variables, they will also be kept inside the Temporal Dead Zone ( TDZ ). (Partial Hositing)
 * ii. var => `undefined` value will be given to these variables. (Partial Hositing)
 * iii. function => gets the actual data. (Full Hoisting)
 *
 * The process of allocating memory to the variables during the creation phase itself is called as HOISTING.
 *
 * => If a variable is inside the TDZ , we can not access such a variable
 * => If we access variable inside TDZ => Error will be thrown => Cannot access variable before
 */

// let a = 20, b = 90;
// let c = 30 + a * b;
// console.log(c);

// console.log(a);
// function a() {
//     console.log("something");
// }
// let b = 100;
// console.log(b, a);


/*
 Primitive And Non-Primitive variables
 i. Primitive / Simple data types will be stored in the Stack Memory
 ii. NonPrimitive / Complex data type will be stored in the HEAP Memory.

 Non Primitive(Heap Memory):
    Array
    Objects
    function

 Primitive (Stack Memory):
    number
    string
    boolean
    undefined
    Symbol
    BigInt
*/

// a => primitive, b = non-primitive
// let a = 10, b = [3, 2, 16];
// // b = #100
// let c = a, d = b;
// // b = #100, d = #100
// d[0] = 192; 
// console.log(b[0], d[0]);



// let a = [10, 20, 30]; // a = #200
// let b = []; // b = #300

// a.forEach((e) => {
//     b.push(e)
// });

// console.log(a, b); // a = #200, b = #300
// a[0] = 2393;
// console.log(a[0], b[0]);



function callme(a, b) {
    // a = 90, b = #336
    a = 100;
    b[0] = 200;
}

let x = 90, y = [1, 2, 3];
// y = #336

// callme(90, #336)
callme(x, y);

console.log(x, y); // 90, y = [200, 2, 3]


