// DOM Elements
const bookTitleInp = document.querySelector("#book-title");
const authorInp = document.querySelector("#author");
const isbnInp = document.querySelector("#isbn");
const submitBtn = document.querySelector("#submit-btn");
const bookList = document.querySelector("#book-list");
const alertBox = document.querySelector("#alert-box");

// Variables
let books = [];

display();

// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

submitBtn.onclick = () => {
  if (
    bookTitleInp.value == "" ||
    authorInp.value == "" ||
    isbnInp.value == ""
  ) {
    alertUser("danger");
  } else {
    // Create a new Book object and add it into books array
    const book = new Book(bookTitleInp.value, authorInp.value, isbnInp.value);
    books.push(book);

    // Add to local storage
    localStorage.setItem("books", JSON.stringify(books));

    // Clean input fields
    cleanInps();

    // Display on book list
    display();

    alertUser("success");
  }
};

// Clean Input Fields function
function cleanInps() {
  bookTitleInp.value = "";
  authorInp.value = "";
  isbnInp.value = "";
}

// Display on book list function
function display() {
  bookList.innerHTML = "";

  let myBooks = JSON.parse(localStorage.getItem("books"));
  if (myBooks === null) {
    books = [];
  } else {
    books = myBooks;
  }

  books.forEach(b => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdIsbn = document.createElement("td");
    const tdDelete = document.createElement("td");
    const aDelete = document.createElement("a");

    tdTitle.innerText = b.title;
    tdAuthor.innerText = b.author;
    tdIsbn.innerText = b.isbn;
    aDelete.innerHTML = `<i class="far fa-trash-alt text-danger"></i>`;
    aDelete.setAttribute("href", "#");
    aDelete.className = "del-book";

    tdDelete.appendChild(aDelete);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdIsbn);
    tr.appendChild(tdDelete);

    bookList.appendChild(tr);
  });
}

// Delete from UI function
document.body.addEventListener("click", deleteFromUi);

function deleteFromUi(e) {
  if (e.target.parentElement.classList.contains("del-book")) {
    e.target.parentElement.parentElement.parentElement.remove();

    books.forEach(function(b, index, object) {
      if (
        b.isbn ===
        e.target.parentElement.parentElement.previousElementSibling.innerText
      ) {
        object.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));

    alertUser("primary");
  }
}

// Alert user function
function alertUser(alertType) {
  if (alertType == "danger") {
    alertBox.innerText = "Check the fields you entered.";
  } else if (alertType == "success") {
    alertBox.innerText = "Book is added.";
  } else if (alertType == "primary") {
    alertBox.innerText = "Book is removed.";
  }
  alertBox.className = `alert alert-${alertType}`;
  setTimeout(() => {
    alertBox.className = `d-none`;
  }, 3000);
}
