document.addEventListener("DOMContentLoaded", function () {
    // Set default section (Clicker Game)
    showSection('game1');

    let savedColor = localStorage.getItem("bgColor");
    if (savedColor) document.body.style.backgroundColor = savedColor;

    let discordLink = document.getElementById("discord-link");
    discordLink.addEventListener("mouseover", function () {
        discordLink.innerText = "kaz._.idk";
    });
    discordLink.addEventListener("mouseout", function () {
        discordLink.innerText = "My Discord";
    });
});
