let randomNumber = parseInt(Math.random()*100)+1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}



//to check whether guess user given is between 1 to 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number");
    
    }
    else if(guess<1){
        alert("Enter number greater than 1")
    }
    else if(guess>100){
        alert("PLease enter the number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            cleanUpGuess(guess)
            displayMessage(`Game Over!.random number was ${randomNumber}`)
            endGame();
        }
        else{
            cleanUpGuess(guess)
            checkGuess(guess);
        }
    }

}

//to give message to user what is the problem in their guess is it low or higher than the random number if both r same make user win 
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Congratulations! you guessed it right`)
        endGame();
    }
    else if(guess >= randomNumber){
        displayMessage(`the random number is Tooo low`)
        
    }
    else if(guess <= randomNumber){
        displayMessage(`the random number is Tooo high`)
       
    }
}

//clean values, update array,guess remaining chnage krega 
//to pass a message ,interact with dom
//user value to empty and inner html mai guess ko add krege and remaining ko -1 krdenge
function cleanUpGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess},`
    remaining.innerHTML = `${10 - numGuess}`
    numGuess++;
}

//lowOrHi mai message display krega
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled","")
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false ;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",(e)=>{
        randomNumber =  parseInt(Math.random()*100)+1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = " ";
        remaining.innerHTML= `${11- numGuess} `
        userInput.removeAttribute("disabled")
        displayMessage(``)
        startOver.removeChild(p);
          playGame = true;
    })
}