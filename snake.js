const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let snake = [{x: 200, y: 200}];
let direction = null;
let food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
let gameRunning = true;

document.addEventListener("keydown", (event) => {
    if (event.key.startsWith("Arrow")) changeDirection(event.key.replace("Arrow", "").toUpperCase());
});

function changeDirection(newDirection) {
    const opposite = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    if (direction !== opposite[newDirection]) direction = newDirection;
}

function updateSnake() {
    if (!gameRunning || !direction) return;
    let head = { ...snake[0] };
    if (direction === "UP") head.y -= 20;
    if (direction === "DOWN") head.y += 20;
    if (direction === "LEFT") head.x -= 20;
    if (direction === "RIGHT") head.x += 20;
    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    } else {
        snake.pop();
    }
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameRunning = false;
        alert("Game Over!");
    }
    snake.unshift(head);
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
    ctx.fillStyle = "lime";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
}

setInterval(() => { updateSnake(); drawGame(); }, 100);

function restartGame() {
    snake = [{x: 200, y: 200}];
    direction = null;
    gameRunning = true;
}
