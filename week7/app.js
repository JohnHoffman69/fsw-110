const form = document.getElementById("todolist");
const task = document.getElementById("task");
const description = document.getElementById("description");


form.addEventListener("submit", (e) => {

    e.preventDefault()

    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0];
    ul.append(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = task.value;
    h2.style.marginBottom = "7px";
    li.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "- " + description.value;
    h3.style.marginBottom = "15px";
    li.appendChild(h3);
   
    const button = document.createElement("button");
    button.setAttribute("id", "delete")
    button.textContent = "Delete";
    button.style.marginBottom = "15px";
    button.style.padding = "5px";
    li.appendChild(button);

    button.addEventListener("click", function(e){
    h2.parentNode.removeChild(h2);
    h3.parentNode.removeChild(h3);
    button.parentNode.removeChild(button);
    });

    form.reset();
    
})