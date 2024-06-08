// array
// [](brackets),{braces}
const myArr = [0,1,"hitesh", true , [1,23,4],{name:"simar",age:18,class:"X"}];
// can have different types of element it can be string boolean,array,number etc
// starts from 0th index
// is resizable and add or subtract element after creating
// cannot access elements by console.log(myArr["one"])
console.log(myArr[1]);//is right
// give shallow copy(reference) not deep copy(do not share same reference)

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[1]);

//Array methods

myArr2.push(6)//add elements in array
myArr2.push("simar")//add elements in array
console.log(myArr2);

myArr2.pop();//will REMOVE last element of the array
console.log(myArr2);

myArr2.unshift(9);
console.log(myArr2);
/*will ADD element in start of the element in 0th position
disadvantages:
it shifts indexes of all the elements so used very less*/

myArr2.shift(9);
//will REMOVE element of 0th position
console.log(myArr2);


//questions can be asked like
console.log(myArr2.includes(9));//FALSE means 9 is not present in an array
console.log(myArr2);

console.log(myArr2.indexOf(9));//-1 means its not present
console.log(myArr2.indexOf(5));//exits on 4th index
const myyArr=new Array(1,2,3,4,5)
const newArr = myyArr.join()//changes type of array to list
console.log(newArr);
console.log(typeof newArr);


//slice , splice
console.log("A", myyArr);
const myn1 = myyArr.slice(1 , 3)//1,2 will be include 3 will not be included
console.log(myn1);
console.log("b", myyArr);


const myn2 = myyArr.splice(1 , 3)//1,2 ,3 will be included full 
//and it will also manipulate original one 
console.log(myn2);
console.log("c", myyArr);