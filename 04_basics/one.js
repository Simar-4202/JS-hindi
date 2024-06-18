// //if statements
// if(true){
//     //the code will execute
// }
// if (false){
//     //the code here will not be executed and move to next scope
// }

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     //this code will execute
// }


// // <,>,<=,>=,!=(not equal),!==
// // = (assigning value)
// // == (checking whether they are equal or not)
// // === (checks equality and datatype of data)

const temperature=52;
if(temperature<50){
    console.log(`the temperature is ${temperature} which is less than 50`);
    let temp2=temperature-40;
}
else{
    console.log(`the temperature is more the 50`)
}
console.log(`hhehe`);

/*
const score=200;
if(score>100){
    let power ="fly";
    console.log(`user power: ${power}`);

}*/

// console.log(`user power: ${power}`);//show undefined as power is in functional scope which is good

//implicit
// const balance = 1000;
// // if(balance > 500) console.log("test");
// if(balance < 500){
//     console.log("less than");
// }
// else if(balance< 750){
//     console.log(`less than 750`);
// }
// else if(balance < 900){
//     console.log(`less than 900`);
// }
// else{
//     console.log(`less than 1200`);
// }


// &&--> add
// ||--> or
// const userLoggedIn = true;
// const DebitCard = true;
// const LoggedInFromGoogle=true;
// const LoggedInFromEmail=true;
// const guesUser=false;
// if(userLoggedIn && DebitCard && 2==3)
//     //if all the are true then only this will execute if one of three will be false the code in scope will not be executed
//     {
//     console.log('allow to buy course');
// }

// if(LoggedInFromGoogle || LoggedInFromEmail || guesUser){
//     console.log("user logged in");
// }
//if anything maong these 3 is true the code will execute