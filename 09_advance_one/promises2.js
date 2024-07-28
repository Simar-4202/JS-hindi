//promises
//promises give the concept of .then and .catch 
//internal tool fetch 
//browser diagram, network calls, browser api's
//js mai classes name ka concept km hota h zyadatar object  hi hota h

//promises object represents the eventual completion (or failure) of an asynchronous operations and its resulting values.
//task queue mai lg giya h but abhi k abhi complete nhi ho skta
//some examples file excess need kernel excess
//database and operations 
//cryptography
//network h

//three state
// pending
// fulfilled 
// rejected

// note :--> zyadatar promises hum consume hi krte h 
//create km hi krte h

/*
fetch('https://something.com').then().catch().finally();
koi response aye to then() mai
koi error ayega too catch() mai
finally() too run hota hi h(isme sb aa jayega)
*/

//consume krne se pehle banana ana chahiye

// const promiseOne = new Promise();

//new keyword se ek new instance milta h(ek object milta h)

//promise libraries like Q and bluebird
// jb promises js mai directly available nhi the but async code to use krna hi hota tha
//so to use promise libraries in core js because of which we can use catch fetch when there were no catch fetch commands in js

// creation and consumption of promises
// yeh apne andr ek callback leta h
//callback k andr callback k andr callback ko reduce krta h

//creation
// new promise(function(){
//    koi method function(){} 
// })

//consumption
// .then(function)
// appply(function)


const promiseOne = new Promise(function(resolve, reject)//promise ya too pura hoga (resolve)ya nhi hoga(rejection)
{
    //cases
    //DO an async task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
});

//consumption
promiseOne.then(function(){
    console.log('promise consume');
  
})
//.then ka relation h resolve k sath iske andr ek callback mita h
//eh function automatically ek argument receive krta h jiska kaam h v jo v resolve se km huya h jo bhi values deni h yaaha return hoti h


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("asyn task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("asyn2 resolved");
})

//creation
const promiseThree = new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve({username:"simar", password: "12345"})
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
        if (!error){
            resolve({username:"simar", password:"123"})
        }
        else{
            reject("ERROR: something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{console.log(user);
    return user.username
}
).then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is solved or rejected");
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username:"simar", password:"123"})
        }
        else{
            reject("ERROR: js went wrong")
        }
    },1000)

});
// async await//gracefully catch handle nhi krte h


//used in database connection async await

async function consumePromiseFive(){
   try {
    const response = await promiseFive ;
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

// promise ek object h ise promiseFive() consume nhi krte promiseFive
//eh directly error ko handle nhi krte
// consumePromiseFive();

// async  function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//     const data = await response.json()//isko tym lgta h to isko await krana pdega
//     // console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()
// //tym leti h cheeje

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then(
    (data)=>{console.log(data);}
)
.catch((error)=>{
    console.log(error);
})