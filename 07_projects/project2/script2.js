const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{   event.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results")

     
    if(height <= 0 || isNaN(height) || height ===""){
        alert("invalid height");
    }
    else if(weight<= 0 || isNaN(weight) || weight === ""){
        alert("invalid weight");
    }
    else{
        const bmi = (weight/ (height*height/10000)).toFixed(2);
        const Text = document.createTextNode(" he ");
        results.appendChild(Text);
        if(bmi<18.6){
            const underweight= document.createTextNode(`you are UnderWeight`);
            document.body.append(underweight)
            
        }
        else if(bmi>=18.6 && bmi<24.9){
            const underweight= document.createTextNode(`you are UnderWeight`);
            document.body.append(underweight)
            
        }
        if(bmi>34.9){
            const underweight= document.createTextNode(`you are UnderWeight`);
            document.body.append(underweight)
            
        }
         results.innerHTML = `<span>${bmi}</span>`
    }
   
      
})