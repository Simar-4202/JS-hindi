// for loop

/*
for (station
}rt ; end ; change){
    //code execu
*/

//ctrl+d
/*
for (let i = 0; i <=10; i++) {
    let element = i;
    if (element == 5 ){
        console.log("5 is best number");
    }
  console.log(element);
    
}*/
// initialise 
// --> checks condition 
// ---> if true runs the block scope 
// ---> if fails will be out of scope not run it
// console.log(i); will not be executed block scope

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 0; j <=10; j++) {
//     //   console.log(`inner loop value ${j} and inner loop ${i}`)
//       //j can access value of i becz that is global(parent) scope for j

//       console.log(i + '*' + j+ '=' + i*j);// to print TABLE
//     }
    
// }

// let myArray =['flash','batman','superman']//length is 3 
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue
//it is not needed to finish every loop if started we can stop it using break

// for (let i = 1; i <=20; i++){
//     if(i==5){
//         console.log('detected 5');
//         break;//exit control flow and rest  of the  loop will not work
//     }
//     console.log(`value of i is ${i}`);;
    
// }


// for (let i = 0; i <=10; i++){
//     if(i==5){
//         console.log('detected 5');
//         continue;//exit at 5 and then continue at 6(condition can be skipped )
//     }
//     console.log(`value of i is ${i}`);;
    
// }


const arr=["hello","simar","kiran","harman"]
for(i=0;i<arr.length;i++){
    const element=arr[i];
   
    if (element=="kiran"){
        continue;
    }
    console.log(element);
}