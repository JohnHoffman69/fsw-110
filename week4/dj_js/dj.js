var header = document.createElement("h1")
header.textContent = "DJ JS"
header.style.fontSize = "60px"
header.style.textAlign = "center"
document.body.append(header);

var para1 = document.createElement("p")
para1.textContent = "Expereince the Color Vibes from DJ JS"
para1.style.fontSize = "40px"
para1.style.textAlign = "center"
document.body.append(para1);

var square = document.createElement("div")
square.style.borderStyle = "solid"
square.style.marginLeft = "250px"
square.style.marginRight = "250px"
square.style.padding = "275px"
document.body.append(square);

square.addEventListener("mouseover", function() {
square.style.background = "blue" 
});

square.addEventListener("mousedown", function() {
square.style.background = "red" 
});

square.addEventListener("mouseup", function() {
square.style.background = "yellow" 
});

square.addEventListener("dblclick", function() {
square.style.background = "green" 
});

document.body.addEventListener("wheel", function() {
square.style.background = "orange" 
});

document.addEventListener("keydown", function(event) {
    var a = event.key;
    if (a === "b" || a === "B") {
        square.style.background = "blue"
    }
});

document.addEventListener("keydown", function(event) {
    var a = event.key;
    if (a === "r" || a === "R") {
        square.style.background = "red"
    }
});

document.addEventListener("keydown", function(event) {
    var a = event.key;
    if (a === "y" || a === "Y") {
        square.style.background = "yellow"
    }
});

document.addEventListener("keydown", function(event) {
    var a = event.key;
    if (a === "g" || a === "G") {
        square.style.background = "green"
    }
});

document.addEventListener("keydown", function(event) {
    var a = event.key;
    if (a === "o" || a === "O") {
        square.style.background = "orange"
    }
});