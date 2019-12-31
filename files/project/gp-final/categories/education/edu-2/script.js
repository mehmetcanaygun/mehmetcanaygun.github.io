// DOM Elements
const infoBox = document.getElementById("info-box");
const toggleBtnNew = document.getElementById("toggle-btn-new");
const toggleBtnOld = document.getElementById("toggle-btn-old");
const cities = document.querySelectorAll(".city");
console.log(cities);

// Variables
let is2017 = false;
let cityTotalOld = "";
let cityUniDegOld = "";
let cityRatioOld = 0;
let cityTotalNew = "";
let cityUniDegNew = "";
let cityRatioNew = 0;

/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector("#svg-turkiye-haritasi");
  const info = document.querySelector(".il-isimleri");
  element.addEventListener("mouseover", function(event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.id !== "guney-kibris"
    ) {
      let oldRatio = "";
      let newRatio = "";
      let positive = "";
      let cityName = event.target.parentNode.getAttribute("data-iladi");
      cityTotalOld = event.target.parentNode.getAttribute("data-total-old");
      cityUniDegOld = event.target.parentNode.getAttribute("data-unideg-old");
      cityRatioOld = parseFloat(
        event.target.parentNode.getAttribute("data-unideg-old") /
          event.target.parentNode.getAttribute("data-total-old")
      ).toFixed(4);
      cityTotalNew = event.target.parentNode.getAttribute("data-total-new");
      cityUniDegNew = event.target.parentNode.getAttribute("data-unideg-new");
      cityRatioNew = parseFloat(
        event.target.parentNode.getAttribute("data-unideg-new") /
          event.target.parentNode.getAttribute("data-total-new")
      ).toFixed(4);

      if (event.target.parentNode.getAttribute("data-2008") == 5) {
        oldRatio = "0% - 20%";
      } else if (event.target.parentNode.getAttribute("data-2008") == 4) {
        oldRatio = "20% - 40%";
      } else if (event.target.parentNode.getAttribute("data-2008") == 3) {
        oldRatio = "40% - 60%";
      } else if (event.target.parentNode.getAttribute("data-2008") == 2) {
        oldRatio = "60% - 80%";
      } else if (event.target.parentNode.getAttribute("data-2008") == 1) {
        oldRatio = "80% - 100%";
      }

      if (event.target.parentNode.getAttribute("data-2017") == 5) {
        newRatio = "0% - 20%";
      } else if (event.target.parentNode.getAttribute("data-2017") == 4) {
        newRatio = "20% - 40%";
      } else if (event.target.parentNode.getAttribute("data-2017") == 3) {
        newRatio = "40% - 60%";
      } else if (event.target.parentNode.getAttribute("data-2017") == 2) {
        newRatio = "60% - 80%";
      } else if (event.target.parentNode.getAttribute("data-2017") == 1) {
        newRatio = "80% - 100%";
      }

      if (
        event.target.parentNode.getAttribute("data-2008") -
          event.target.parentNode.getAttribute("data-2017") >
        0
      ) {
        positive = "<i class='fas fa-chevron-up' style='color: green'></i>";
      } else {
        positive = "<i class='fas fa-minus' style='color: gray'></i>";
      }

      info.innerHTML = [
        `<div>
          <strong>${cityName}</strong><br>
          2008: ${oldRatio}<br>
          2017: ${newRatio}<br>
          Status: ${positive}
        </div>`
      ].join("");
    }
  });

  element.addEventListener("mousemove", function(event) {
    info.style.top = event.pageY + 25 + "px";
    info.style.left = event.pageX + "px";
  });

  element.addEventListener("mouseout", function(event) {
    info.innerHTML = "";
  });

  element.addEventListener("click", function(event) {
    if (event.target.tagName === "path") {
      const parent = event.target.parentNode;
      const id = parent.getAttribute("id");

      if (id === "guney-kibris") {
        return;
      }

      console.log(parent.getAttribute("data-iladi"));

      infoBox.innerHTML = `
      <strong>City</strong>: ${event.target.parentNode.getAttribute(
        "data-iladi"
      )}<br><br>
      <strong>2008</strong>
        <ul>
          <li>Total: ${cityTotalOld}</li>
          <li>Uni. Degree: ${cityUniDegOld}</li>
          <li>Ratio: ${cityRatioOld}</li>
        </ul>
      <strong>2017</strong>
        <ul>
          <li>Total: ${cityTotalNew}</li>
          <li>Uni. Degree: ${cityUniDegNew}</li>
          <li>Ratio: ${cityRatioNew}</li>
      </ul>
        `;
    }
  });

  cities.forEach(city => {
    if (city.getAttribute("data-2008") == 5) {
      city.firstElementChild.classList.add("five");
    } else if (city.getAttribute("data-2008") == 4) {
      city.firstElementChild.classList.add("four");
    } else if (city.getAttribute("data-2008") == 3) {
      city.firstElementChild.classList.add("three");
    } else if (city.getAttribute("data-2008") == 2) {
      city.firstElementChild.classList.add("two");
    } else if (city.getAttribute("data-2008") == 1) {
      city.firstElementChild.classList.add("one");
    }
  });
}

toggleBtnNew.onclick = function() {
  cities.forEach(city => {
    city.firstElementChild.classList = [];
    if (city.getAttribute("data-2017") == 5) {
      city.firstElementChild.classList.add("five");
    } else if (city.getAttribute("data-2017") == 4) {
      city.firstElementChild.classList.add("four");
    } else if (city.getAttribute("data-2017") == 3) {
      city.firstElementChild.classList.add("three");
    } else if (city.getAttribute("data-2017") == 2) {
      city.firstElementChild.classList.add("two");
    } else if (city.getAttribute("data-2017") == 1) {
      city.firstElementChild.classList.add("one");
    }
  });
};

toggleBtnOld.onclick = function() {
  cities.forEach(city => {
    city.firstElementChild.classList = [];
    if (city.getAttribute("data-2008") == 5) {
      city.firstElementChild.classList.add("five");
    } else if (city.getAttribute("data-2008") == 4) {
      city.firstElementChild.classList.add("four");
    } else if (city.getAttribute("data-2008") == 3) {
      city.firstElementChild.classList.add("three");
    } else if (city.getAttribute("data-2008") == 2) {
      city.firstElementChild.classList.add("two");
    } else if (city.getAttribute("data-2008") == 1) {
      city.firstElementChild.classList.add("one");
    }
  });
};
