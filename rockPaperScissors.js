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
        return "Draw. Same move choice";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")
             ||(playerSelection == "scissors" && computerSelection == "paper")
             ||(playerSelection == "paper" && computerSelection == "rock")) {
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    }
    else{
        return `You lose, ${playerSelection} loses to ${computerSelection}!`
    }
  }

  function game(){
    let playerWins = 0; 
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let play = prompt("Enter your move");
        let outcome = playRound(play, getComputerChoice());
        console.log(outcome);
        if (outcome.includes("win")) {
            playerWins++;
        }
        else if (outcome.includes("lose")) {
            computerWins++;
        }
    }
    if (computerWins > playerWins) {
        console.log("Computer has won the most games");
    }
    else if(playerWins > computerWins){
        console.log("Player has won the most games");
    }
    else {
        console.log("Draw overall");
    }

  }

  game();
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound("rock", "rock"));
//   console.log(playRound("paper", "scissors"));
//   console.log(playRound("rock", "scissors"));
  