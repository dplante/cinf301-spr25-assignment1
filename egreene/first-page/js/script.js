document.getElementById("changeColor").addEventListener("click", function () {
    let colors = ["#f4f4f4", "#d1e8e2", "#ffdfba", "#ffb3ba", "#bae1ff"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
