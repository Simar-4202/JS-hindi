const clock = document.getElementById("clock")
console.log(clock);

//setInterval has 2 parameters 
// 1) function
// 2) divivded by 1000

setInterval(()=>{
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = `${date.toLocaleTimeString()} ${date.toLocaleString("default",{
    weekday:"long",
   
})}`;

},1000)//1000 for 1 sec , 2000 for 2 sec