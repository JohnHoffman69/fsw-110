//H1//
var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
document.body.append(header);
//P//
var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with Javascript";
document.body.append(paragraph);

//ol//
var ol = document.createElement("ol");
document.body.append(ol);

var list1 = document.createElement("li");
var list2 = document.createElement("li");
var list3 = document.createElement("li");

list1.textContent = " football";
list2.textContent = " baseball";
list3.textContent = " basketball";

ol.appendChild(list1);
ol.appendChild(list2);
ol.appendChild(list3);





