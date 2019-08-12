// DOM Elements
const newTask = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const filterTasks = document.getElementById("filter-tasks");
const taskListUl = document.getElementById("task-list-ul");
const taskListLi = document.getElementsByClassName("list-group-item");
const clearTasksBtn = document.getElementById("clear-tasks-btn");

// Variables
let task;
let tasksArr = [];

displayTasks();

let liArr = Array.from(taskListLi);

// Get new task
addTaskBtn.onclick = () => {
  task = newTask.value;
  if (task === "") {
    alert("Task cannot be empty.");
  } else if (tasksArr.includes(task)) {
    alert("Task is already in your Task List.");
  } else {
    tasksArr.push(task);

    // Add to Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    displayTasks();
    newTask.value = "";
  }
};

// Display Tasks
function displayTasks() {
  let myTasks = JSON.parse(localStorage.getItem("tasks"));
  if (myTasks === null) {
    tasksArr = [];
  } else {
    tasksArr = myTasks;
  }

  taskListUl.innerHTML = "";

  tasksArr.forEach(t => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    li.className = "list-group-item";
    a.className = "float-right delete-task";
    li.innerText = t;
    a.innerHTML = `<i class="fas fa-trash-alt text-danger"></i>`;
    a.setAttribute("href", "#");
    li.appendChild(a);
    taskListUl.appendChild(li);
  });
}

// Delete a Task
document.body.addEventListener("click", deleteTask);

function deleteTask(e) {
  if (
    e.target.parentElement.parentElement.classList.contains("list-group-item")
  ) {
    tasksArr.forEach(function(t, index, object) {
      if (t === e.target.parentElement.parentElement.innerText) {
        object.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    e.target.parentElement.parentElement.remove();
  }
}

// Clear Tasks
clearTasksBtn.onclick = () => {
  tasksArr = [];
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  displayTasks();
};

// Filter Tasks
filterTasks.onkeyup = () => {
  liArr.forEach(l => {
    if (l.innerText.toLowerCase().includes(filterTasks.value.toLowerCase())) {
      l.hidden = false;
    } else {
      l.hidden = true;
    }
  });
};
