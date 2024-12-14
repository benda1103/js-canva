const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let currentColor = "black";
let lineWidth = 2;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY]; // Initialise les coordonnées
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousemove", draw);

function setColor(color) {
  currentColor = color;
}

function setRandomColor() {
  currentColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setLineWidth(width) {
  lineWidth = width;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(event) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // Position précédente
  ctx.lineTo(event.offsetX, event.offsetY); // Nouvelle position
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  // Mise à jour des coordonnées pour le prochain tracé
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

function drawRandomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const fontSize = 50;
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = currentColor;
  ctx.fillText(
    randomLetter,
    Math.random() * (canvas.width - fontSize),
    Math.random() * (canvas.height - fontSize)
  );
}
