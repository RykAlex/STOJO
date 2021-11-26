let SimpleBar = require("simplebar");

// Скрипт для header no auth
// ============================================
let openBtn = document.querySelector(".btn-retail");
let arrowBtn = document.querySelector(".auth-arrow");

openBtn.addEventListener("click", function () {
  document.getElementById("authBtn").classList.toggle("show");
  arrowBtn.classList.toggle("active");
});
window.addEventListener("click", function (event) {
  if (!event.target.matches(".btn-retail")) {
    let openDropdown = document.querySelector(".submenu");
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
      arrowBtn.classList.remove("active");
    }
  }
});
let openBtnF = document.querySelector(".footer-right-items .btn-retail");
let arrowBtnF = document.querySelector(".auth-arrow-footer");

openBtnF.addEventListener("click", function () {
  document.getElementById("authBtnF").classList.toggle("show");
  arrowBtnF.classList.toggle("active");
});
window.addEventListener("click", function (event) {
  if (!event.target.matches(".footer-right-items .btn-retail")) {
    let openDropdownF = document.querySelector(".submenu");
    if (openDropdownF.classList.contains("show")) {
      openDropdownF.classList.remove("show");
      arrowBtnF.classList.remove("active");
    }
  }
});

// Скрипт для Menu
// ============================================
let openMenu = document.querySelector(".header-items-no-auth .menu-icon");
let openMenuAuth = document.querySelector(".header-items-auth .menu-icon");
// let menuMobile = document.querySelector(".header-items-no-auth .menu-icon");
let menuNoAuth = document.querySelector(".menu-noauth");
let menuAuth = document.querySelector(".menu-auth");

openMenu.addEventListener("click", function () {
  menuNoAuth.classList.toggle("show");
});
let closeMenu = document.querySelector(".menu-noauth .close-menu");
closeMenu.addEventListener("click", function () {
  let navModal = document.querySelector(".menu-noauth");
  navModal.classList.remove("show");
});
openMenuAuth.addEventListener("click", function () {
  menuAuth.classList.toggle("show");
});
let closeMenuAuth = document.querySelector(".menu-auth .close-menu-auth");
closeMenuAuth.addEventListener("click", function () {
  let navModalAuth = document.querySelector(".menu-auth");
  navModalAuth.classList.remove("show");
});
openMenuAuth.addEventListener("click", function () {
  menuAuthD.classList.toggle("show");
});
// menuMobile.addEventListener("click", function () {
//   menuNoAuth.classList.toggle("show");
// });
// let open = document.querySelector(".dropbtn");
// let arrow = document.querySelector(".icon-arrow");

// open.addEventListener("click", function () {
//   document.getElementById("btnInfo").classList.toggle("show");
//   arrow.classList.toggle("active");
// });

// window.addEventListener("click", function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//         arrow.classList.remove("active");
//       }
//     }
//   }
// });
let open = document.querySelectorAll(".dropbtn");
let arrow = document.querySelectorAll(".icon-arrow");

open.forEach(Fn);
function Fn(item) {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("show");
    for (let i = 0; i < arrow.length; i++) {
      const element = arrow[i];
      if (element.classList.contains("icon-arrow")) {
        element.classList.toggle("active");
      }
    }
  });
}
// Accordion
// ===========================================
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
