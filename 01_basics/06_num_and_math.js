// const score = 400;
// const newScore = new Number(400);
// //methods like toFixed , toString, toPrecision , toLocaleString , constructor , valueOf
// console.log(newScore.toString());
// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
// Number.MAX_VALUE;
// Number.MIN_VALUE;

// // +++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-4));// convert negative to positive but not positive to negetive
console.log(Math.round(3.56));
console.log(Math.round(3.26));
console.log(Math.ceil(3.56));//round and choose 4
console.log(Math.floor(3.56));//roundof and choose floor one smaller one

console.log(Math.min(3,5,0,234,56));
console.log(Math.max(3,5,0,234,56));


console.log(Math.random());//comes between 0 and 1 includes 0 and 1 too
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


//trick and formula very important
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*( max - min + 1))+min);