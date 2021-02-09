// make the box disapear when the user clicks it
const box = document.querySelector('.red-box');
const beGone = () => box.style.display = "none";

box.addEventListener('click', beGone);