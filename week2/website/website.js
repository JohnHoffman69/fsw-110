//navbar//
var nav = document.createElement ("NAV");
document.body.append(nav);

//The links//
var nav1 = document.createElement("a");
var nav2 = document.createElement("a");
var nav3 = document.createElement("a");
var nav4 = document.createElement("a");
nav1.textContent = " HOME ";
nav2.textContent = " ABOUT ";
nav3.textContent = " CONTACT ";
nav4.textContent = " LOCATION ";

// Links to //
nav.appendChild(nav1);
nav.appendChild(nav2);
nav.appendChild(nav3);
nav.appendChild(nav4);


//An h1 tag//
var H1 = document.createElement("h1");
document.body.append(H1);
H1.textContent = "Sports";

//A p tag//
var P = document.createElement("p");
P.textContent = "Sports is a fun and healthy way to stay active.";
document.body.append(P);

//A list//
var alphaList = document.createElement("ul");
document.body.append(alphaList);

//A list items//
var alphaLi1 = document.createElement("li");
var alphaLi2 = document.createElement("li");
var alphaLi3 = document.createElement("li");
alphaLi1.textContent = "Football";
alphaLi2.textContent = "Baseball";
alphaLi3.textContent = "Basketball";

//A li to ul//
alphaList.appendChild(alphaLi1);
alphaList.appendChild(alphaLi2);
alphaList.appendChild(alphaLi3);

//Footer
var Footer = document.createElement("FOOTER");
Footer.textContent = "For more information please click at: https://www.sportsjunkie.com";
document.body.append(Footer);
