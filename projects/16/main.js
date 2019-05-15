// DOM Elements
const contactWrapper = document.querySelector("#contact-wrapper");
const editForm = document.querySelector("#edit-form");
const contacts = document.querySelectorAll(".contact");
const editId = document.querySelector("#edit-id");
const editName = document.querySelector("#edit-name");
const editPhone = document.querySelector("#edit-phone");
const editAddress = document.querySelector("#edit-address");
const editBirthday = document.querySelector("#edit-birthday");
const saveBtn = document.querySelector("#save-btn");

// Variables
let myContacts = {
  people: [
    {
      id: 0,
      name: "Ali",
      phone: "111 11 11",
      address: "A city",
      birthday: "01.01.1996"
    },
    {
      id: 1,
      name: "Veli",
      phone: "222 22 22",
      address: "B city",
      birthday: "02.02.1997"
    },
    {
      id: 2,
      name: "Ayşe",
      phone: "333 33 33",
      address: "C city",
      birthday: "03.03.1998"
    },
    {
      id: 3,
      name: "Osman",
      phone: "444 44 44",
      address: "D city",
      birthday: "04.04.1999"
    },
    {
      id: 4,
      name: "Fatma",
      phone: "555 55 55",
      address: "E city",
      birthday: "05.05.2000"
    },
    {
      id: 5,
      name: "Mahmut",
      phone: "666 66 66",
      address: "F city",
      birthday: "06.06.2001"
    }
  ]
};

// Display contact list
function displayContactList() {
  contactWrapper.innerHTML = "";
  myContacts.people.forEach(person => {
    const newDiv = document.createElement("div");
    newDiv.id = person.id;
    newDiv.className = "contact";
    newDiv.setAttribute("onclick", "displayDetails(this.id)");
    newDiv.setAttribute("data-detailsopen", "false");
    newDiv.innerHTML = `<strong>Name:</strong> ${
      person.name
    }<span><br><strong>Phone:</strong> ${
      person.phone
    }<br><strong>Address:</strong> ${
      person.address
    }<br><strong>Birthday:</strong> ${
      person.birthday
    }<br><input class="btn" type="button" onclick="editContact(${
      person.id
    })" value="Edit" /></span>`;
    contactWrapper.appendChild(newDiv);
    newDiv.children[1].style.display = "none";
  });
}

displayContactList();

// Display details of the contact on click
function displayDetails(id) {
  if (document.getElementById(id).children[1].style.display == "none") {
    document.getElementById(id).children[1].style.display = "block";
  } else {
    document.getElementById(id).children[1].style.display = "none";
  }
}

// Edit Contact
function editContact(id) {
  // Hide contact list and bring edit form
  contactWrapper.style.display = "none";
  editForm.style.display = "block";

  // Fill edit inputs with contact's info
  myContacts.people.forEach(contact => {
    if (contact.id == id) {
      editId.value = id;
      editName.value = contact.name;
      editPhone.value = contact.phone;
      editAddress.value = contact.address;
      editBirthday.value = contact.birthday;
    }
  });
}

// Save contact's edited info
saveBtn.onclick = () => {
  // Save to contact list
  myContacts.people.forEach(contact => {
    if (contact.id == editId.value) {
      contact.name = editName.value;
      contact.phone = editPhone.value;
      contact.address = editAddress.value;
      contact.birthday = editBirthday.value;
    }
  });
  // Hide edit form and display contact list again
  displayContactList();
  editForm.style.display = "none";
  contactWrapper.style.display = "block";
};
