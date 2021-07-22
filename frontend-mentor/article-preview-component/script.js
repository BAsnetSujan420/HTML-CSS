const cta = document.querySelector(".cta");
const share = document.querySelector(".share");
cta.addEventListener("click", (e) => {
  share.classList.toggle("active");
});
