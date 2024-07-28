// browser gives some properties like length and some methods (prototype)

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));//
console.log(multiplyBy5.power);//its like axes in object user.username //2
//js mai hr ek chij ek object h
//function ki jo working ya functionality h vo function ki krah h
//lekin agr aap chahe too kisiko bhi ek object ki trah behave kra skte ho
//because end of the day sb object hi bn jayega becz uske upr kuch nhi h

console.log(multiplyBy5.prototype);//{}
//by default kuch context set hote h ,by default jo context set hota h prototype ka, uss method ka "this" h
//eh sirf methods nhi uske sath sath kuch properties bhi deta h 
//function ki bhi to property hogi
//prototype ki properties+this


// *********** next **************//

function createUser(username, score){
    this.username = username ;
    this.score = score;
}

//kya mai meri functionality inject kr skta hu function k ander jese slice etc h???
//yes lets see them*************

//f() is --> object,object mai property hoti h or ek property hmara function hold krlegi
// property: function

createUser.prototype.increment = function(){
    //score++
    //increment chai pe lgega yya tea pai? becz uske pass context nhi h(kisne call kiya h)
    // (kispr apply hona h vo nhi pta)
    this.score++
    //jisne bhi bulaya(this means jiss)
}//prototype k andr properties h so increment ek property (key) h jiski value function h


createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);//this means jiss jisne bhi bulaya usko print krdo
}
// const chai = createUser("chai" , 25)
// const tea = createUser("tea" , 250)


const chai = new createUser("chai" , 25)
const tea = new createUser("tea" , 250)
// myArray.prototype.map()
//ese thodi likhte h jabbhi array pai jate h to direct hi likhte h myArray,map eh behund the scene apne aap kr leta h esse hi hmm krege

chai.printMe()//cannot read the properties of undefined
// printMe,increment properties inject hoi h lekin jd function se chai ya tea pr value transfer kri to apne usko bataya nhi ki merepass eh additional properties ayi h
//or eh new keyword krta h

// ************ new keyword ki functionality ************************//
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
const gameName = new String("simar42");
console.log(gameName.__proto__);