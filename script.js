const navWrapper = document.querySelector(".nav-wrapper");
const navList = document.querySelectorAll(".nav-list li a");
const navLink = document.querySelectorAll(".nav-list li");
const nav = document.querySelector(".nav-list");
const hamburger = document.getElementById("menu-icon");

//Handling scroll events
function handleScroll() {
  if (window.scrollY > 101.333) {
    navWrapper.style.backgroundColor = "#FFF";
    navList.forEach((item) => {
      item.style.color = "#000";
    });
  } else {
    navWrapper.style.backgroundColor = "transparent";
    navList.forEach((item) => {
      item.style.color = "#fff";
    });
  }
}

function openMenuBar() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
}

//Closing hamburger after selecting a link
navLink.forEach((list) => {
  list.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

//swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Event listeners
window.addEventListener("scroll", handleScroll);
hamburger.addEventListener("click", openMenuBar);
