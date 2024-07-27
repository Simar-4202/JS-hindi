// const coding = ["python","javascript","ruby","c#","c++","go" ];
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);//not returning values showing undefined to solve this we have to return item but still undefined
// //conclusion no values is returned by forEach 



//filter
// name.filter(function) to return some thing like forEach loop
// const myNums = [1,2,3,4,5,6,,7,8,9,10];
// //some more methods
// const newNums= myNums.filter((num)=> {num>4} );//will give empty array if no return keyword is used
// console.log(newNums);

// const newNums2= myNums.filter((num)=> {num>4
// return num>4}
//  );
// console.log(newNums2);
// // scope tooo return
// // no scope so no return

// const newNums3= myNums.filter((num)=> num>4 
   
//      );

// const newNums4 = [];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums4.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {
        title: 'Book One' , genre: 'fiction',
        publish: 1981,
        edition: 2004    },
    {
        title: 'Book TWo' , genre: 'non-fiction',
        publish: 1992,
        edition: 2008    },
        {
            title: 'Book three' , genre: 'History',
            publish: 1999,
            edition: 2007    },
        {
            title: 'Book four' , genre: 'non-fiction',
            publish: 1989,
            edition: 2010    }
]

// const genres=[];
// books.forEach((item)=>{
//     if (item["genre"]==="non-fiction"){
//         genres.push(item);
//     }

// })
// console.log(genres);

const userBooks=books.filter((item)=>{item.genre==="non-fiction"
    return item.genre==="non-fiction";
})
console.log(userBooks);

const userBooks2=books.filter((item)=>
    {
    return item.publish===1999 && item.genre==="History";
})
console.log(userBooks2);