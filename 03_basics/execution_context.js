/* JAvascript Execution Context 

2 phase
--> global execution context<-- referred to this keyword /node has empty object //browser has window object
--> Function Execution Context
--> eval execution context (not that important)
*/

// memory creation phase/memory phase / creation phase

// Execution phase

let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 +num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10,2);