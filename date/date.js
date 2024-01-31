// let date = new Date();

// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth()); // January => Dec => [ 0, 11]

// console.log(date.getDate()); // 31st Jan
// console.log(date.getDay());
// // [Sun, Sat] => [0, 6]
// console.log(date.getHours()); // 24 hr clock
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());



// Unix timestamp : 1970 Jan 01 12:00AM UTC => 1970 Jan 01 5:30AM IST
// Epoch time in seconds: number of seconds from Unix timestamp
// console.log(date.getTime()); // gives the number of milliseconds from UNIX timestamp

// console.log(date.getTime() / 1000) in seconds



// find the number of seconds from my last birthday
// Dec 17th  03:00PM
// Jan 31st  10:50PM

// let recentBirthDate = new Date(2023, 11, 17, 15, 0, 0, 0);
// // console.log(recentBirthDate);
// let todaysDate = new Date(2024, 0, 31, 22, 50, 0, 0);

// // epoch of my recent birth date
// let e1 = recentBirthDate.getTime() / 1000;

// // epoch of today's date 
// let e2 = todaysDate.getTime() / 1000;

// // 24 * 60 * 60 
// console.log((e2 - e1) / (24 * 60 * 60));


// Feb 10th publishing a Video on youtube : 

// let uploadDate = new Date(2024, 1, 10, 15, 30, 0, 0);
// let currentDate = new Date();

// console.log(uploadDate.getTime() - currentDate.getTime());

// let secondsGap = parseInt((uploadDate - currentDate) / 1000);

// // console.log(secondsGap / (24 * 60 * 60));
// // 9days 6hr 30min 40sec

// let daysGap = parseInt((secondsGap) / (24 * 60 * 60));

// let remaining = secondsGap - (daysGap * 24 * 60 * 60);

// let hrsGap = remaining / (60 * 60);

// console.log(hrsGap);


let uploadDate = new Date(2024, 1, 10, 15, 30, 0, 0); // IST 
console.log(uploadDate.getTime() / 1000);

// 1707559200 => 1970 Jan 01 12:00AM UTC | 1970 Jan 01 5:30AM

let unixIst = new Date(1970, 0, 1, 5, 30, 0, 0);
console.log(unixIst);


// epoch time of unixIst => 
let e = unixIst.getTime();
console.log(e);

console.log(new Date(e));

// new Date() => current instance 
// new Date(year, month, date, hrs, min, second, millis)
// new Date(epochTime) ; 
// console.log(new Date("2024-01-31T22:45:30.348"));


// let temp = new Date(1970, 0, 1, 5, 30, 0, 1);
// console.log(temp.getTime() > unixIst.getTime());