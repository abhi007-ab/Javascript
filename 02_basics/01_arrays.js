//                        Array                             //

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);


//                      Arrays Methods                         // 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // [9, 0, 1, 2, 3, 4, 5]
// myArr.shift()     // [ 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));  // flase
// console.log(myArr.indexOf(9));   // -1
// console.log(myArr.indexOf(3));   // 3

// const newArr = myArr.join()

// console.log(myArr);   // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);  // 0,1,2,3,4,5  -> String


//                                  Slice, Splice                                //

console.log("A ", myArr);  //  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);   // [1, 2]
console.log("B ", myArr);  //  [ 0, 1, 2, 3, 4, 5 ] -> Don't change original ARRAY

const myn2 = myArr.splice(1, 3)

console.log("C ", myArr); //  [ 0, 4, 5 ] -> Changes the original ARRAY
console.log(myn2);        //  [ 1, 2, 3 ]





/*  
   splice = (method) Array<number>.splice(start: number, deleteCount?: number | undefined): number[] (+1 overload)
            Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

            @param start — The zero-based location in the array from which to start removing elements.

            @param deleteCount
            The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

            @returns — An array containing the elements that were deleted.

*/