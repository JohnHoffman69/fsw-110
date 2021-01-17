for(var i = 0; i < 10; i++) {
    var newHeading = document.createElement("h1");
    newHeading.textContent = "Hello World";
    document.body.append(newHeading);
    newHeading.style.textAlign = "center";
    
}



const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for(var i = 0; i < names.length; i++) {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = names[i];
    document.body.append(newParagraph);
    newHeading.style.fontSize = "20px";
    newHeading.style.backgroundColor = "red";
}

