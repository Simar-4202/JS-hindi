function randomColor(){
    const hex = "ABCDEF0123456789";
    let color = "#";
    for(i=0 ; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
return color;
}
// console.log(randomColor());
let intervalId;
function changeColor(){
    if(intervalId === null || !intervalId){
    intervalId = setInterval(changingbgColor,1000)
}
}
function changingbgColor(){
    document.body.style.backgroundColor = randomColor();
}
function stopChangingColor(){
    clearInterval(intervalId);
    intervalId=null;
}


document.querySelector("#start").addEventListener("click",changeColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);