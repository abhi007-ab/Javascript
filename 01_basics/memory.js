// Stack (Primitive)

let myName = "abcd"

let anothername = myName
anothername = "Abhishek"

console.log(myName);       // abcd
console.log(anothername);  //Abhishek



// Heap (Non Primitive)

let userOne = {
    email: "fake@google.com",
    name: "dcba"
}

let userTwo = userOne

userTwo.email = "real@google.com"

console.log(userOne.email);   //real@google.com
console.log(userTwo.email);   //real@google.com
