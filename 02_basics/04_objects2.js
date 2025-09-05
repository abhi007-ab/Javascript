// for singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "abhi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] -> Array
// console.log(Object.values(tinderUser)); // [ '123abc', 'abhi', false ] -> Array
// console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'abhi' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true



const regularUser = {
    email: "fake@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhishek",
            lastname: "bhalerao"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    }
]

// console.log(users[1].email);  // abc@gmail.com









// Destructuring

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "abhi"
}

const {courseInstructor: instuctor} = course
// console.log(courseInstructor);
console.log(instuctor);   // For Destructuring we can use '{}' to.....

