function getComputerChoice() {
  let u = Math.ceil(1);
  let w = Math.floor(3);
  let choice = Math.floor(Math.random() * (w - u + 1) + u);
  switch (choice) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
}
let gameOver = false;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.textContent.toLowerCase());
  });
});
let human = 0;
let comp = 0;
let round = 0;
c1 = document.querySelector("div");
let humanScore = document.querySelector("#humanScore");
let compScore = document.querySelector("#compScore");
function playGame(humanChoice) {
  if (gameOver == true) {
    return;
  }

  let compo = getComputerChoice();

  if (humanChoice === compo) {
    // Draw
  } else if (
    (humanChoice === "rock" && compo === "scissors") ||
    (humanChoice === "paper" && compo === "rock") ||
    (humanChoice === "scissors" && compo === "paper")
  ) {
    ++human;
  } else {
    ++comp;
  }
  ++round;
  humanScore.textContent = human;
  compScore.textContent = comp;

  if (human == 5) {
    let c6 = document.createElement("p");
    c6.textContent = "You won";
    document.body.appendChild(c6);
    gameOver = true;
  } else if (comp == 5) {
    let c6 = document.createElement("p");
    c6.textContent = "You lost";
    document.body.appendChild(c6);
    gameOver = true;
  }
}
