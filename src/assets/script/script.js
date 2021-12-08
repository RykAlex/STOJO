document.addEventListener("DOMContentLoaded", function (event) {
  let SimpleBar = require("simplebar");

  // Скрипт для header no auth
  // ============================================
  let openBtn = document.querySelector(".btn-retail");
  let arrowBtn = document.querySelector(".btn-text");

  openBtn.addEventListener("click", function () {
    document.getElementById("authBtn").classList.toggle("showH");
    arrowBtn.classList.toggle("active");
  });
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".btn-retail")) {
      let openDropdown = document.querySelector(".submenu");
      if (openDropdown.classList.contains("showH")) {
        openDropdown.classList.remove("showH");
        arrowBtn.classList.remove("active");
      }
    }
  });
  // Скрипт для footer
  // ==========================================================
  let openBtnF = document.querySelector(".btn-retail .footer");
  let arrowBtnF = document.querySelector(".btn-textf");
  let addedPadding = document.querySelector("body");

  openBtnF.addEventListener("click", function () {
    document.getElementById("authBtnF").classList.toggle("showF");

    arrowBtnF.classList.toggle("activeF");
    addedPadding.style.transform = "translateY(-200px)";
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".btn-textf")) {
      let openDropdownF = document.querySelector(".submenuF");
      if (openDropdownF.classList.contains("showF")) {
        openDropdownF.classList.remove("showF");

        addedPadding.style.transform = "translateY(0)";
      }
    }
  });

  // Menu-noAuth
  // ============================================
  let openMenu = document.querySelector(".header-items-no-auth .menu-icon");
  let menuNoAuth = document.querySelector(".menu-noauth");

  openMenu.addEventListener("click", function () {
    menuNoAuth.classList.add("show");
  });
  window.addEventListener("click", function (e) {
    if (!openMenu.contains(e.target) && !openMenu.contains(e.target)) {
      menuNoAuth.classList.remove("show");
      menuNoAuth.style.transition = "all .4s";
    }
  });

  let closeMenu = document.querySelector(".menu-noauth .close-menu");
  closeMenu.addEventListener("click", function () {
    let navModal = document.querySelector(".menu-noauth");
    navModal.classList.remove("show");
  });
  // Menu-Auth
  // =============================================
  let openMenuAuth = document.querySelector(".header-items-auth .menu-icon");
  let menuAuth = document.querySelector(".menu-auth");

  openMenuAuth.addEventListener("click", function () {
    menuAuth.classList.add("show");
  });
  window.addEventListener("click", function (e) {
    if (!openMenuAuth.contains(e.target) && !openMenuAuth.contains(e.target)) {
      menuAuth.classList.remove("show");
      menuAuth.style.transition = "all .4s";
    }
  });
  let closeMenuAuth = document.querySelector(".menu-auth .close-menu-auth");
  closeMenuAuth.addEventListener("click", function () {
    let navModalAuth = document.querySelector(".menu-auth");
    navModalAuth.classList.remove("show");
  });

  //  Скрипт для кнопки со стрелками header
  // =======================================================
  let open = document.querySelectorAll(".dropbtn");
  let arrow = document.querySelectorAll(".icon-arrow-info");
  let open1 = document.querySelectorAll(".dropbtn1");
  let arrow1 = document.querySelectorAll(".icon-arrow-priv");

  open.forEach(Fn);
  function Fn(item) {
    item.addEventListener("click", function () {
      item.nextElementSibling.classList.toggle("show");
      for (let i = 0; i < arrow.length; i++) {
        const element = arrow[i];
        if (element.classList.contains("icon-arrow-info")) {
          element.classList.toggle("active");
        }
      }
    });
  }
  open1.forEach(Fn1);
  function Fn1(item) {
    item.addEventListener("click", function () {
      item.nextElementSibling.classList.toggle("show");
      for (let i = 0; i < arrow1.length; i++) {
        const element1 = arrow1[i];
        if (element1.classList.contains("icon-arrow-priv")) {
          element1.classList.toggle("active");
        }
      }
    });
  }

  // Accordion
  // ===========================================
  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
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
});
