const secretNumber = Math.trunc(Math.random() * 20 + 1);
const score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input_number").value);
  if (!inputNumber) {
    document.querySelector(".guess").textContent = "⛔ No Input Number!";
  } else if (inputNumber === secretNumber) {
    document.querySelector(".guess").textContent = "🎉 Correct Number!";
    document.querySelector(".card").style.backgroundColor = "#3e971f";
    document.querySelector(".what").textContent = secretNumber;
  } else if (inputNumber < secretNumber) {
    document.querySelector(".guess").textContent = "🔻↙ Too Low";
    score = -1;
    document.querySelector(".score").textContent = score;
  } else if (inputNumber > secretNumber) {
    document.querySelector(".guess").textContent = "↗ Too High🙃";
    score = -1;
    document.querySelector(".score").textContent = score;
  }
});
