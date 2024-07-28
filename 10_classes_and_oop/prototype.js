let myName = "hitesh     "
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength());//give length with no space it can be done by trim but lets doo it

let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


// *************
// to instead of giving power to array, string sidha object ko power dedo becz last mai to vahi bna h aur sb pr implement ho jayega
// Object.create///factory function vo f() jo isko create,apply vgera krne k kaam aye


// heroPower.hitesh()//ese krne se koi result ayega

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()

//********array bhi too object k through jayega */

myHeroes.hitesh()

// ******* agr mai property array ko du kya vo object k pass apne aap chli jatti h??
//idt


Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

myHeroes.heyHitesh()
// heroPower.heyHitesh() nyc becz its not given to object


// ############# INHERITANCE ################//

const User = {
    name: "simar",
    email:"Simar@google.com"
}
const Teacher = {
    makeVideo : true,
}
const TeachingSupport = {
    isAvailable : false ,
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport//reference krdo teachingSupport pai
}
//traditionally,object mai property or function add krte the
Teacher.__proto__ = User//Teacher can access the properties of user
//ab 2 objects ko link krne k liye prototype mai ek propery h __proto__
//ek property h __proto__ can be used by . or property name in object


// inheritance kya h -: ek object jb dusre object ki properties ko access kr skta h

//default properties too sb k pass h length,slice lekin kisi testObj k andr rakha hitesh aur sb ko milgiya nhiiiiii


//modern Synatax
Object.setPrototypeOf(TeachingSupport, Teacher)
//method to setUp prototype directly in object
// teachingsupport ko access de diya teacher ki property ki

let anotherUserName = "chaiAurCode     ";
String.prototype.truelength = function(){
    console.log(`${this}`);//reference hi chaiAurCode ka tha
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.truelength()
"hitesh".truelength();
"tea  coofeee     ".truelength()