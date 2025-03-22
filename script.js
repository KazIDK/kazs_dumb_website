document.addEventListener("DOMContentLoaded", function () {
    showSection('game1'); // Change this to the section you want visible by default

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
