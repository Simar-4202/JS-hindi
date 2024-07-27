//array ya object k liye loop

//for of
// ["","",""]
// [{},{},{}]

//iterator ==> object, array ,string

//on array
const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
//will automatically see where to start where to end,no increment,no decrement need to mention


//on String
const greeting = "hello world!";
for (const greet of greeting) {
    console.log(`each char is ${greet}`)
}

//maps

const map = new Map()//its also a object
//remember the original insertion order of keys
//no duplicate keys
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")//cannot be added as no duplicate data is allowed in map


console.log(map);
for (const key of map) {
    console.log(key);// will give the key and value in arrays
}
//[key] destructure ho jana h syntax h
for (const [key] of map) {
    console.log(key);
}
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value)
}
const myObject = {
    game1: 'NFS',
    game2:'Superman'
}
for (const [key,values] of myObject) {
    console.log(key, ":-" ,value)
}// not iterable forof loop not working on Object