document.getElementById("bgColorPicker").addEventListener("change", function() {
    let color = this.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
});
