//reduce()
//reduce js mdn

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue)=> accumulator + currentValue , initialValue
);
console.log(sumWithInitial);
//expected output : 10

//accumulator is a EMPTY variable given to you
// initial value (starting value)
// accumulator+ currentvalue  (0+1) now accumulator is 1 now intial value+accumulator(1+2)=3

// const myNums = [1,2,3]
// const myTotal =  myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval : ${
//         curval
//     }`);
//     return acc+ curval;
// }, 0
// )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js Course",
        price : 100

    },
    {
        itemName:"js Course",
        price : 567

    },
    {
        itemName:"js Course",
        price : 1900

    },
    {
        itemName:"js Course",
        price : 567

    }
]
const myPrice = shoppingCart.map((num)=>{
    return num.price
})
console.log(myPrice);

const myShoppingPrice=myPrice.reduce((acc,current) => acc+current,0);
console.log(myShoppingPrice);

//++++++++++++++++++ or +++++++++++++++++++
const myShoppingPrice2=shoppingCart.reduce((acc,item) => acc+item.price,0);
console.log(myShoppingPrice2);
//when we need to extract and add somethings