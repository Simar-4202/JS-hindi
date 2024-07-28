const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector('body')

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(element)=>{
        console.log(element);
        console.log(element.target);
    if(element.target.id==="grey"){
        body.style.backgroundColor=element.target.id;
    }
    if(element.target.id==="white"){
        body.style.backgroundColor=element.target.id;
    }
    if(element.target.id==="yellow"){
        body.style.backgroundColor=element.target.id;
    }
    if(element.target.id==="red"){
        body.style.backgroundColor=element.target.id;
    }
})})