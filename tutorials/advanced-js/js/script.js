const codeContainer = document.getElementById("code-container");
const code = document.getElementById("code");
const closeBtn = document.getElementById("close-btn");
const filterInput = document.getElementById("filter-input");
const tutorialLinks = document.querySelectorAll(".tutorial-link");

// Get code from txt files
function getCode(file) {
  codeContainer.style.top = `${window.scrollY}px`;
  document.body.style.overflowY = "hidden";

  code.src = `codes/${file}.png`;
  codeContainer.style.top = document.pageYOffset;
  codeContainer.classList.add("show");
}

// Close code image
closeBtn.addEventListener("click", () => {
  document.body.style.overflowY = "visible";

  codeContainer.classList.remove("show");
});

// Filter Tutorials
filterInput.addEventListener("input", () => {
  // console.log(filterInput.value);

  tutorialLinks.forEach((link) => {
    if (
      !link.innerText.toLowerCase().includes(filterInput.value.toLowerCase())
    ) {
      link.parentElement.style.display = "none";
    } else {
      link.parentElement.style.display = "flex";
    }
  });
});
