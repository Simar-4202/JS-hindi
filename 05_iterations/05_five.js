//very very important
//forEach loop(high order function)
const coding= ["js","ruby","java","python","c++"];
//map
//forEach

// coding.forEach( function (item){
//     console.log(item);
// })

//callback function is fn not having any name
//parameter is name to to each element here it is item

//arrow function
// coding.forEach((item)=>{
//     console.log(item);
// })


//one more way
// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item , index , arr)=>{
//     console.log(item,index,arr);
// })
//forEach has access not only to elemnts but access of INDEX AND WHOLE ARRAY

// ["","",""]
// [{},{},{}]
//can be done by forEach

const myCoding = [
    {
        languageName:"javascript",
        languageExtension:"js"
    },
    {
        languageName:"python",
        languageExtension:"py"
    },  
    {
        languageName:"c languagee",
        languageExtension:"c"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})