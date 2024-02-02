
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let rangeStart = 1;
let rangeEnd = 20;
let level = 1;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High";
      document.querySelector(".score").textContent = score = score - 1;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low";
      document.querySelector(".score").textContent = score = score - 1;
    }
  } else if (guess === secretNumber) {
    score += highscore
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = guess;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector("body").style.backgroundColor = "#008000";

    document.querySelector(".btn.next").style.display = "block";
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector(".btn.next").style.display = "none";

  secretNumber = Math.trunc(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
});

document.querySelector('.btn.next').addEventListener('click', function () {
  rangeStart += 1;

  secretNumber = Math.trunc(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

  level++;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = `Level ${level}: Start guessing...`;

  document.querySelector('.between').textContent = `(Between ${rangeStart} and ${rangeEnd})`;

  document.querySelector("body").style.backgroundColor = "#222";
  console.log(res);
  document.querySelector(".btn.next").style.display = "none";
});
