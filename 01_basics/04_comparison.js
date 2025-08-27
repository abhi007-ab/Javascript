// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/*
  The reason is that an equality check == and comparisons >,<,>=,<= work differently
  Comparisons CONVERTS null to a number,treating it as '0'
  That's why (3) null >= 0 is true &
  (1) null > 0 is false
*/

console.log(undefined == 0); // false
console.log(undefined > 0);
console.log(undefined < 0);

//** While coding null & undefined are useless SO don,t use them  **//
// For Readability //

// === -> it,s for checking

console.log("2" === 2);

