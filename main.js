// Type Writer
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// SMOOTH SCROLL
$(".navbar a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      500
    );
  }
});

// ANIMATE ON SCROLL - SCROLL REVEAL
// Home
window.sr = ScrollReveal();
sr.reveal("#greeting-code, #greeting", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal("#info-name", {
  duration: 2000,
  origin: "left",
  distance: "50px",
  delay: 1000
});

sr.reveal("#info-sm", {
  duration: 2000,
  origin: "right",
  distance: "50px",
  delay: 1000
});

// About
sr.reveal("#about-title", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal("#about-body", {
  duration: 2000,
  origin: "right",
  distance: "50px",
  delay: 1000
});

// Projects
sr.reveal("#projects-title", {
  duration: 2000,
  origin: "bottom"
});

sr.reveal(".prj", {
  duration: 1000,
  origin: "right",
  distance: "50px",
  delay: 500
});

// Contact
sr.reveal("#contact-title", {
  duration: 2000,
  origin: "bottom"
});
