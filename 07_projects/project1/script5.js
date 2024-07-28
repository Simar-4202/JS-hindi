const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.id==="grey"){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
    })
})
