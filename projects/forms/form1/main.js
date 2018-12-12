function toggleForms(id) {
  var signUpColumn = document.getElementById('signUp');
  var logInColumn = document.getElementById('logIn');
  var signUpForm = document.getElementById('signUpForm');
  var logInForm = document.getElementById('logInForm');

  if(id == "signUp") {
    logInColumn.classList.remove("currentOption");
    signUpColumn.classList.add("currentOption");
    logInForm.classList.add("slideFormOut");
    signUpForm.classList.add("slideFormIn");
    signUpForm.style.display = "block";
    logInForm.style.display = "none";
  } else if(id == "logIn") {
    logInColumn.classList.add("currentOption");
    signUpColumn.classList.remove("currentOption");
    signUpForm.classList.add("slideFormOut");
    logInForm.classList.add("slideFormIn");
    signUpForm.style.display = "none";
    logInForm.style.display = "block";
  }
}
