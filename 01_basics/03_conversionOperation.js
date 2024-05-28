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