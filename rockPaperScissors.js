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
    button.classList.add(animationClass);
    setTimeout(() => {
        button.classList.remove(animationClass);
    }, 1500);
}

//updates the scoreboard to reflect round winner
function updateScore(result) {
    if (result == "player") {
        console.log("big time winner")
    }
    else if(result == "computer"){
        console.log("big time loser")
    }
}

const move = document.querySelectorAll('.move-button');
move.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const compSelection = getComputerChoice();
        
        if (playerSelection == compSelection) {
            animateButton(button, 'draw');
        } else {
            // Animate the player selection
            animateButton(button, 'player-selected');

            // Animate computer selection
            const compButton = document.getElementById(compSelection);
            animateButton(compButton, 'comp-selected');
        }

        const result = playRound(playerSelection, compSelection);
        
        updateScore(result);
    });
});



//   function game(){ 
//     let playerWins = 0; 
//     let computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let play = prompt("Enter your move");
//         let outcome = playRound(play, getComputerChoice());
//         console.log(outcome);
//         if (outcome.includes("win")) {
//             playerWins++;
//         }
//         else if (outcome.includes("lose")) {
//             computerWins++;
//         }
//     }
//     if (computerWins > playerWins) {
//         console.log("Computer has won the most games");
//     }
//     else if(playerWins > computerWins){
//         console.log("Player has won the most games");
//     }
//     else {
//         console.log("Draw overall");
//     }

//   }

  
   
