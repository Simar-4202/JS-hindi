// console.log("S");
// console.log("I");
// console.log("M");
// console.log("A");
// console.log("R");

function functionName(){
    console.log("S");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("R");
}

// functionName();//how to execute
functionName//its just reference saying name

// when function is defined it has parameters
// function addTwoNumbers(number1, number2) {
//       console.log(number1+number2);
// }
// addTwoNumbers();//will give NaN as no argument or number1,2 given
// addTwoNumbers(3, 4);//arguments when using function
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);
//so to solve this problem we check that is data in number1 and 2 are  numbers of not
// function addTwoNumbers(number1, number2) {
//     let result = number1+ number2
//     return result;
//     // after return no function will be executed
//     console.log("simar");
//     return number1 + number2;
// }

// const result = addTwoNumbers(3,5)
// console.log("result:",result);//undefined??? 
//return means what function will return 0,any output,true,false or anything after execution
function loginUserMessage(username = "sam")//default value
{
   // if (username === undefined)
   //empty string is false value
   //undefined is false value
   //if statement runs when statement is true 
   //but undefined is false means username will be also false as it is not defined soo
   //!username will be true
   if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());
console.log(loginUserMessage(null));
console.log(loginUserMessage("abc4"));

//!(not) true toooo false ./false to trueee

// situation
// in Ecommerce website we dont know how much items a customer will add in cart we just have to add money because of which we know know how much arguments to have 

function calculateCartPrice(num1){
    return num1;
}
function calculateCartPrice(...num1){
    return num1;
}
function calculateCartPrice(val1,val2,...num1){
    return num1;
}//here val1: 200 val2:400 ...num will be other
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500));// items were more but was not calculated

//--------------> here we use rest operator(...)



//how to use object in a function

const user = {
    username : "Simar",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
   
}
// handleObject(user);

handleObject({
    username : "sam",
    price : 399
})

const myNewArr=[200,300,600,90]
function returnSecondValue(getArray){   return getArray[1];

}
console.log(returnSecondValue(myNewArr));