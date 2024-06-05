 //string can be denoted by "",''(double quotes or single quotes)
//  and they can be concatenate by ("hello"+" world")=>hello world

const name = "hitesh";
const repoCount = 50;
let myObj={
    nae:"simar",
    age:25,
}
console.log( name + repoCount + "value") //yes its right but not recommended its a old syntax 

//instead use the modern way 

//use backticks becz of string interpossession(made placeholders and directly inject variable like here using $ sign we inject variable)
console.log(`hello my name is ${name} and my repoCount is ${repoCount}${myObj.age}`);

//strings

//they can be declared in 2 different ways
const myName = "hitesh"// behind the scene eh bhi object hi evoke kr raha h
console.log(myName);
// or
const gameName = new String("simar42");//new means using object of JS
//string is a object 
/*
0:s
1:i
2:m
3:a
4:r
5:4
6:2
*/
// forms key-value pairs keys are 0-6 
// advantage is it comes with a length property and we can apply different methods  on it
console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);
// console.log(gameName[6]);
console.log(gameName.__proto__);//
console.log(gameName.length);// to know about its lenght
console.log(gameName.toUpperCase());
// to convert a string into uppercase original data will not be changed as it is stored in stack memory
console.log(myName.charAt(2));
// to know about the character in the position by giving the index number
console.log(gameName.indexOf('r'));
// to know about the index number of character by giving its name
const newString = gameName.substring(0,4)//will consider 0-3 not 4 
//cannot give negative number itll ignore and start from 0
console.log(newString);
const anotherString = gameName.slice(-7,-4);
console.log(anotherString);//output :- sim
/*
-7:s
-6:i
-5:m
-4:a
-3:r
-2:4
-1:2
*/

const newStringOne = "     hitesh      "
console.log(newStringOne.trim());
const url = "https://simar.comm/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url);
console.log(url.includes("simar"));//true
console.log(url.includes("hello"));//false
const mySelf="simar-42-4202"
console.log(mySelf.split('-'));//it gets converted into array


//methods:-replace, toWellFormed , replace-all , substr , toUpperCase ,slice , bold , fontsize , font color etc

