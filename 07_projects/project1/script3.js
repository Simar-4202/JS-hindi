const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor=e.target.id;
            case "yellow":
                body.style.backgroundColor=e.target.id;
            case "white":
                body.style.backgroundColor=e.target.id;
            case "red":
                body.style.backgroundColor=e.target.id;
        }
    })

})