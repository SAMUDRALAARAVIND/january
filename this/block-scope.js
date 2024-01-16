/**
 * Block is  {} other than the function
 * Global scope
 * Local scope / functional scope
 * Block scope
 *
 * let, const are block/function/global scoped variables.
 * var is function/global scoped variables. context level variables
 */

// if (true) {
//     var a = 30;
//     var b = 90;
//     console.log(a, b);
// }
// console.log(b);
// console.log(a); // 30

// console.log(b);


// Global context : callme = () , b = 20
// function callme() {
//     // callme context:no variables
//     if (true) {
//         let a = 30;
//     }
//     console.log(a);  // not defined
// }

// if (true) {
//     let a = 10;
//     var b = 20;
// }

// callme();