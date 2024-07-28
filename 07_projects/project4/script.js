console.log(parseInt(Math.random()*100 + 1));
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true;
if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
    alert('please enter a valid Number')
    }
    else if(guess>100 && guess<1){
        alert(`please enter a number between 1 to 100 only`)
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over!! random number was ${randomNumber}` );
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    
}

function displayGuess(guess){

}

function displayMessage(message){

}

function endGame(){

}

function newGame(){

}

