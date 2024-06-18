const userEmail={} ;
if(Object.keys(userEmail).length!==0){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}
//falsy values

//false, 0 ,-0, BigInt 0n, "", '' , null ,undefined , NaN

//truthy all others
//"0" ,'false'," ",[],{}, function(){}

// to find array or object is empty or not
// if (userEmail.length === 0){
//     console.log(`array is empty`);
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log(`object is empty`);
// }

/*
false==0 --->true
false=='' --->true
0=='' --->true
*/


//Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10//got 5(first one)
// val1 =null ?? 10 //got 10 
// sometimes user apply condition if a code return value print that otherwise go with null so here value was 10 so it continued with 10
// val1 = undefined ?? 15 //got 15
val1 = null ?? 10 ?? 15 //jo pehle agiya 10
console.log(val1)


//terniary Operator 
//condition? true : false

const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("price of tea less than 80"): console.log("more than 80")