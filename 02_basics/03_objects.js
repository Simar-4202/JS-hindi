//singleton
//object.create
/* are made by constructors 
are unique no instances
*/

// object literals
/* have multiple instances
*/

//key : value
//array has a issue that we can access it by indexes whereas here we can give them name
let Arr =["h","i"]
console.log(Arr[1]);


let mysym1 = Symbol("key1");
let mysym2 = Symbol("key2");
//key:value
const JsUser={
    name:"Hitesh",
    "full name": "hitesh choudhary",
    mysym1 : "mykey1",
    [mysym2] : "mykey1",
    age:18, 
   location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(typeof JsUser['mysym1']);
console.log(JsUser[mysym2]);


JsUser.email = "simar@chatgpt.com"; // to overwrite the content
console.log(JsUser);

//if you want the nobody can change the data you can use
// freeze function
Object.freeze(JsUser);
//if now youll apply chnages it will not chnage anything but will also not show errors
JsUser.email = "simar@.com";
console.log(JsUser);


//functions
JsUser.greeting = function(){
    console.log("hello Js User");
}


JsUser.greetingtwo = function(){
    console.log(`hello Js User, ${this.name}`)
};
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
