// browser gives some properties like length and some methods (prototype)
function multiplyBy5(num){
    this.num = num;
    return num*5;
}


multiplyBy5.power = 2;//.axes to object k sath lgta h like user.username
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
//prototype sirf methods nhi uske sath kuch properties bhi deta h iss function ki bhi to koi property hogi kuch reference to hoga or this.num is parenthesis me store hoga
//prototype ki properties + this store hota h
//"empty parenthesis"  by default kuch context set hote h uss, uss method ka this h
//hr chij object hi hoti 
//function function bhi h object bhi h

//behaviour = function
//bna skde h = object


//object ka prototype null hota h


function createUser(username, score){
    this.username = username;
    this.score = score;

}

//so this is prototype inheritance where properties of father or grandfather that is object will be in child 


//kya main apni koi functionality inject kra skda hu kisi ese function k andr
//yes

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is${this.score}`)
}
//kisike pass context nhi h mtlb is increment wale function ko bulaya ksine h
const chai = createUser("chai",25);
const tea = createUser("chai",250);
chai.printMe