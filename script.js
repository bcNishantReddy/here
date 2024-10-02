'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// MOBILE NAV TOGGLE
const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNav);
addEventOnElements(navLinks, "click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
});

// HEADER SCROLL BEHAVIOR
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  window.scrollY > 50 ? header.classList.add("active") : header.classList.remove("active");
});
