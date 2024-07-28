const form = document.querySelector("form");
// this usecase will give you empty value as it is empty at started and script already run with other html css files 
// const height = parseInt(document.querySelector("#height").value)
// parstInt or Number
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    //form k addeventlistener k andr akke hi 
    //values height and weight ko select kre
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height ==="" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight ==="" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/ (height*height/10000)).toFixed(2);
        if(bmi<18.6){
            const underweight= document.createTextNode(`you are UnderWeight`);
            document.body.append(underweight)
        }
        else if(bmi>=18.6 && bmi<=24.9){
            const normalweight= document.createTextNode(`you are Normal`);
            document.body.append(normalweight)
        }
        else{
            const overweight= document.createTextNode(`you are OverWeight GYM jaa`);
            document.body.append(overweight)
        }
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
      
    }
   
})