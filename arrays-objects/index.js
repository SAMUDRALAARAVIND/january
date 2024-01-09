// let num1 = 20, num2 = 30, num3 = 40;
// let nums = [20, 30, 40]
// console.log(nums[1]); // 30
// console.log(nums[5]);
// nums[5] = 100;
// console.log(nums[5]);

// let arr = [10, "aravind", [1, false, "abc"]]
// console.log(arr.length); // 3
// console.log(arr[2][1]);

// console.log(arr["0"]);
// console.log(arr[0]);
// arr[2[1]]


// methods in arrays => Dynamic in nature
// let arr = [20, 30, 89, 293];

// adding elements at last
// console.log(arr.length); // 2
// let result = arr.push(40, 50);
// console.log(result); // 5

// removing elements from last
// console.log(arr);
// let result = arr.pop()
// console.log(result); // [20, 30, 89]
// let result2 = arr.pop();
// console.log(result2); // 89 || [ 20, 30 ]

// adding elements from frontside
// unshift()
// let result = arr.unshift(-10, 34);
// console.log(arr);

// delete elements from frontside
// let deletedElement = arr.shift();
// console.log(deletedElement, arr);
// let arr = [20, 30, 89, 293];

// insert or delete elements from anywhere in array
// splice

// let x = arr.pop();// x = 293 | [ 20, 30, 89 ]
// arr.pop();
// arr.pop(); // [ 20 ]

// arr.push(x); // [ 20, 293 ]
// console.log(arr);

// let result = arr.splice(1, 0);
// console.log(result, arr);

// let result = arr.splice(0, arr.length)
// console.log(result); // [ 20, 30, 89, 293 ]
// console.log(arr); // [] 


// let arr = [10, 30, 12, 1, 2002, 3003, 9393];
//         0    1   2
// [10, 30, 45, 7, 50, 12]
// let result = arr.splice(2, 0, 45, 7, 50)
// console.log(result);

// splice(startIndex, deleteCount, ...newElements)

// [10, 30, 12] => [10, 56, 44, 30, 12]
// let result = arr.splice(1);
// // result = [30, 12] , arr = [10, 3, 32] 
// console.log(result, arr);

// arr.splice(3, 2)
// console.log(arr);

// let elements = arr.splice(2);
// console.log(arr);
// console.log(elements);

// let arr = [10, [2, 4, 1], 90, 88]
//         0        1      2   3


// [2, 4, 1] => [2, 4, 36, 1]

// console.log(arr[1]);
// let result = arr[1].splice(1, 1)
// console.log(result);
// console.log(arr);

// let result = arr.splice(7, 0, 13)
//  what will be the o/p of this
// console.log(result, arr);
// arr[1].splice(2, 0, 36)
// console.log(arr);


// let arr = [3, 4, 2, 8];

// let segment = arr.slice(2)
// console.log(segment);
// console.log(arr);


// for in and for of loops


// Objects 

// keys in arrays are pre defined ( 0 based indexing )
// let arr = [10, 20, 11]
//          0    1   2

let obj = {
    name: "Aravind",
    age: 23
};

// console.log(obj.age, obj["age"]);

// obj.age = 24;
// console.log(obj);
// obj["age"] = 25
// console.log(obj);

// delete properties
// console.log(obj)
// delete obj.age
// delete obj.name
// console.log(obj)

// adding new properties
// obj.role = "SDE";
// console.log(obj);
// obj["domain"] = "Fullstack"
// console.log(obj);


// let x = prompt("Enter your name")

// let x = prompt("enter first number")
// let y = prompt("enter second number");
// alert(`The final result is: ${Number(x) * 2 + Number(y)}`)


// let myName = "Aravind", role = "Software developer"
// // let str = "I am " + myName + " , i am a " + role;

// let str = `I am ${myName} , i am a ${role}`
// console.log(str);


// Object iterations and Higher order functions
// array methods ( forEach, map, filter, reduce )

// let arr = [10, 20, 30]
// let user = {
//     name: "aravind",
//     email: "aravind@gmail.com"
// };


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for in => over indices , for of loop => values
// 0, 1, 2
// for (let x in arr) {
//     console.log(x);
// }
// let z = "name";
// console.log(user[z]); // user["name"]


// for (let y in user) {
//     // y = "name"
//     // y = "email"
//     console.log(user);
//     // user["name"] => "aravind"
//     // user["email"] => "aravind@gmail.com"
// }

// for of loop => iterate over the values 

// let nums = [87, 23, 18];
// for (let x of user) {
//     // x = 87, 23, 18
//     console.log(x);
// }


// objects are un ordered 
// let user = {
//     name: "ejjr",
//     age: "djjd",
//     10: "Valu 1",
//     12: "Value 2",
//     9: "value 3"
// }

// console.log(user);

// array of n numbers find the frequency of occurence of all the numbers 


// let nums = [2, 3, 2, 2, 4, 3, 9, 10];
// //                      x
// let freq = {};

// for (let x of nums) {
//     // check if x key is present inside freq
//     if (freq[x]) { // undefined
//         freq[x]++;
//     }
//     else {
//         freq[x] = 1;
//     }
// }

// console.log(freq);






