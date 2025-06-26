const form = document.querySelector("form"); // Select the form element
let tasks = [];

const localInfo = JSON.parse(localStorage.getItem("tasks"));

if (localInfo) {
  tasks = localInfo;
  tasks.forEach((element) => {
    renderTasks(element.taskName,element.id);
  });
  console.log(tasks);
}

function renderTasks(taskName, id) {

  const newDiv = document.createElement("div");
  newDiv.id = id;
  const checkbox = document.createElement("input"); 
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  

  const image = document.createElement("img"); 
  image.src = "img/recycle-bin.png";
  image.classList.add("close-btn");
  image.onclick = () => {
    const taskElement = document.getElementById(id);
    taskElement.remove();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  };

  document.body.appendChild(newDiv).classList.add("task-container");
  newDiv.appendChild(checkbox);
  newDiv.appendChild(document.createTextNode(taskName));
  newDiv.appendChild(image);
}

form.addEventListener("submit", () => {
  // Add an event listener for the form submission
  const taskName = document.querySelector("#todo-input").value; // Get the value of the input field with id "todo-input"
  
  const newTask = {
    id: Math.random().toString(36).substring(2, 15),
    taskName: taskName,
    check: false,
  };
  renderTasks(newTask.taskName, newTask.id);

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});


const idresponse = tasks.findIndex((task) => task.id === "6rukh6v7c4p");

console.log(idresponse);
