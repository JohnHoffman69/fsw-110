// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const box = document.querySelector('#submit-me');



box.addEventListener('submit', (event) => {
    event.preventDefault();
    const age = document.getElementById('age')
    alert(`${box.user_name.value}
${age.value}`)});