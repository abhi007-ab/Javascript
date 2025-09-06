const user = {
    username: "abhi",
    price: 199,

    welcomeMessage: function() {
        // console.log(`${this.username} ,  welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)   // Returns empty object -> {} , But in Browser returns 'Windows'





// function  one(){
//     let username = "abhi"
//     console.log(this.username);
// }
// one()



// const chai = () => {
//     let username = "abhi"
//     console.log(this.username);  // {}
// }
// chai()



                                  ///    Arrow  Function   ///

// 1-Explicit Arrow Function \\

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));   // 7



// 2-Implocit Arrow Function \\

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));     // 7


const addTwo = (num1, num2) => ({username: "Abhi"})   // For Object
console.log(addTwo());  // { username: 'Abhi' }



