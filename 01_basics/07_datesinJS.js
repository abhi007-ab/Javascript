// Dates

let myDate = new Date()
// console.log(myDate.toString());                // Sat Aug 30 2025 09:57:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());            // Sat Aug 30 2025
// console.log(myDate.toJSON());                  // 2025-08-30T09:57:19.383Z
// console.log(myDate.toISOString());             // 2025-08-30T09:57:19.383Z
// console.log(myDate.toLocaleDateString());      // 8/30/2025
// console.log(myDate.toLocaleString());          // 8/30/2025, 9:57:19 AM

// console.log(typeof myDate); // object  *****


// let myCreatedDate = new Date(2025 , 0, 23)   // Months starts from "0"
// console.log(myCreatedDate.toDateString());   // Thu Jan 23 2025


// let myCreatedDate = new Date("2025-01-14")    // Month (DD/MM/YY)

let myCreatedDate = new Date("01-14-2025")    // Month (MM/DD/YY)

// console.log(myCreatedDate.toLocaleString());  // 1/14/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());  // 1/14/2025, 12:00:00 AM


// for polls
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// Converts into Seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);             // 2025-08-30T10:17:17.251Z
console.log(newDate.getDay());    // 6
console.log(newDate.getMonth());  // 7
