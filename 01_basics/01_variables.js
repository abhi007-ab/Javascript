const accountId = 133445
let accountEmail = "ABfake@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 1 // not allowed

accountEmail = "ab@real@google.com"
accountPassword = "212121"
accountCity = "Thane"

console.log(accountId);

/* 
Prefer not to use 'var'
Because of issue in block scope & functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])