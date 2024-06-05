console.log(2>1);
//give answers in boolean (true)
console.log(2>=1);//give answers in boolean (true)
console.log(2==1);//give answers in boolean (false)
console.log(2!=1);//give answers in boolean (true)

/*this are the common comparisons where we compare data of same datatype*/

//but what we we compare datas of two different datatypes

// ALWAYS COMPARE DATA OF SAME DATATYPES
console.log("2">1);
console.log("02">1);

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
/* the reason is an equality check i.e == and comparisons <,>,<=,>= work differently

comparisons convert null to number 0 so in first case 0>0 gives false
 and 0>= 0 gives true 

whereas in 2nd situation null converts to NaN and gives false
*/
console.log(undefined ==0);
console.log(undefined >=0);
console.log(undefined <=0);
//gives false only


// comparison and equality checks are totally different


//strict check (===)
//it checks datatype to if they're not equal it will give error

console.log("2"=== 2);


/////avoid these types of comparisons 