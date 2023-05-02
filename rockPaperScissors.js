const moves =  {
    1 : "rock",
    2: "scissors",
    3: "paper"
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    return moves[num]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")
             ||(playerSelection == "scissors" && computerSelection == "paper")
             ||(playerSelection == "paper" && computerSelection == "rock")) {
        return `player`;
    }
    else{
        return `computer`;
    }
}

//animates the selected buttons for player and computer
function animateButton(button, animationClass) {
    button.classList.add(animationClass, 'grow');
    setTimeout(() => {
        button.classList.remove(animationClass, 'grow');
    }, 1000);
}

//updates the scoreboard to reflect round winner
function updateScore(result) {
    if (result == "player") {
        const score = document.getElementById("player-score");
        score.textContent = parseInt(score.textContent) + 1;
    }
    else if(result == "computer"){
        const score = document.getElementById("comp-score");
        score.textContent = parseInt(score.textContent) + 1;
    }
    
}

let roundsPlayed = 0;

const move = document.querySelectorAll('.move-button');
move.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const compSelection = getComputerChoice();
        
        // Animate the player selection
        animateButton(button, 'player-selected');

        // Add a delay before animating the computer selection
        setTimeout(() => {
            const compButton = document.getElementById(compSelection);
            animateButton(compButton, 'comp-selected');
        }, 2000);

        const result = playRound(playerSelection, compSelection);
        //check if the maximum number of rounds has been played, if so give results and reset game board
        updateScore(result);
        roundsPlayed++;
        if (roundsPlayed >= 5) {
            resetGame();
        }
    });
});


function resetGame() {
    const playerScore = document.getElementById("player-score");
    const compScore = document.getElementById("comp-score");

    const playerWins = parseInt(playerScore.textContent);
    const computerWins = parseInt(compScore.textContent);

    const fighters = document.querySelector(".fighters");
    const options = document.querySelector(".options");

    let resultMessage;

    //determine the winner and the message to append
    if (playerWins > computerWins) {
        resultMessage = "Congratulations, you beat the comptuer!"
    }
    else if(playerWins > computerWins){
        resultMessage = "Computer won, better luck next time!"
    }
    else {
        resultMessage = "It's a draw!"
    }

    //hide the mains sections of the site
    fighters.style.display = 'none';

    const outcome = document.createElement('h1');
    const message = document.createTextNode(resultMessage);
    const playAgain= document.createElement('button');
    const request = document.createTextNode("Play again?")
    playAgain.appendChild(request);
    outcome.appendChild(message);
    playAgain.classList.add("play-button");

    options.appendChild(outcome);
    options.appendChild(playAgain);

    roundsPlayed = 0;

    //add event listener to restart the game
    playAgain.addEventListener('click', () => {
        //remove the rest game elements
        options.removeChild(outcome);
        options.removeChild(playAgain);

        //add back the fighters to the options
        fighters.style.display = 'flex';

        //reset the scores
        playerScore.textContent = '0';
        compScore.textContent = '0';
    });

}

//To-do smooth out animation, so that next cycle of moves can start if player presses next one early/ or else block out moves until animation is finished

