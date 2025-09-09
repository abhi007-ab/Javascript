// reduce

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and  currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)


// const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

// console.log(myTotal);


// Shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "DS course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
