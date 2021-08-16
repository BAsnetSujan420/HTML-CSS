document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
      // Open accordion item
      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse open";
          console.log("open accordion content");
        }, 300);
      }
      // Close accordion item
      else {
        // Remove "collapse open" from .accordion__collapse, add "collapsing"
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        // After X amount of time, remove "collapsing" class and add "collapse" class
        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = "";
          console.log("close accordion content");
        }, 300);
      }

      item.classList.toggle("open");
    }
  });
});
