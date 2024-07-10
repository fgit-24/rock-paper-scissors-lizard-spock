document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let playerWins = 0;
  let computerWins = 0;
  const playerDisplay = document.getElementById("playerDisplay");
  const computerDisplay = document.getElementById("computerDisplay");
  const resultDisplay = document.getElementById("resultDisplay");
  const totalPlayerResult = document.getElementById("totalPlayerResult");
  const totalComputerResult = document.getElementById("totalComputerResult");
  const buttons = document.querySelectorAll("#gameButtonContainer button");

  function startGame(playerChoice) {
    const computerChoice =
      choices[Math.floor(Math.random() * choices.length)];
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

      if (result === "You win!") {
        playerWins++;
        totalPlayerResult.textContent = `Player Total: ${playerWins}`;
      } else {
        computerWins++;
        totalComputerResult.textContent = `Computer Total: ${computerWins}`;
      }

// Update displays
      playerDisplay.textContent = `Player: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
      }`;
      computerDisplay.textContent = `Computer: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }`;
      resultDisplay.textContent = result;

// Check if player or computer wins the game
      if (playerWins === 3 || computerWins === 3) {
        lockButtons();
        if (playerWins === 3) {
          console.log("Player wins the game!");
        } else {
          console.log("Computer wins the game!");
        }
      }
    }
  }
  
// Function to lock buttons
  function lockButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

// Add event listeners to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = button.getAttribute("data-choice");
      startGame(playerChoice);
    });
  });
});