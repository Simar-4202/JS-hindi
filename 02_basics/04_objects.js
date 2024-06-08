// const tinderUser = new Object();
// console.log(tinderUser);
// //or
// const tinderUser2 = {}
// //both are same
// //one is singleton 
// //other is object literal
// tinderUser.id = "123abc";
// tinderUser.name = "sunny";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser={
//     email : "i@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Simar",
//             middlename: "preet",
//             lastname: "Singh",
//         }
//     }
// }
// // console.log(regularUser.fullname);

// // console.log(regularUser.fullname?.userfullname);
// // console.log(regularUser.fullname?.userfullname.lastname);

// // console.log(`My name is ${regularUser.fullname.userfullname.firstname}${regularUser.fullname.userfullname.middlename} ${regularUser.fullname.userfullname.lastname}`)

// const obj1 = {1:"a" , 2:"b"};
// const obj2 = {3:"a" , 4:"b"};

// // const obj3 = {obj1 , obj2}

// // Object.assign(target,source)
// const obj3 = Object.assign( obj1, obj2)// here 1st one is a target where all other values are stored 
// //target is here obj1 which is going on changes , rest others are sources
// console.log(obj1);
// const obj4 = Object.assign({}, obj1, obj2)//prefered as in this case target is empty object not a previous objects like obj1
// console.log(obj3);
// console.log(obj4);


// //easiest    spread
// const obj5 = {...obj1 , ...obj2}
// console.log(obj5);

// let arrObj = [
//     {
//         name:"simar",
//         email : "we@gmail.com"
//     },
//     {
//         name:"simar",
//         email : "we@gmail.com"
//     },
//     {
//         name:"simar",
//         email : "we@gmail.com"
//     },
//     {
//         name:"simar",
//         email : "we@gmail.com"
//     }
// ]
// console.log(arrObj[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//took keys of tinderUser and make its array
// // console.log(Object.values(tinderUser));//took values of tinderUser and make its array
// console.log(Object.entries(tinderUser));//each key:value pair will become array and arrays will be in single array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true if property is present
// console.log(tinderUser.hasOwnProperty("isLogged"));//false if property is not present

// +++++++++++++++++++Destructuring++++++++++++++++++++
const course ={
    courseName: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
console.log(course.courseInstructor);


const {courseInstructor:instructor} = course//this is destructuring  where we can make it another variable and give a new name to key 
// console.log(courseInstructor);
console.log(instructor);


//jab apne kaam ko dusre k sirr dalna ho
/*example
aap restaurant gye aur samosa order kiha its not your worry ki wo kaha se aloo laye sb kaise kre 

u jsut have menu and just have to order 
so here menu is your API document
*/

/* like jb user "login with google " krta h its not our headache whether he is verified email h ya nhi etc */

// kuch ni bs thoda data atta h
//pehle it was in xml structure(very complex)
//now in JSON(javascript object notation) which is object without name which is called JSON and here well store it in variables both keys and values are in double quotes
// {

// }
// {
//     "name":"hitesh",
//     "coursename": "js in hindi",
//     "price":"free"
// }


// it can be array too 
[
    {},
    {},
    {}
]
//now we have to learn how to fetch and i will call the url and i will get this data 
//we will convert it into object and can get data


//randomuser.me to get any random API data

//JSON formatter to understand the Api