"use strict";

const displayMessage = function (message) {
  document.querySelector(".guess").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input_number").value);
  if (!inputNumber) {
    displayMessage("⛔ No Input Number!");
  } else if (inputNumber === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".card").style.backgroundColor = "#3e971f";
    document.querySelector(".what").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (inputNumber != secretNumber) {
    if (score > 4) {
      displayMessage(
        inputNumber > secretNumber ? "↗ Too High🙃" : "🔻↙ Too Low"
      );
      score -= 4;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over! 🦆");

      alert("Stupid, You don't have brain! 🐒");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".input_number").value = "";
  document.querySelector(".what").textContent = "?";
  document.querySelector(".card").style.backgroundColor = "black";
});
