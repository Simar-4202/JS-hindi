let myNewDate = Date.now();
console.log(myNewDate);
let CurrentDate= new Date("2024-06-05")
console.log(CurrentDate.getTime());
console.log(Math.floor((myNewDate-CurrentDate.getTime())/1000));
console.log(myNewDate.toLocaleString('default',{
    day:"numeric"    
}))