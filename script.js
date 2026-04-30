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
  if (keys["ArrowUp or w"]) player.y -= player.speed;
  if (keys["ArrowDown or s"]) player.y += player.speed;
 if(keys["ArrowLeft or a"]) player.x -= player.speed;
 if(keys["ArrowRight or d"]) player.x += player.speed;
 }

fucntion update() {
  

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

  // Keep player inside the canvas
  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}


