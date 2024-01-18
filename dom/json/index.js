/**
 * JSON methods
 * DOM
 */

// JSON => javascript object Notation
// JSON.stringify => converts the data into string
// JSON.parse

/**
 * While login
 *
 * JSON format
 *  {
 *      email: "aravind@gmail.com",
 *      password: "djje3930"
 *  }
 *
 * XML
 *
 * <data>
 *      <email>aravind@gmail.com</email>
 *      <password>djje3930</password>
 * </data>
 *
 */

// javascript object
// let obj = { a: 10, b: 20 };

// // string format of javascript object is called as JSON 
// let str = '{"a": 10, "b": 20}'
// console.log(typeof str);

// let obj = {
//     name: "aravind",
//     age: 20,
//     address: {
//         city: "hyderabad",
//         pincode: 3939003
//     }
// };
// let r = JSON.stringify(obj)
// console.log(r.age);

// console.log(JSON.stringify(1));


// let user = { name: "aravind", age: 23 };

// let jsonUser = JSON.stringify(user);
// console.log(typeof jsonUser); // string

// let objUser = JSON.parse(jsonUser);
// console.log(objUser);



// let str = '{a: 10, b: 20}';
// valid representation: '{"a": 10,"b": 20}'
// not a valid json
// console.log(typeof str);
// let obj = JSON.parse('{"a": 10,"b": "aravind"}')
// console.log(obj.b);


// let user = [10, 20, 30] // 10 // { name: "aravind", age: 23 };
// let userString = JSON.stringify(user);
// console.log(userString); // '{"name": "aravind","age":23 }'

// let userObject = JSON.parse(userString); // 
// console.log(userObject);
// userObject.push(99);
// console.log(userObject);



// some data present inside json file
// upon uploading firstly load the data => String format only ( JSON format )
// 
let data = '{"username": "aravind", "password": "abc", "age": 23}'
// data.age
console.log(JSON.parse(data).age)