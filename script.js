function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let playerCount = 0;
let computerCount = 0;
let drawCount = 0;

function playRound(playerSelection, computerSelection) {
    const playerChoice = prompt("rock, paper or scissors?");
    playerSelection = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    computerSelection = computerChoice;
    console.log(`player choice: ${playerChoice}`);
    console.log(`computer choice: ${computerChoice}`);


    switch (true) {
        case (playerSelection === computerSelection):
            drawCount++;
            return "Draw";
      
          case (playerSelection === "rock" && computerSelection === "paper"):
            computerCount++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
      
          case (playerSelection === "rock" && computerSelection === "scissors"):
            playerCount++;
            return `You win! ${playerChoice} beats ${computerSelection}`;
      
          case (playerSelection === "paper" && computerSelection === "rock"):
            playerCount++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
      
          case (playerSelection === "paper" && computerSelection === "scissors"):
            computerCount++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
      
          case (playerSelection === "scissors" && computerSelection === "rock"):
            computerCount++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
      
          case (playerSelection === "scissors" && computerSelection === "paper"):
            playerCount++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        default: return "you!";
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Wins: ${playerCount}`);
    console.log(`Draws: ${drawCount}`);
    console.log(`Loses: ${computerCount}`);
    if (drawCount > playerCount && drawCount > computerCount) {
        return "This is a tie!";
    } else if (playerCount > computerCount && playerCount >= drawCount) {
        return "You win!";
    } else if (computerCount > playerCount && computerCount >= drawCount) {
        return "You lose!";
    } else if (computerCount === playerCount && playerCount > drawCount) {
        return "This is a tie!"
    }
}