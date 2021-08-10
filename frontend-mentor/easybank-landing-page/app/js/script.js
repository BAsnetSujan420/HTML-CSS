const mobileMenu = document.getElementById("mobile-menu");
const body = document.querySelector("body");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

mobileMenu.addEventListener("click", function () {
  body.classList.toggle("noscroll");
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  } else {
    fadeElems.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  }
});
