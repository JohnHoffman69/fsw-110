var newHeading = document.createElement("h1");
newHeading.textContent = "Hello World";
document.body.append(newHeading);
newHeading.style.textAlign = "center";
newHeading.style.fontSize = "200px";
newHeading.style.backgroundColor = "red";


const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick","emily",];


function call(){
    for(var i = 0; i < 10; i++) {
        var new1 = doucment.createElement("h1");
        new1.textContent = names[i];
        document.body.append(new1);
        new1.style.textAlign = "center";
        
    }
}

call();


