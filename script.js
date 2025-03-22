function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
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
