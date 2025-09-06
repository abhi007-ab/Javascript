// ------------ Functions ------------ //

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTowNum(number1, number2){
//     console.log(number1 + number2);
    
// }


function addTowNum(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2

}

const  result = addTowNum(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhi")); // Abhi just logged in
// console.log(loginUserMessage());      // undefined just logged in





// ------------------------ Shoping Cart(Excercise) ------------------------ //

function calculateCartPrice(val1, val2, ...num1){                       // Function FOR objects
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400));   // [ 300, 400 ]

const user ={
    username: "abhi",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [100, 200, 300, 400]  // Function FOR Array
function returnSecondValue(getArray){
    return getArray[1]
} 
// console.log(returnSecondValue(myNewArray));           // 200
console.log(returnSecondValue([100, 200, 300, 400]));    // 200
