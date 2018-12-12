var menuToggled = false;
var menuBtn = document.getElementById('menu-btn');
var navItems = document.getElementsByClassName('nav-item');
var jumbotron = document.getElementById('jumbotron');

function toggleMenu() {

  if(menuToggled == false) {
    menuToggled = true;
    menuBtn.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    menuToggled = false;
    menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
  }

  var x = window.matchMedia("(max-width: 600px)");
  myFunction(x);
  x.addListener(myFunction)
}

function myFunction(x) {
  if(x.matches) {
    if(menuToggled) {
      for(var i=0; i<navItems.length; i++) {
        navItems[i].style.display = "block";
        navItems[i].style.float = "none";
        navItems[i].style.float = "100%";
      }
      jumbotron.style.margin = "12rem 0 0 0";
    } else {
      for(var i=0; i<navItems.length; i++) {
        navItems[i].style.display = "none";
      }
      jumbotron.style.margin = "1rem 0 0 0";
    }
  } else {
    for(var i=0; i<navItems.length; i++) {
      navItems[i].style.display = "block";
      navItems[i].style.float = "left";
    }
    jumbotron.style.margin = "1rem 0 0 0";
  }
}
