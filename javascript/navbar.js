const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

// Toggle mobile menu
const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    nav.classList.remove("nav-active");

    // Add hamburger icon
    toggle.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    menu.classList.add("active");
    nav.classList.add("nav-active");

    // Add close icon
    toggle.querySelector("a").innerHTML = `<i class="fas fa-times"></i>`;
  }
};

toggle.addEventListener("click", toggleMenu, false);

// // Close menu from outside navbar
// const closeMenu = (e) => {
//   const isClickInside = menu.contains(e.target);

//   if (!isClickInside && menu.classList.contains("active")) {
//     menu.classList.remove("active");
//   }
// };

// document.addEventListener("click", closeMenu, false);
