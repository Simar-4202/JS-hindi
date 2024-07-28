// // ES6 k baad

// //eh sb syntactical sugar h mtlb bs upr se h sb kuch new keyword se hi ho raha h

// //class mein properties bhi add kr skte h aur function bhi
// class User{
//     constructor(username, email, password){
//   this.username = username;
//   this.email = email;
//   this.password = password;
//     }
//  //jese hi class se object initialize hoga (new) vese hi constructor apne aap initialize hoga
//  encryptPassword(){
//     return `${this.password}abc`
//  }
//  changeUsername(){
//     return `${this.username.toUpperCase()}`
//  }
// }

// const chai = new User("simar", "simar@emikdd.com","223")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the sceme 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}
const tea = new User("tea","tea@","teee")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());