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
  const newGame = document.getElementById("newGame");

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }

    const winningConditions = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["paper", "spock"],
      spock: ["rock", "scissors"]
    };

    return winningConditions[playerChoice].includes(computerChoice) ? "You win!" : "You lose!";
  }

  function updateScores(result) {
    if (result === "You win!") {
      playerWins++;
      totalPlayerResult.textContent = `Player Total: ${playerWins}`;
    } else if (result === "You lose!") {
      computerWins++;
      totalComputerResult.textContent = `Computer Total: ${computerWins}`;
    }
  }

  function updateDisplays(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `Player: ${capitalizeFirstLetter(playerChoice)}`;
    computerDisplay.textContent = `Computer: ${capitalizeFirstLetter(computerChoice)}`;
    resultDisplay.textContent = `Result: ${result}`;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function checkForGameOver() {
    if (playerWins === 3 || computerWins === 3) {
      lockButtons();
      displayEndMessage(playerWins === 3 ? "VICTORY, you're cool!" : "Try again!");
    }
  }

  function displayEndMessage(message) {
    const endMessage = document.createElement("div");
    endMessage.textContent = message;
    endMessage.style.color = "white";
    endMessage.classList.add("game-message");
    document.getElementById('resultContainer').append(endMessage);
  }

  function lockButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  function handleButtonClick(event) {
    const playerChoice = event.currentTarget.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineResult(playerChoice, computerChoice);
    updateScores(result);
    updateDisplays(playerChoice, computerChoice, result);
    checkForGameOver();
  }

  function resetGame() {
    playerWins = 0;
    computerWins = 0;
    playerDisplay.textContent = "Player:";
    computerDisplay.textContent = "Computer:";
    totalPlayerResult.textContent = "Player Total:";
    totalComputerResult.textContent = "Computer Total:";
    resultDisplay.textContent = "Result:";
    document.querySelectorAll(".game-message").forEach((message) => {
      message.remove();
    });
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  newGame.addEventListener("click", resetGame);
});