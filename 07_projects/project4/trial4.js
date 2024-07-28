let randomNumber = parseInt(Math.random()*100)+1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

prevGuess = [];
numGuess = 1;
const p = document.createElement('p')
const playTime = true;
if(playTime){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        let guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a valid number");
    }
    else if(guess>100){
        alert("Please enter the number lower than 100");
    }
    else if(guess<1){
        alert("Please enter the number greater than 1");
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            cleanUpGuess(guess);
            displayMessage(`Game Over! the random number was ${randomNumber}`);
            endGame();

        }
        else{
            cleanUpGuess(guess);
            checkGuess(guess);
           
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! you guessed it Correct`);
        endGame();
    }
    else if(guess >= randomNumber){
        displayMessage(`the Number u guesses is too high than the real one`)
    }
    else if(guess <= randomNumber){
        displayMessage(` the Number u guesses is too low than the real one`)
    }
}

function cleanUpGuess(guess){
    userInput.value=" ";
    guessSlot.innerHTML += `${guess} ,`;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",(e)=>{
        randomNumber=parseInt(Math.random()*100)+1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = " ";
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute("disabled");
        displayMessage("")
        startOver.removeChild(p);
        playGame = true;
    })

}