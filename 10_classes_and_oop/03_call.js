//call
//call hr jgah use hota tha react version 1 mai
//usecase - call stack jisme sb execute hota h usme global context hota h fir upr se function ka context atta h agr uske andr ek f() h to uska context anta h jese f() hta uska context bhi ht jata h

//jd bhi ek funtion call stack mai ata h to vo apna pura context leke ata h memory ya execution context vo hmesha hi hota h 

//jese global execution context mai hota h na default properties browser API request ho jati h 
//function exceution context mai bhi kuch default properties hoti h


function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("call");
}
function createUser(username,email, password){
    //setUsername(username)//access hoga becz setusername scope k bahr h
    //kya uska execution context iske andr ajayega
    // setUsername.call(username)//no change in object
    setUsername.call(this, username)//apna this na dyo jb dusra f() execution context se htega sb delete ho jayega instead aap apne child ka this lelo
    this.email= email;
    this.password = password;
    
}
const user1 = new createUser("simar" , "simarpreet@email.com" , "1234");

console.log(user1);//email or password ho raha h not usernmae
//call ho bhi raha h becz kamm outsource kr diya 
//lekin f() call ho hi ni raha 
//isme apne call ka reference diya h i know () h but agr isko call krna h to js ne kuch methods jiye h is se implicitily jake aap inhe call kr skte h 