document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let playerWins = 0;
  let computerWins = 0;
  const playerDisplay = document.getElementById("playerDisplay");
  const computerDisplay = document.getElementById("computerDisplay");
  const resultDisplay = document.getElementById("resultDisplay");
  const totalPlayerResult = document.getElementById("totalPlayerResult");
  const totalComputerResult = document.getElementById("totalComputerResult");

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

      if (result === "You win!") {
        playerWins++;
        totalPlayerResult.textContent = `Player Total: ${playerWins}`;
      } else {
        computerWins++;
        totalComputerResult.textContent = `Computer Total: ${computerWins}`;
      }

      if (playerWins === 3) {
        console.log("Player wins the game!");
      } else if (computerWins === 3) {
        console.log("Computer wins the game!");
      }
    }

    playerDisplay.textContent = `Player: ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    computerDisplay.textContent = `Computer: ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    resultDisplay.textContent = result;
  }

  const buttons = document.querySelectorAll("#gameButtonContainer button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = button.getAttribute("data-choice");
      startGame(playerChoice);
    });
  });
});
