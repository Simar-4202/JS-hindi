// Object Literal(object{} hi object literal h)
const user = {
    username: "hitesh",
    loginCount : 8 ,
    signedIn : true,
    
    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${username}`);//this not defined
        // console.log(`Username: ${this.username}`);
        console.log(this);//current context jo bhi memory k andr tha
    }
}
// here user is object literal
//properties username loginCount signedIn .length yeh sb properties h
//
//prototypes sare methods h like foreach , map 
//method k andr function hota h
console.log(user["username"]);
// console.log(user.getUserDetails());
console.log(this);//empty paranthesis
//eh change hota h depending upon which API u r using 
//example in web API it is window jo global context hota h

//agr apko baat krni h current context ki tb "this" ka use hota h

//function jb execute hoga to uska ek alg execution context bnega jisme username too hoga nhi to this kya krega usko bahr se lekr ayega ki jo mera wala username h usko leke ayooo

//why undefined?


// *************** Constructor function*************************

const promiseOne = new Promise(function(resolve,reject){})
const date = new Date()

//what is new
// new is construction function()
    //eh bs allow krta h ki ek hi object literal se multiple instances bna skte ho
    //ek hi instance hoga to memory k andr jyada jgah nhi ja rahi

    //but kyi baar hme new instance hi chahiye jese Promise jisme hme purani values ko effect nhi krna hota, apna apna context raakho vaha pe
    //to eh new nya context bnane k kaam atta h aur ise construction function bolte h 

    function User(username, loginCount , isLoggedIn){
        this.username = username//industry level pai name same rakhte h variable or value k
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        this.greetings = function(){
            console.log(`welcome ${this.usernmame}`);        
        }
        return this//use or not eh pehle hi yaha define hota h
    };

    const userOne = new User("hitesh", 12 , true);
    // const userTwo =  User("chaiaurCode", 34 , false)
    const userTwo =  new User("chaiaurCode", 34 , false)
    
    console.log(userOne);//overwrite hogya jbki hmne userTwo print hi ni kraya
    //but values overwrite krdi
    //thats why we use new to form new instance(new copy)


//step 1 new value use kroge to ek empty object(instance) create hoga
// step 2 construction function call hota h new keyword k karn jo ki arguements vgera ko  pack krta h aur apko de deta h
//step 3 this keyword me arguments vgera inject ho jate h
//step 4 mai apko function mil jata h

console.log(userOne.constructor)
// instanceof