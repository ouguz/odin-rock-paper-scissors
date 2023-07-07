// getting a random choice from the pc
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

let playerCount = 0;
let computerCount = 0;
let drawCount = 0;
let roundNo = 1;

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (event) => {
  const target = event.target;
  if (target.nodeName === 'BUTTON') {
  playRound(event.target.getAttribute('id'),getComputerChoice());
}});
const texts = document.querySelector('#texts');
const para = document.createElement('p');
para.textContent = `Welcome to the Game!`;
texts.appendChild(para);
const paraWin = document.createElement('p');
paraWin.style.fontSize = '48px'
texts.appendChild(paraWin);
const paraLose = document.createElement('p');
paraLose.style.fontSize = '48px'
texts.appendChild(paraLose);
const resetButton = document.querySelector('#reset-button');
// resetButton.addEventListener('click', () => {
//   resetResults();
//   console.log(playerCount);
//   console.log(computerCount);
// });




// this function executes one round of the game.
function playRound(playerSelection, computerSelection) {
    // const playerChoice = prompt("rock, paper or scissors?");
    // playerSelection = playerChoice.toLowerCase();
    // const computerChoice = getComputerChoice();
    // computerSelection = computerChoice;
    // console.log(`Round Number: ${roundNo}`)
    // console.log(`player choice: ${playerChoice}`);
    // console.log(`computer choice: ${computerChoice}`);

    // if (playerCount === 5 || computerCount === 5) {
    //   return para.textContent = "finished";
    // };

    resetButton.addEventListener('click', () => {
      playerCount = 0;
      computerCount = 0;
      paraWin.textContent = `Wins: ${playerCount}`;
      paraLose.textContent = `Loses: ${computerCount}`;
      para.textContent = 'New Game! Let\'s start';
    });

    
    switch (true) {
        case (playerCount === 5 || computerCount === 5):
          break

        case (playerSelection === computerSelection):
            drawCount++;
            countFollow();
            roundNo++;
            return para.textContent = "Draw";
      
          case (playerSelection === "rock" && computerSelection === "paper"):
            computerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "Game Over. You Lose!";
            }
            return para.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
      
          case (playerSelection === "rock" && computerSelection === "scissors"):
            playerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "You Win The Game! Congrats!";
            }
            return para.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
      
          case (playerSelection === "paper" && computerSelection === "rock"):
            playerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "You Win The Game! Congrats!";
            }
            return para.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
      
          case (playerSelection === "paper" && computerSelection === "scissors"):
            computerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "Game Over. You Lose!";
            }
            return para.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
      
          case (playerSelection === "scissors" && computerSelection === "rock"):
            computerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "Game Over. You Lose!";
            }
            return para.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
      
          case (playerSelection === "scissors" && computerSelection === "paper"):
            playerCount++;
            countFollow();
            roundNo++;
            if (playerCount === 5 || computerCount === 5) {
              return para.textContent = "You Win The Game! Congrats!";
            }
            return para.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
        default: return para.textContent =("This round is invalid! Please type carefully!");
    }
}

// this function executes 5 rounds of the game.
// I don't know how to implement loops yet so I used no-brainer technique in here lol
function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log("Final Results:")
    console.log(`Wins: ${playerCount}`);
    console.log(`Draws: ${drawCount}`);
    console.log(`Loses: ${computerCount}`);
    if (drawCount > playerCount && drawCount > computerCount) {
        console.log("This is a tie!");
    } else if (playerCount > computerCount && playerCount >= drawCount) {
        console.log ("You win the game!");
    } else if (computerCount > playerCount && computerCount >= drawCount) {
        console.log( "You lose! the game");
    } else if (computerCount === playerCount && playerCount > drawCount) {
        console.log ("This is a tie!");
    }
    resetResults();
    return ("Game is over.")
}

//this gives the results of the every round
function countFollow() {
  paraWin.textContent =(`Wins: ${playerCount}`);
  // pararesults.textContent =(`Draws: ${drawCount}`);
  paraLose.textContent =(`Loses: ${computerCount}`);
}

// thins func resets the results for a new game
function resetResults() {
    // drawCount -= drawCount;
    // playerCount -= playerCount;
    // computerCount -= computerCount;
    // roundNo -= (roundNo - 1);
    playerCount = 0;
    computerCount =0;
}