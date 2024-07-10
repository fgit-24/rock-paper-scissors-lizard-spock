document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let playerWins = 0;
  let computerWins = 0;

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
      }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
  }

  const buttons = document.querySelectorAll("#gameButtonContainer button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = button.querySelector("img").alt;
      startGame(playerChoice);
    });
  });
});
