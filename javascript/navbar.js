const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// Toggle mobile menu
const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    // Add hamburger icon
    toggle.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    menu.classList.add("active");

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
