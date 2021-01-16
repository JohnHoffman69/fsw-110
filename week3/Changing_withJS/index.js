var h2Elements = ["NFL", "NBA", "MLB", "NHL", "Bowling"];
for(var i = 0; i < h2Elements.length; i++) {
    var sports = document.createElement("h2");
    sports.textContent = h2Elements[i];
    sports.style.fontSize = "20px";
    sports.style.fontWeight = "lighter";
    sports.style.fontFamily = "sans-serif";
    sports.style.color = "cornflowerblue";
    sports.classList.add("border");
    document.body.append(sports);
}