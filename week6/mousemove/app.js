const box = document.querySelector(".red-box");

box.addEventListener('pointermove', (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}
)