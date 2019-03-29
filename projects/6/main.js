// Todo Class: Represents a todo
class Todo {
  constructor(item) {
    this.item = item;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayTodos() {
    const todos = Store.getTodos();

    todos.forEach(todo => UI.addTodoToList(todo));
  }

  static addTodoToList(todo) {
    const list = document.querySelector("#todo-list");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${todo.item}</td>
        <td class='dlt-btn-td'><a href='#' class='btn-danger delete'><i class="fas fa-times hvr-grow-shadow"></i></a></td>
    `;

    list.appendChild(row);
  }

  static deleteTodo(el) {
    if (el.parentElement.classList.contains("delete")) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#todo-form");
    container.insertBefore(div, form);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#item").value = "";
  }
}

// Store Class: Handles Storage
class Store {
  static getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
  }

  static addTodo(todo) {
    const todos = Store.getTodos();

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  static removeTodo(item) {
    const todos = Store.getTodos();

    todos.forEach((todo, index) => {
      if (todo.item === item) {
        todos.splice(index, 1);
      }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

// Event: Display Todos
document.addEventListener("DOMContentLoaded", UI.displayTodos);

// Event: Add a Todo
document.querySelector("#todo-form").addEventListener("submit", e => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const item = document.querySelector("#item").value;

  // Validate
  if (item === "") {
    UI.showAlert("Please enter a to-do item.", "danger");
  } else {
    // Instantiate book
    const todo = new Todo(item);

    // Add Todo to UI
    UI.addTodoToList(todo);

    // Add todo to store
    Store.addTodo(todo);

    // Show success message
    UI.showAlert("Todo item is added.", "success");

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Todo
document.querySelector("#todo-list").addEventListener("click", e => {
  //Remove todo from UI
  UI.deleteTodo(e.target);

  //Remove todo from store
  Store.removeTodo(
    e.target.parentElement.parentElement.previousElementSibling.textContent
  );

  // Show success message
  UI.showAlert("Todo item is removed.", "success");
});
