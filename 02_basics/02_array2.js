const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heros[3][1]); // Flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]  // -> Spread operator //
// console.log(all_new_heros);     // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);   // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Abhishek"))  // false
console.log(Array.from("Abhishek"))     // converts it into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]


