
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let height = parseInt(document.getElementById("height").value);
    // console.log(height);
    let weight = parseInt(document.getElementById("weight").value);
    // console.log(weight);
    const results = document.querySelector("#results")
    if(height==="" || isNaN(height) || height<1){
        results.innerHTML=`Invalid height`;
    }
    else if(weight==="" || isNaN(weight) || weight<1){
        results.innerHTML=`Invalid weight`;
    }
    else{
        const bmi = weight / (height*height/10000).toFixed(2);
        if(bmi<18.6){
            const underweight = document.createTextNode(`you are underweight  ${bmi}`);
           results.append(underweight)
        }
        else if(bmi<=18.6 && bmi<24.9){
            const weight = document.createTextNode(`you are Normal ${bmi}`);
            results.append(weight)
        }
        else if(bmi>24.9){
            const overweight = document.createTextNode(`you are overweight ${bmi}`);
            results.append(overweight)
        }

        
       
    }
})