const mobileMenuBtn = document.querySelector(".menu-home .fa-bars");
// const mobileMenuOpen = mobileMenuBtn.querySelector(".fa-bars");
// const mobileMenuClose = mobileMenuBtn.querySelector(".fa-times");
const navLinks = document.querySelector(".navbar");
const menuClose = document.querySelector(".menu-close");
const dropdown = document.querySelectorAll(".dropdown");

// const globalSearchBtn = document.querySelector("#search");
// const searchHolder = document.querySelector(".search-holder");
// const closeSearch = document.querySelector(".close-search");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

menuClose.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

dropdown.forEach((btn) => {
  const megaMenu = btn.querySelector(".mega-menu");
  const dropdownLink = btn.querySelector(".menu-link");
  const closeMegaMenu = megaMenu.querySelector(".container .close-mega-menu");
  // console.log(closeMegaMenu);
  dropdownLink.addEventListener("click", () => {
    megaMenu.classList.add("open");
    // console.log("hello");
  });

  closeMegaMenu.addEventListener("click", () => {
    megaMenu.classList.remove("open");
  });
});

const cartBtn = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
cartBtn.addEventListener("click", () => {
  cartContainer.classList.add("open");
});

const cartCloseBtn = document.querySelector(".cart-close i");
cartCloseBtn.addEventListener("click", () => {
  cartContainer.classList.remove("open");
});

var slider = document.getElementById("range");
var output = document.getElementById("rangeValue");
if (output) {
  output.innerHTML = "$" + slider.value;
}

if (slider) {
  slider.oninput = function () {
    output.innerHTML = "$" + this.value;
  };
}

const categorySidebarBtn = document.querySelector("#sidebarBtn");
const categorySidebar = document.querySelector(".category-sidebar");

if (categorySidebarBtn) {
  categorySidebarBtn.addEventListener("click", () => {
    categorySidebar.classList.add("open");
  });
}
const categorySidebarCloseBtn = document.querySelector(
  ".close-category-sidebar i"
);

if (categorySidebarCloseBtn) {
  categorySidebarCloseBtn.addEventListener("click", () => {
    categorySidebar.classList.remove("open");
  });
}

// const categorySidebar = document.querySelector(".category-sidebar");
// const categoryMenu = categorySidebar.querySelectorAll(".category-menu");

// categoryMenu.forEach((menu) => {
//     console.log(menu);
//     const category = menu.nextElementSibling;
//     // const menuHeight = categories.getBoundingClientRect().height;
//     menu.addEventListener("click", () => {
//         // categories.style.height = menuHeight + "px";
//         // // categories.style.height =  + "px";
//         // console.log(menuHeight);
//         category.classList.toggle("open");
//     })
// });

// globalSearchBtn.addEventListener("click", () => {
//     searchHolder.classList.toggle("open");
// })

// closeSearch.addEventListener("click", () => {
//     searchHolder.classList.toggle("open");
// })

//accordion

// var accItem = document.getElementsByClassName('accordion-item');
// var accHD = document.getElementsByClassName('accordion-item-title');
// for (i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     var itemClass = this.parentNode.className;
//     for (i = 0; i < accItem.length; i++) {
//         accItem[i].className = 'accordion-item close';
//         // accItem[i].style.maxHeight = 0;

//     }
//     if (itemClass == 'accordion-item close') {
//         this.parentNode.className = 'accordion-item open';
//         // this.parentNode.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
// }

const accordionItems = document.querySelectorAll(".accordion-item");
const accordionItemAutoClose = document.querySelectorAll(".auto-close");
const accordionItemTitle = document.querySelectorAll(".accordion-item-title");
accordionItemTitle.forEach((title) => {
  title.addEventListener("click", toggleAccordionItem, false);
});

function toggleAccordionItem() {
  const accordionItem = this.parentNode;
  const accordionItemContent = this.parentNode.querySelector(
    ".accordion-item-content"
  );

  if (accordionItems) {
    accordionItems.forEach((item) => {
      if (item.classList.contains("auto-close")) {
        item.className = "accordion-item auto-close close";
      }
    });
  }
  // if (accordionItem.classList.contains("close")) {
  if (accordionItem.classList.contains("auto-close")) {
    if (accordionItem.classList.contains("close")) {
      accordionItem.classList.remove("close");
      accordionItem.classList.toggle("open");
    }
    // accordionItem.className = "accordion-item auto-close open";
  } else {
    accordionItem.classList.toggle("open");
  }
  accordionItemContent.style.maxHeight = accordionItemContent.scrollHeight =
    "px";

  // accordionItemContent.style.transition =
  //   "max-height 0.5s cubic-bezier(0, 1, 0, 1)";
  // }
}

//search

const globalSearchBtn = document.querySelector("#search");
const searchHolder = document.querySelector(".search-holder");
const closeSearch = document.querySelector(".close-search");
if (globalSearchBtn) {
  globalSearchBtn.addEventListener("click", () => {
    searchHolder.classList.toggle("open");
  });
}

if (closeSearch) {
  closeSearch.addEventListener("click", () => {
    searchHolder.classList.toggle("open");
  });
}

const countInput = document.querySelectorAll(".count-input");
countInput.forEach((inputElement) => {
  const qty = inputElement.querySelector(".number");
  let value = parseInt(qty.value);
  const decreaseValue = qty.previousElementSibling;
  const increaseValue = qty.nextElementSibling;

  increaseValue.addEventListener("click", () => {
    // value = isNaN(value) ? 0 : value;
    value++;
    qty.value = value;
  });

  decreaseValue.addEventListener("click", () => {
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    qty.value = value;
  });
});

/**Modal */
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");
const modalOpenBtn = document.getElementById("modal-trigger");

const modalCloseBtn = document.querySelector(".modal .close");
if (modalOpenBtn) {
  modalOpenBtn.addEventListener("click", openModal);
}
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
  setTimeout(() => {
    modalBox.style.opacity = 1;
    // modal.style.display = "none";
  }, 100);
}

function closeModal() {
  modalBox.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function outsideClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}

const viewMoreBtn = document.querySelectorAll(".expand-full");
viewMoreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("expand");
  });
});

// image slider

var glide = new Glide(".productSlider", {
  type: "carousel",
  autoplay: 6000,
  perView: 4,
  gap: 40,
  dragDistance: false,
  loop: true,
  breakpoints: {
    600: {
      perView: 1,
    },
    800: {
      perView: 2,
    },
  },
});

glide.mount();
