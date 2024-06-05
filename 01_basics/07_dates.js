//dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);
// date has a datatype object
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

let myCreatedDate = new Date (2023, 0, 23);
console.log(myCreatedDate.toDateString());//monday january 23 2023
//it means months in js starts f,5,3rom 0 to 11;
let myCreateddDate = new Date (2023, 0, 23,5,3);
console.log(myCreateddDate.toString());//monday january 23 2023
let myNewDate= new Date('2023-01-24');//DD-MM-YYYY months starts from 1
console.log(myNewDate.toDateString());
let myNewwDate= new Date('2023-01-24');//DD-MM-YYYY months starts from 1
console.log(myNewwDate.toDateString());

// -------------------------------------------timestamp------------------------------------------------
let mytimestamp=Date.now();
console.log(mytimestamp);
 let currentDatestamp= new Date('23-04-2020');
 console.log(currentDatestamp)