const form = document.querySelector("form")
form.addEventListener("submit",() =>{
    const taskName = document.querySelector("#todo-input").value;
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv)
    console.log(taskName);
});