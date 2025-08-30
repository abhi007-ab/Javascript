// +++++++++++++++++++ Nums +++++++++++++++++++ //

const score = 400
// console.log(score);  // 400


const balance = new Number(100)
// console.log(balance);     // [Number: 100]

// console.log(balance.toString().length);   // 3 
// console.log(balance.toFixed(2));          // 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));    // 124


const hundreds = 1000000
// console.log(hundreds.toLocaleString());   //1,000,000 - USD
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 - INR



// +++++++++++++++++++ Math +++++++++++++++++++ //

// console.log(Math);
// console.log(Math.abs(-4));  // 4
// console.log(Math.round(4.5));  // 5
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.floor(4.8));  // 4
// console.log(Math.min(4, 5 , 3, 8));  // 3
// console.log(Math.max(4, 5 , 3, 8));  // 8

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)    //****//

/*  
    Explanation :-


    If Math.random() returns 0.6, the calculation works like this:

    Math.random() * (max - min + 1) = 0.6 * 11 = 6.6

    Math.floor(6.6) = 6

    6 + min = 6 + 10 = 16

    So the random number printed could be 16.

*/