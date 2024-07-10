const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function startGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" || computerChoice === "lizard"
            ? "You win!"
            : "You lose!";
        break;
      case "paper":
        result =
          computerChoice === "rock" || computerChoice === "spock"
            ? "You win!"
            : "You lose!";
        break;
      case "scissors":
        result =
          computerChoice === "paper" || computerChoice === "lizard"
            ? "You win!"
            : "You lose!";
        break;
      case "lizard":
        result =
          computerChoice === "paper" || computerChoice === "spock"
            ? "You win!"
            : "You lose!";
        break;
      case "spock":
        result =
          computerChoice === "rock" || computerChoice === "scissors"
            ? "You win!"
            : "You lose!";
        break;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
  }
}