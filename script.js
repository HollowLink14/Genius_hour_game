const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
  x: 50,
  y: 50,
  size: 30,
  speed: 4,
};

let keys = {};

document.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});

function update() {
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if(keys["ArrowLeft"]) player.x -= player.speed;
  if(keys["ArrowRight"]) player.x += player.speed;
 }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
 }

function gameLoop() {
   update();
   draw();
   requestAnimationFrame(gameLoop);
 }

gameLoop();


function update() {
   if (keys["ArrowUp"]) player.y -= player.speed;
   if (keys["ArrowDown"]) player.y += player.speed;
   if (keys["ArrowLeft"]) player.x -= player.speed;
   if (keys["ArrowRight"]) player.x += player.speed;

  // Keep player inside the canvas
  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}
