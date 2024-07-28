const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result")
    if(height === undefined || height === " " || isNaN(height)){
        console.log("height is invalid");
    }
    else if(weight === undefined || weight === " " || isNaN(weight)){
        console.log("weight is invalid");
    }
    else{
        const bmi = weight/(height*height);
        if(bmi)
    }
})