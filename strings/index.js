/**
 * List data types:
 * 1. number => infinite possible values ( 1, -1, 200, 201, 9330, 3939)
 * 2. boolean => two possible values =>  true, false
 * 3. undefined => one possible value => undefined
 * 4. string => infinite possible values => ( "ara" , "abc" ,"", "_sjdjd" ...)
 * 5. object
 * 6. BigInt
 * 7. Symbol
 */

// strings can be declared in javascript 3 ways 

// let name1 = 'aravind', role1 = "SDE";
// let name2 = "Rajesh", role2 = 100;
// let name3 = `aravind`; // template string


// I am Aravind, role is SDE
// let message = "I am " + name1 + " role is " + role1;

// let message1 = `I am ${name2}, role is ${role2}`;
// console.log(message);
// console.log(message1);


// how're you
// back-slash (\) is used as an escape character.
// let sentence = "how're you";
// console.log(sentence);

// let value = "${}R";
// let temp = `Aravind ${56 + 99}`;
// console.log(temp); // Aravind ${}

// let x = 20 + 30 ;
// let y = op1 ? op2 : op3 ;

// op1 => boolean 
// op2 => value
// op3 => value

// let x = 21;
// if(x % 2 === 0){
//     console.log("even number");
// }
// else {
//     console.log("odd number");
// }

// score (0 = 100) 
// [50 - 90] => "A"
// > 90 => "S"
// < 50 => "P"

// let score = 90; // 
// let grade = (score > 50) ? (score > 90 ? 'S' : 'A') : 'P';
// console.log(grade);

// length property 

// let myName = "aravind", arr = [10, 20, 30, 56, 12];
// console.log(myName.length, arr.length);
// console.log(arr[1], myName[3]);
// arr[1] = 35;
// myName[3] = "K"
// console.log(myName);
// console.log(arr);

// Arrays are mutable (changable) , strings are immutable (not changable)


// let arr1 = arr.slice(1, 4);
// console.log(arr1);

// let myName1 = myName.slice(3, 6);
// console.log(myName1);

// splice => delete and add elements inside array
// splice => not exist on strings as they are immutable.


// let myName = "araViNd", arr = [10, 20, 30, 56, 12];

// console.log(myName.slice(-4, -1));

// charAt doesn't support negetive indexing.
// console.log(myName.charAt(-1));
// console.log(myName.at(-4));

// "araViNd" => "ARAVIND"
// "araViNd" => "aravind" 
// console.log(myName.toUpperCase(), myName.toLowerCase());

// Ascii codes 
// A => 65 , Z = 90
// a => 97 z = 122
// 0 => 48, 9 = 57

// let str = "j09$";
// console.log(str.charCodeAt(3));

// 98 => b
// console.log(String.fromCharCode(65));


// let str = "I a$m $avin$d";
// // fragments = [ "I a", "m ", "avin", "d"] ;

// let fragments = str.split("$");
// console.log(fragments);

// let sentence = "I am aravind, role is SDE";
// let words = sentence.split(" ");
// console.log(words[words.length - 1].length);

// let arr = ["I", "am", "Aravind"];
// "I$am$Aravind"

// let str = arr.join(" ")
// console.log(str);

// let s1 = "abc", s2 = "mno", s3 = "xyz";
// s1 + s2 + s3

// console.log(s1.concat(" ", s3, " ", s2));
// "abc" + "xyz" + "mno"

// let str = "Hello Hello Hello Aravind";
// "He" + "K" + "lo Aravind"
// console.log(str.slice(0, 2) + "K" + str.slice(3));
// console.log(str);

// let result = str.replace("Hello", "I am")
// let r = str.replaceAll("Hello", "ABC")
// console.log(r);



// Convert decimal to roman numeral 

let standard = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000]
]

// 560 => look for it's closes standard representation 

function getClosestRepresentation(n) {
    // checks for nearest and < n roman number 

    // return ["IX" , 9]
    for (let i = 0; i < standard.length; i++) {
        let currentVal = standard[i][1];
        if (currentVal === n) {
            return standard[i];
        }
        if (currentVal > n) {
            return standard[i - 1];
        }
    }

    return standard[standard.length - 1];
}

let r = getClosestRepresentation(383939);

let n = 34, ans = "";

while (n != 0) {
    let roman = getClosestRepresentation(n);
    // n = 12
    // getClosestRepresentation(12) => roman = [ "X" , 10 ]
    ans += roman[0]; // ans += "X" 
    n -= roman[1] // n = 12 - 10 = 2
}
console.log(ans);