const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

let character = "godzilla";
let difficulty = "easy";
let gameSpeed = 5;
let highScore = 0;
let currentScore = 0;
let isGameOver = false;

document.getElementById("godzilla").addEventListener("click", () => {
  character = "godzilla";
});
document.getElementById("t-rex").addEventListener("click", () => {
  character = "t-rex";
});
document.getElementById("king-kong").addEventListener("click", () => {
  character = "king-kong";
});
document.getElementById("easy").addEventListener("click", () => {
  difficulty = "easy";
  gameSpeed = 5;
});
document.getElementById("medium").addEventListener("click", () => {
  difficulty = "medium";
  gameSpeed = 10;
});
document.getElementById("hard").addEventListener("click", () => {
  difficulty = "hard";
  gameSpeed = 15;
});
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("restart").addEventListener("click", restartGame);

function startGame() {
  document.getElementById("menu").style.display = "none";
  animate();
}

function restartGame() {
  isGameOver = false;
  currentScore = 0;
  document.getElementById("game-over").style.display = "none";
  animate();
}

function drawBackground() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, canvas.height - 100, canvas.width, 10);
}

function drawCharacter() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, canvas.height - 150, 50, 50);
}

function drawObstacle() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(canvas.width - gameSpeed * 30, canvas.height - 150, 50, 50);
}

function animate() {
  if (isGameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawCharacter();
  drawObstacle();
  currentScore++;
  if (currentScore > highScore) highScore = currentScore;
  requestAnimationFrame(animate);
}

function endGame() {
  isGameOver = true;
  document.getElementById("score-text").innerText = `Score: ${currentScore}`;
  document.getElementById("high-score-text").innerText = `High Score: ${highScore}`;
  document.getElementById("game-over").style.display = "block";
}
