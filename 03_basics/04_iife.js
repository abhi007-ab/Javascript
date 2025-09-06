// Immediately Invoked Function Expression (IIFE)

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // Use this ';' to write two IIFE *******.....

// To prevent pollution of the global(global means execute by defauit) JS scope....

( (name) => {
    // simple iife or unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('abhi')