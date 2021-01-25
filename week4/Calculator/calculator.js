
//Header
let header = document.createElement("h1");
header.textContent = "Calculator";
header.style.fontSize = "40px";
header.style.padding = "20px";
header.style.color = "green";
document.body.appendChild(header);

//add
var box1 = document.createElement('div');
box1.id = 'container1';
box1.style.cssText = 'border: solid black 10px;  background-color: red';
document.body.append(box1);
//first input
var inputBox1 = document.createElement('input');
inputBox1.id = 'field3';
inputBox1.placeholder = 'num1';
document.querySelector('#container1').append(inputBox1);
//addition sign
var additionSign = document.createElement('div');
additionSign.id = 'subSpace2';
additionSign.textContent = '+';
document.querySelector('#container1').append(additionSign);
//second input
var inputBox2 = document.createElement('input');
inputBox2.id = 'field4';
inputBox2.placeholder = 'num2';
document.querySelector('#container1').append(inputBox2);
//break
var breaks1 = document.createElement('div');
breaks1.id = 'subSpace3';
breaks1.textContent = '=';
document.querySelector('#container1').append(breaks1);
//button
var btn1 = document.createElement('button');
btn1.id = 'submit1';
btn1.textContent = 'submit';
document.querySelector('#container1').append(btn1);
btn1.onclick = function() {
    var a = document.querySelector('#field3').value
    var b = document.querySelector('#field4').value
    var end2 = document.createElement('p')
    end2.textContent = parseInt(a) + parseInt(b)
    document.querySelector('#container1').append(end2)
}

//subtract
var box2 = document.createElement('div');
box2.id = 'container2';
box2.style.cssText = 'border: solid black 10px;  background-color: blue; ' 
document.body.append(box2);
//first input
var inputBox3 = document.createElement('input');
inputBox3.id = 'field1';
inputBox3.placeholder = 'num1';
document.querySelector('#container2').append(inputBox3);
//subtraction sign
var subtractionSign = document.createElement('div');
subtractionSign.id = 'subSpace';
subtractionSign.textContent = '-';
document.querySelector('#container2').append(subtractionSign);
//second input
var inputBox4 = document.createElement('input');
inputBox4.id = 'field2';
inputBox4.placeholder = 'num2';
document.querySelector('#container2').append(inputBox4);
//break
var breaks = document.createElement('div');
breaks.id = 'subSpace1';
breaks.textContent = '=';
document.querySelector('#container2').append(breaks);
//button
var btn2 = document.createElement('button');
btn2.id = 'submit2';
btn2.textContent = 'submit';
document.querySelector('#container2').append(btn2);
btn2.onclick = function() {
    var a = document.querySelector('#field1').value
    var b = document.querySelector('#field2').value
    var end1 = document.createElement('p')
    end1.textContent = parseInt(a) - parseInt(b)
    document.querySelector('#container2').append(end1)
}

//multiply
document.createElement('div')
var box3 = document.createElement('div');
box3.id = 'container3';
box3.style.cssText = 'border: solid black 10px; background-color: orange ';
document.body.append(box3);
//first input
var inputBox5 = document.createElement('input');
inputBox5.id = 'field5';
inputBox5.placeholder = 'num1';
document.querySelector('#container3').append(inputBox5);
//multiplication sign
var multiplicationSign = document.createElement('div');
multiplicationSign.id = 'subSpace4';
multiplicationSign.textContent = '*';
document.querySelector('#container3').append(multiplicationSign);
//second input
var inputBox6 = document.createElement('input');
inputBox6.id = 'field6';
inputBox6.placeholder = 'num2';
document.querySelector('#container3').append(inputBox6);
//break
var breaks2 = document.createElement('div');
breaks2.id = 'subSpace5';
breaks2.textContent = '=';
document.querySelector('#container3').append(breaks2);
//button
var btn3 = document.createElement('button')
btn3.id = 'submit3';
btn3.textContent = 'submit';
document.querySelector('#container3').append(btn3);
btn3.onclick = function() {
    var a = document.querySelector('#field5').value
    var b = document.querySelector('#field6').value
    var end3 = document.createElement('p')
    end3.textContent = parseInt(a) * parseInt(b)
    document.querySelector('#container3').append(end3)

}