//generate a random color
//hexadecimal start from 1 to 9 and A to F

const randomColor=()=>{
    const hex ="1234567890ABCDEF"
    let color = "#"
    for(i=1; i<=6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
function startChangingColor (){
    if(!intervalId || intervalId === null ){
    intervalId = setInterval(changeBackgroundColor,1000);
}
    function changeBackgroundColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
function stopChangingColor (){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);


