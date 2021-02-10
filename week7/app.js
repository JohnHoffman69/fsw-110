let form = document['todo list']

//delete function
function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode)
}
//submit event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i = 0; i < form.length - 1; i++) {
        const li = document.createElement('li')
        li.textContent = `${form[i].value}`
        var input = document.createElement("input");
        input.value = "Remove"
        input.type = 'button'
        input.id = "Item"
        input.onclick = removeItem;
        li.appendChild(input)
        document.getElementsByTagName('ol')[0].append(li)
    }
    document.querySelector("form").reset();
    document.getElementsByTagName('li')[0].append[input]
    

})