let score = 0;
let autoClickers = 0;
let multiplier = 1;

document.getElementById("clickButton").addEventListener("click", function() {
    score += multiplier;
    updateScore();
});

function updateScore() {
    document.getElementById("score").innerText = score;
}

function buyAutoClicker() {
    if (score >= 50) {
        score -= 50;
        autoClickers++;
        setInterval(() => {
            score += autoClickers;
            updateScore();
        }, 1000);
    }
}

function buyMultiplier() {
    if (score >= 100) {
        score -= 100;
        multiplier *= 2;
    }
}

document.getElementById("upgrades").innerHTML = `
    <button onclick="buyAutoClicker()">Buy Auto Clicker (50)</button>
    <button onclick="buyMultiplier()">Buy Multiplier (100)</button>
`;
