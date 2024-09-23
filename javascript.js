//variables
let humanScore = 0;
let computerScore = 0;
let computerChoice = 0;
let humanChoice = 0;

//functions
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "Rock";
  } else if (computerChoice == 1) {
    computerChoice = "Paper";
  } else if (computerChoice == 2) {
    computerChoice = "Scissor";
  }
}

function getHumanChoice() {
  humanChoice = prompt("Rock, Paper...Scissor ?!");
  if (humanChoice.toLowerCase() === "rock") {
    console.log(humanChoice + " vs " + computerChoice);
  } else if (humanChoice.toLowerCase() == "paper") {
    console.log(humanChoice + " vs " + computerChoice);
  } else if (humanChoice.toLowerCase() == "scissor") {
    console.log(humanChoice + " vs " + computerChoice);
  }
}

function compareChoices() {
  if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
    console.log("Draw, continue");
    console.log(" Computer: " + computerScore + " You: " + humanScore);
  } else if (
    (humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock") ||
    (humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "paper") ||
    (humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissor")
  ) {
    console.log("You win");
    humanScore++;
    console.log(" Computer: " + computerScore + " You: " + humanScore);
  } else if (
    (humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "scissor") ||
    (humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "rock") ||
    (humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "paper")
  ) {
    console.log("You lose");
    computerScore++;
    console.log(" Computer: " + computerScore + " You: " + humanScore);
  }
}

function playGame(computerChoice, humanChoice) {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    getHumanChoice();
    compareChoices();
  }
}
playGame();
