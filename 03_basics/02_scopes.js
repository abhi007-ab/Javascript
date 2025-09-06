// SCOPE //

// let a = 300  // Outer Scope

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);  // INNER:  10 ->> Blocked Scope
    
// }

// console.log(a);   // 300



/// ++++++++++++++++ Nested Scope ++++++++++++++++ ///

function one(){
    const username = "abhi"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);   // Got An Error

    two()  // Executed
    
}

// one()

if (true) {
    const username = "abhi"
    if (username === "abhi"){
        const website = " youtube"
        // console.log(username + website);   
    }
    // console.log(website);  // error
    
}
// console.log(username);  // error



// ++++++++++++++ Intersting ++++++++++++++ //


// console.log(addone(5));  // It Executes....

function addone(num){        // This is Function
    return num + 1
}
addone(5)




// console.log(addTwo(5));  // It DOES not executes
const addTwo = function(num){   // This Is an Expression,BUT both are function
    return num + 2
}
addTwo(5)