/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let playerWins = 0;
  let computerWins = 0;

  // DOM elements for displaying game information
  const playerDisplay = document.getElementById("playerDisplay");
  const computerDisplay = document.getElementById("computerDisplay");
  const resultDisplay = document.getElementById("resultDisplay");
  const totalPlayerResult = document.getElementById("totalPlayerResult");
  const totalComputerResult = document.getElementById("totalComputerResult");
  const buttons = document.querySelectorAll("#gameButtonContainer button");
  const newGame = document.getElementById("newGame");

  // Function to get a random choice for the computer
  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Function to determine the result of the game based on player's and computer's choices
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

  // Function to update the scores based on the result of the game
  function updateScores(result) {
    if (result === "You win!") {
      playerWins++;
      totalPlayerResult.textContent = `Player Total: ${playerWins}`;
    } else if (result === "You lose!") {
      computerWins++;
      totalComputerResult.textContent = `Computer Total: ${computerWins}`;
    }
  }

  // Function to update the game displays with current choices and result
  function updateDisplays(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `Player: ${capitalizeFirstLetter(playerChoice)}`;
    computerDisplay.textContent = `Computer: ${capitalizeFirstLetter(computerChoice)}`;
    resultDisplay.textContent = `Result: ${result}`;
  }

  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Function to check if the game is over (i.e., if either player or computer has won 3 rounds)
  function checkForGameOver() {
    if (playerWins === 3 || computerWins === 3) {
      lockButtons();
      displayEndMessage(playerWins === 3 ? "🎉 VICTORY, you're cool! 🎉" : "💀 Try again! 🤝");
    }
  }

  // Function to display a message at the end of the game
  function displayEndMessage(message) {
    const endMessage = document.createElement("div");
    endMessage.textContent = message;
    endMessage.style.color = "white";
    endMessage.classList.add("game-message");
    document.getElementById('resultContainer').append(endMessage);
  }

  // Function to disable all game buttons (used when the game is over)
  function lockButtons() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  // Event handler for when a game button is clicked
  function handleButtonClick(event) {
    const playerChoice = event.currentTarget.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineResult(playerChoice, computerChoice);
    updateScores(result);
    updateDisplays(playerChoice, computerChoice, result);
    checkForGameOver();
  }

  // Function to reset the game to its initial state
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

  // Add event listeners to each game button to handle player choices
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  // Add event listener to the "New Game" button to reset the game
  newGame.addEventListener("click", resetGame);
});