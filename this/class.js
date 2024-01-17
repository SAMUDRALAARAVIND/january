/**
 * 1. class | constructor functions
 * 2. spread and destructuring
 *      Assignments
 * 3. JSON Methods
 */
// function User(fname, email, phone) {
//     // this = #500
//     this.firstName = fname;
//     this.email = email;
//     this.mobile = phone;
// }

// let user = new User("Aravind", "aravind@gmail.com", 38390); // #500
// console.log(user); // #500
// user.firstName = "Aravind 123"
// console.log(user);

// let user1 = new User("Amar", "ama2383@gmail.com", 383930);
// console.log(user1);




// Blinkit product 

// { 
//     name: "",
//     deliveryTime: "",
//     price: 100,
//     discount: 30,
//     imageUrl: "",
//     unit: [
//         "1KG",
//         "5KG",
//         "500g"
//     ]
// }


// classes in javascript ( doesn't support access modifiers public, private , protected =>  hashnames)

/*
class BlinkitProduct {

    constructor(n, p) {
        this.name = n;
        this.price = p;
    }

    getName() {
        // this.name = blinkitProduct1.name
        return this.name;
    }
}

let blinkitProduct1 = new BlinkitProduct("IPhone", 2833);
console.log(blinkitProduct1);
let r = blinkitProduct1.getName();
console.log(r);
*/


// Spread and Destructuring
// let arr = [20, 12, [9, 10, 23], 56];
// let [, a, [, , b]] = arr;
// // let a = arr[1], b = arr[2];
// console.log(a, b);

// let [, , x] = "aravind";
// console.log(x);

// let user = {
//     name: "aravind",
//     age: 23,
//     address: {
//         city: "Warangal",
//         pincode: 589303,
//         state: "Telangana"
//     }
// };

// let name = user.name, age = user.age;
// // { propertyName: aliasName, prop2, prop3 }
// let { address: { pincode, city: yourCity, state } } = user;
// console.log(pincode, yourCity, state);


// let user = {
//     name: "aravind",
//     age: 23,
// }
// // user object do not have address property
// let { address } = user;
// console.log(address);

// Spread Operator ( arrays, string, objects ) ...

// ...[a, b, c] => a , b , c
// ..."abc" => 'a' , 'b', 'c' 
// ...{k1: v1, k2: v2} => k1: v1 , k2: v2
// let arr = [9, 10, 23, 12, 56];
// let arr1 = [90, ...arr, 20]
// console.log(arr1);

// let nums = [10, 20];// nums = #100
// let arr = nums ; // arr = #100
// let arr = [...nums]; // [...[10, 20]] => [10, 20]
// arr = #500
// console.log(arr === nums); // [10, 20]


// function callme([a, b]) {
//     // a = [10, 20] , b = undefined
//     console.log(a, b); // [10, 20]
// }

// callme([10, 20]); 

// function callme(a, b) {
//     // a = [10, 20] , b = undefined
//     console.log(a, b); // [10, 20]
// }

// callme(...[10, 20]);  // ...[10, 20] => 10, 20


// let sum = (...nums) => {
//     // this function can take any parameters and adds all the numbers and returns the result
//     return nums.reduce((prev, e) => prev + e);
// }

// let r1 = sum(10, 20);
// let r2 = sum(1, 4, 9);
// console.log(r1, r2);
// 10, 20 => ...[10, 20] = ...arr => arr = [10, 20]
// 3, 2, 18 => ...[3, 2, 18] = ...arr => arr = [3, 2, 18]

// we can not use spread in front of non iterable values.
// console.log(...undefined);


// what's the issue with this approach - 

// let [, ...arr] = [10, 20, 30]; // a, b, c => ...arr
// console.log(arr); // 10, 20, 30

// let address = {
//     city: "hyd",
//     pincode: 490,
// }

// let user = {
//     name: "aravind",
//     age: 23,
//     ...address
// }
// // console.log(user);
// let day = 1 ; // 
// switch (value) {
//     case 0: {
//         console.log("Sunday");
//         break;
//     }
//     case 1: {
//         console.log("Monday");
//         break;
//     }
//     default: {
//         console.log("Fail");
//     }
// }

// let x = 20, y = 10;
// console.log(x + -y); // 20 + -10 = 20
// console.log(x+++y) ;
// console.log(x, y); // 21 + 10 = 31



// let arr = [4, 3, 2];
// arr.forEach((e, i, list) => {
//     // i = [0, 2]
//     console.log(e, i);
//     list.splice(i, 0, "abc");
// })

// let n = arr.length;
// infinite loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
//     arr.splice(i, 0, "abc")
// }
// console.log(arr);

// let books = [
//     {
//         author: "aravind",
//         title: "My life",
//         readingStatus: true
//     },
//     {
//         author: "aravind",
//         title: "My life",
//         readingStatus: false
//     },
//     {
//         author: "aravind",
//         title: "My life",
//         readingStatus: false
//     },
//     {
//         author: "aravind",
//         title: "My life",
//         readingStatus: true
//     }
// ]
// let readBooks = 0;
// books.forEach(book => {
//     book.readingStatus && ++readBooks
// });
// console.log(readBooks);


// true && console.log("aravind")
// since first operand is true it has to look for second operand to evaluate the expressions result

// true || console.log("aravind");
// in OR operation if one operand is true then the result is also true

// false || console.log("aravind");

// false && console.log("aravind"); 

let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//  length is 36

// generate a random number from [0-36]

// Math.random() => (0, 1)
//  (0, 1) * 36 => (0, 36)

let anyNumber = parseInt(Math.random() * 35)
// [0, 35]
console.log(values[anyNumber]);