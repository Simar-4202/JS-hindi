// {}//scope(curly braces) is a portion where some program runs
// //comes with any function , if else ,for loop

// // braces in object is for object declaration not a scope

// let a = 10
// const b = 20
// var c = 30

// {}//scope
// console.log(a);
// console.log(b);
// console.log(c);
// let a =300
// if (true){
//     let a = 10
//     const b = 20
//     var c = 30  
//     console.log("inner", a);
// }
// // if after console.log the data come out of scope its wrong or a threat because there are many things in many scope where we assign same variable name and where nothing is returned in function

// //console.log(a);//good didnt came out


// //console.log(b);//good didnt came out


// //console.log(c);//problem as it came out of scope
// //thats why it is recommended not to use a var

// // if its under if else,for,function then its aa block scope
// // if its outside of it its global scope
// // scope k bahr ki value andr a skdo h but andr ki bahr nhi jani chahiye
// console.log(a);

// for(let i=0; i<Array.length;i++){
//     const elemnt = array[i]
// }

//nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube";
        console.log(username);
       
    }
    // console.log(website);

    // two();
}
one();
//bcha icecream bde se mang skda h but bdaa bche se nhi
//big one is one() small one is two()
//child can access variable of parent but parent cant

if(true){
    const username= "hitesh";
    if (username==="hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)//out of scope
}
// console.log(username)//out of scope

//++++++++++++++++++++++++++ interesting ++++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1
}
// addOne(5);

// addTwo();// show error depends on how we declare function
const addTwo = function(num){
    return num + 2;

}
// addTwo(5)