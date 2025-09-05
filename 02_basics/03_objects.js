// Singleton -> Build by literals it's not, But build by constructor it is SINGLETON
// Ex => Object.create



// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "abhishek",
    "full name": "A B",
    [mySym]: "myKey1",      // TO declare the symbol use '[]'....
    age: 20,
    location: "Mumbai",
    email: "fake@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);       // Use this syntax...
// console.log(JsUser["full name"]);   
// console.log(JsUser[mySym]);       

JsUser.email = "real@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "real@google.com"
console.log(JsUser);

// Function
JsUser.greetings = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
