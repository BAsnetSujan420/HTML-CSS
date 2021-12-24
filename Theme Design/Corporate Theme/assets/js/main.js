const mobileMenuBtn = document.querySelector(".menu-btn");
const mobileMenuOpen = mobileMenuBtn.querySelector(".fa-bars");
const mobileMenuClose = mobileMenuBtn.querySelector(".fa-times");
const navLinks = document.querySelector("nav");

const globalSearchBtn = document.querySelector("#search");
const searchHolder = document.querySelector(".search-holder");
const closeSearch = document.querySelector(".close-search");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuOpen.classList.toggle("active");
    mobileMenuClose.classList.toggle("active");
    navLinks.classList.toggle("open");
});

globalSearchBtn.addEventListener("click", () => {
    searchHolder.classList.toggle("open");
})

closeSearch.addEventListener("click", () => {
    searchHolder.classList.toggle("open");
})

