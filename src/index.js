import "./styles.css";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import loadNavbar from "./navbar.js";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

loadNavbar();

// Default value
content.innerHTML = "";
content.appendChild(loadHome());


nav.addEventListener("click", (e) => {
    const btns = document.querySelectorAll(".btn");

  if (e.target.textContent === "Home") {
    content.innerHTML = "";
    content.appendChild(loadHome());

    // Removing active from all other btns
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  if (e.target.textContent === "About") {
    content.innerHTML = "";
    content.appendChild(loadAbout());

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  if (e.target.textContent === "Menu") {
    content.innerHTML = "";
    content.appendChild(loadMenu());

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
