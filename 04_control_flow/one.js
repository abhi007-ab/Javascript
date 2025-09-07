// if

const temp = 41

// if (temp === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temp is greater than 50");
    
// }
// console.log("Execute")

// <, >, <=, >=, ==, !=, ===, !==



// Scope related  \\
// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }




// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");  
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200"); 
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course"); 
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



                // Nullish Coalescing Operator (??) : null, undefined  \\

// let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15 // 15

// val1 = null ?? 10 ?? 20  // 10

// console.log(val1);



             // Terniary Opertar \\

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");