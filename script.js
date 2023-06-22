function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = prompt("rock, paper or scissors?");
    playerSelection = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    computerSelection = computerChoice;
    console.log(`player choice: ${playerChoice}`);
    console.log(`computer choice: ${computerChoice}`);

    switch (true) {
        case (playerSelection === computerSelection):
            return "Draw";
            break;
        case (playerSelection === "rock" && computerSelection === "paper"):
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return `You win! ${playerChoice} beats ${computerSelection}`;
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;   
        default: "you!";
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}