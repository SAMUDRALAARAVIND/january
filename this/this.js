
// window is a global object in browser's js runtime
// console.log(window); // window is not defined
// console.log(window.fetch);
// latitude, longitude

/**
 * this is a keyword in js which always to refers to an object ( Heap memory reference ).
 *
 * In global:
 *   this = window
 * Local:
 *    1) Regular functions
 *       i. this refers to the object which invokes the function
 *       ii. when there's no object then `this` refers to `window` object / global object.
 *    2) Arrow functions
 *      Inside arrow functions `this` keyword's value is undefined.
 *      inside arrow treat the `this` keyword like a variable
 */


// function callme() {
//     console.log(this); // ?
// }

/*
let user = {
    firstName: "Aravind",
    age: 23,
    printName: function () {
        console.log(this);  // this = user
        let f = () => {
            // this => treat like a variable
            console.log(this); // this = user
        }
        let f1 = function () {
            console.log(this); // this => the object which invokes it
        }

        f();
        f1(); // no object is calling f1
    }
}

user.printName(); // user object is invoking the printName function.
*/

// function a() {
//     console.log(this); // this = window
// }

// let a = function () {
//     console.log(this); // this = window
// }

// let a = () => {
//     // since global is the lexical parent of this function 
//     // this keyword's value will be searched in global 
//     // in global this => window, so here also this => window
//     console.log(this);
// }

// a();

// let obj = {
//     name: "Aravind",
//     f: function () {
//         console.log(this); // this = window
//     }
// }

// // let x = obj.name;
// // console.log(x); // "aravind"
// let y = obj.f;
// console.log(y); // function expression
// y(); // since `y` is a function expression we can invoke it.

// Constructor Functions => by convention start's with capital letter


/*
// one can call this as a constructor function
// constructor takes some empty area builds a house
function User(name, age) {
    console.log(this); // {}
    // constructor function: takes an empty objects and builds data in that.
    this.name = name
    this.age = age
    console.log(this); // { name: "aravind", age: 23 }
}
// 1) new operator creates an empty object in the HEAP. (#300)
// 2) that object (#300) will be given to the function , inside the function this keyword captures it.
// 3) The left side variable of new operator will also be given the newly created object (#300)
let user = new User("aravind", 23);
// user gets the constructed object
console.log(user); // #300
// console.log(user);
*/

// function Product(name, price) {
//     // name = "MacBook", price = undefined
//     this.name = name;
//     this.price = price;
// }

// let p1 = new Product(); // #400
// console.log(p1); // #400 = { name: undefined, price: undefined }

// let p2 = new Product("MacBook"); // #400
// console.log(p2); // { name: "MacBook", price: undefined}

// let p2 = new Product("MacBook", 100000); // #500
// console.log(p2); // #500 = {name: "MacBook", price: 100000}
