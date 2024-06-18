const user = {
    username : "Simar",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //this is used to excess current content
        // console.log(this);//give current context
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
// console.log(this);//here current context is empty parenthesis as in global scope there is nothing in node environment
//but in browser global object(scope) is window object which is used to access different features like alert prompt etc

//function chai(){
    //     let username = "hitesh"
    //     console.log(this)
    // in empty function give alot of details like global and  some values

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)//
//gives undefined
//     //cannot access it because of which it is only used in object mein function
// }
// chai();

// const chai =function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai();

// const chai = ()=>{
//     let username = "simar"
//     console.log(this)//empty paarenthesis not extra data becz of which "this" is not used in arrow function and can be used in other ones
//     console.log(this.username)//no value{}
// }
// chai();

//+++++++++++++++arrow function+++++++++++++++++
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

//implicit return you dont need to write return keyword as your function is of one line
// const addTwo = (num1,num2)=> num1+num2


// const addTwo = (num1,num2)=> (num1+num2)

// console.log(addTwo(3,4));

//curly braces to return likhna pdhega
//parenthesis no need to write return

// const addTwo = (num1,num2)=> {username:"hitesh"}//wrong need to be in parenthesis

// const addTwo = (num1,num2)=> ({username:"hitesh"})
// console.log(addTwo(3,4));

const myArray=[2,5,3,7,8]
// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())
