let score=null;

console.log(typeof (score));

let valueInNumber = Number(score); //capital format
console.log(typeof (valueInNumber ));
console.log(valueInNumber);
// JS will convert any datatype to number but its value can be NaN /undefined or anything


//"33" => 33
// "33abc" => NaN(not a number)
// true => 1 /false => 0
// null => 0
// undefined => NaN(not a number)

let isloggedin=null;
console.log(typeof isloggedin);

let number=Number(isloggedin);
console.log(typeof number);
console.log(number);

// true => 1 / false => 0
// null => 0
// undefined or string => NaN

let isLoggedIn = undefined;
console.log(typeof isLoggedIn);
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true / 0 => false
/* string empty=>false
    data => true */
// null => false
// undefined => false 

let someNumber=33
let stringNumber= String(someNumber);
console.log(typeof stringNumber);
//number =>  string 






// ******************************************Operations******************************************8

let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//exponent 2^3=2*2*2
console.log(2/3);//divide
console.log(2%3);//remainder

 let str1="hello";
 let str2 = " hitesh";
 console.log(str1+str2);//can only be  added
 console.log("1"+2);
 console.log(1+"2");
 console.log("1"+2+2);//why 122 not 14 ?
 console.log(1+2+"2");//AYEIN why 32?? why not 122 again
 //if string is first whole will be treated as a string whereas if number is first it will go arthematic operations
 
 
 console.log( 3 + 4 * 5 % 3);// its completely wrong we must use paranthesis to reduce complexity

 console.log((3+4)*(5%3));//use paranthesis 

console.log(true);// give true as a result
console.log(+true);//give 1 as it is boolean we have shown increment so it gets converetd into number(give value)
//console.log(true+);// will give errorr
console.log(+"");//give 0
let num1 , num2 , num3;
num1 = num2 = num3 = 2+2;
let gameCounter = 100;
gameCounter++ ;
console.log(gameCounter);
++gameCounter ;
console.log(gameCounter);

//prefix and postfix JS and MDN