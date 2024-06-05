// to be a master in JS 
// learn objects , web events(Browser events)

/* 

primitive datatypes
 7 types:String, Number ,Boolean , null , undefined , symbol , BigInt
 
 */

 /* 
 reference datatypes(Non-primitive)

 Array ,Objects , Functions

 */

//  Dynamically typed language or statically typed language

//JS mein datatype like kya eh string h boolean h btana nhi pdhta so its a dynamically-typed language
const a=4;
const score=100.3 ;//its too a number datatype
// never told they are a NUmber datatype

// the languages in which we have to define the datatype while giving value to variable its a statically-typed language examle-:: c++ int main(); 


const scores = 100;//number datatype
const scoreValue= 100.3;//number datatype


const isLoggedIn = false;// boolean type
const outsideTemp = null;// null type(empty not 0)

let userEmail; //undefined or can do it manually
let UserEmail=undefined;

//Symbol
const id = Symbol('123');
const anotherId = Symbol('123');//seems that they have save value but they are different
//lets check
console.log(id===anotherId);//false

const bigNumber = 345602482741n;// give n at last to define BigInt datatype
console.log(typeof bigNumber); 

// reference datatypes

//array
const list = ["Shaktiman" , "Nagraaj" , "doga"]// datatype= object

//object

let simar={
    name:"simar",
    class:"x",
    roll_no:4202
};//datatype= object

//function 
const myFunction = function(){
    console.log("hello world");
}// datatype= function object

//+++++++++++++++++++++++++++++++++++++++++++++++++
let myYoutubeName="simarpreet4202";
let anotherYoutubeName=myYoutubeName;
console.log(myYoutubeName);
console.log(anotherYoutubeName);

anotherYoutubeName="simar4202";
console.log(myYoutubeName);
console.log(anotherYoutubeName);
// the anotherYoutubeName datas changed whereas myYoutubeName has mo effect as these are stored in stack data in stacks 

//however the reference datas are stored in heap and reference is given 
// the data changed in one variable will be chnaged in other tooo
let myObj={
    name:"simar",
    id:"simar4202",

}
let yourObj=myObj;

// console.log(myObj);
// console.log(yourObj);
yourObj.id="simar_4202"
console.log(myObj);
console.log(yourObj);