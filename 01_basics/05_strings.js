const name  = "abhi"
const repoCount = 20

// console.log(name +  repoCount + " Value");


// String Interpolation-
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);  // Use this SYNTAX



const gameName = new String('Abhi-shek')

// console.log(gameName[0]);              // A
// console.log(gameName.__proto__);       // object,{}

// console.log(gameName.length);          // 8
// console.log(gameName.toUpperCase());   // ABHISHEK
// console.log(gameName.charAt(2));      // h
// console.log(gameName.indexOf('s'));   // 4

const newString = gameName.substring(0, 4)
console.log(newString);   // Abhi


const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);  //bhi


const newStringOne = "  Abhi  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://abcd.com/abcde%20com"
console.log(url.replace('%20', '-'));     // https://abcd.com/abcde-com



console.log(gameName.split('-'));  // [ 'Abhi', 'shek' ]

