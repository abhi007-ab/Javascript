// Primitive :-
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

let name = "Abhi"    
const score = 100    
const scoreValue = 100.3   
const isLoggeedIn = false  
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

const bigNumber = 54815792578853275n   // BigInt




// Reference (Non Primitive) :-
// Array, Objects, Functions
// Rule of Datatype or called them(Return type)
// Function, Function, Object Function.

const heros = ["Ironman", "Superman", "Spiderman"]

let myObj = {
    name: "abhi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}


// If you don't understand the DataType by their given value THEN :-
//USE...

console.log(typeof outsideTemp);
