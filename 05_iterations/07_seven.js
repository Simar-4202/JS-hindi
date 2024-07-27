const myNumers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
// const newNums = myNumers.map((num)=> {return num+10})

const newNums = myNumers
.map((num)=> num*10)//map for any calculations
.map((num)=>{return num+1})//this num is not 1 but a result come after 1st method
.filter((num)=>{return num>=40})//true false wala return hoyega comparisons
console.log(newNums);
//chaining (chains of methods can be infinity) 