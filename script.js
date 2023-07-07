function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

let playerCount = 0;
let computerCount = 0;
// let drawCount = 0; //  maybe add it in the future


const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (event) => {
  const target = event.target;
  if (target.nodeName === 'IMG') {
  playRound(event.target.getAttribute('id'),getComputerChoice());
}});

const texts = document.querySelector('#texts');

const para = document.createElement('p');
para.textContent = `Reach 5 first for the win!`;
texts.appendChild(para);

const paraWin = document.createElement('p');
paraWin.style.fontSize = '32px'
texts.appendChild(paraWin);

const paraLose = document.createElement('p');
paraLose.style.fontSize = '32px'
texts.appendChild(paraLose);

const resetButton = document.querySelector('#reset-button');


function playRound(playerSelection, computerSelection) {

    //reset button
    resetButton.addEventListener('click', () => {
      playerCount = 0;
      computerCount = 0;
      paraWin.textContent = `Wins: ${playerCount}`;
      paraLose.textContent = `Loses: ${computerCount}`;
      para.textContent = 'New Game! Let\'s start';
      para.style.backgroundColor = 'white';
      para.style.color = 'black';
    });

    
    switch (true) {
        case (playerCount === 5 || computerCount === 5):
          break

        case (playerSelection === computerSelection):
            // drawCount++;
            countFollow();
            return para.textContent = "Draw";
      
          case ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")):
            computerCount++;
            countFollow();
            if (playerCount === 5 || computerCount === 5) {
              para.style.backgroundColor = 'black';
              para.style.color = 'yellow';
              return para.textContent = "Game Over. You Lose!";
            }
            return para.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
      
          case ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")):
            playerCount++;
            countFollow();
            if (playerCount === 5 || computerCount === 5) {
              para.style.backgroundColor = 'black';
              para.style.color = 'yellow';
              return para.textContent = "You Win The Game! Congrats!";
            }

            return para.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
        default: return para.textContent =("This round is invalid! Please type carefully!");
    };
};

function countFollow() {
  paraWin.textContent =(`Wins: ${playerCount}`);
  paraLose.textContent =(`Loses: ${computerCount}`);
}
