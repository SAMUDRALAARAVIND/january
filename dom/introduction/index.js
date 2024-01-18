
// let obj = {
//     tagName: "html",
//     lang: "en",
//     children: [
//         {
//             tagName: "head",
//             children: [
//                 {
//                     tagName: "meta",
//                     charset: "UTF-8",
//                     isSelfclosing: true,
//                     children: []
//                 }
//             ]
//         },
//         {
//             tagName: "body",
//             children: [
//                 {
//                     tagName: "h1",
//                     id: "test",
//                     class: "abc xyz",
//                     style: {
//                         fontSize: "32px",
//                     }
//                 },
//                 {},
//                 {}
//             ]
//         }
//     ]
// }

// The way browsers convert the HTML + CSS into Hierarchy of Objects is called as DOM ( Document Object Model).

// document = { key: value, key2: value, key3: value }

// Hoisting => it's concept of core javascript
// closure => it's concept of core javascript 
// document => it's just an object in javascript 


// to change anything on a html element firstly we need the object of that element. 

// every DOM tree will have a pool ( hierarchy ) of objects 
// document object is the one knows everything about the DOM tree.


// document get html element with id test
// document has methods to extract / get html element objects  from the DOM tree 
// DOM tree => Hierarchy of html element object ( after parsing )



// class Test {
//     name = "aravind";
//     age = 23;
//     constructor() {
//         this.college = "NITW"
//     }
// }

// let t = new Test();
// console.log(t);

// console.log(JSON.stringify(t));


// console.log(document);
// console.log(JSON.stringify(document));

// let obj = { name: "aravind" };
// console.log(obj.name);
// console.log(object);

// let str = "aravind";
// console.log(str.length);


// let user = {
//     get name() {
//         console.log("inside function");
//         return "Aravind"
//     }
// };

// console.log(user.name);

// let user = {};
// Object.defineProperty(user, "name", {
//     // value: "Aravind Samudrala",
//     enumerable: true,
//     get: function () {
//         console.log("inside get method");
//         return "aravind"; //"ABC"
//     }
// })
// console.log(user.name);


// console.log(user.name);
// Object.defineProperty(user, "age", {
//     value: 23,
//     enumerable: false
// })

// // console.log(user);
// for (let x in user) {
//     console.log(x); // "name", "age"
// }

// // console.log(Object.keys(user)); // ["name", "age"]
// console.log(JSON.stringify(user));