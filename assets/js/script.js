const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("playerDisplay");

function startGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" || "lizard" ? "You win!" : "You lose!";
        break;
      case "paper":
        result =
          computerChoice === "rock" || "lizard" ? "You win!" : "You lose!";
        break;
      case "scissors":
        result =
          computerChoice === "paper" || "lizard" ? "You win!" : "You lose!";
        break;
      case "lizard":
        result =
          computerChoice === "paper" || "lizard" ? "You win!" : "You lose!";
        break;
      case "spock":
        result =
          computerChoice === "paper" || "lizard" ? "You win!" : "You lose!";
        break;
    }
}

