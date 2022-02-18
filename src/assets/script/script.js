document.addEventListener("DOMContentLoaded", function (event) {
  let SimpleBar = require("simplebar");

  btnIconArrow();
  Accordion();
  btnTextArrow();
  openMenuNoAuth();
  openMenuAuth();

  function btnIconArrow() {
    document.querySelectorAll('.dropdown').forEach(item => {
      let btn = item.querySelector('button');
      let content = item.querySelector('.dropdown-content');
      let arrow = item.querySelector('.icon-arrow');
      btn.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.classList.toggle('active');
      })
      window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) {
          content.classList.remove("show");
          arrow.classList.remove('active');
        }
      });
    })
  }

  function Accordion() {
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
  }

  function btnTextArrow() {
    document.querySelectorAll('.dropdown-noauth').forEach(item => {
      let btn = item.querySelector('button');
      let content = item.querySelector('.submenu');
      let arrow = item.querySelector('.btn-text');
      btn.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.classList.toggle('active');
      })
      window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) {
          content.classList.remove("show");
          arrow.classList.remove('active');
        }
      });
    })
  }

  function openMenuNoAuth() {
    let openMenu = document.querySelector(".header-items-no-auth .menu-icon");
    let menuNoAuth = document.querySelector(".menu-noauth");
    openMenu.addEventListener("click", function () {
      menuNoAuth.classList.toggle("show");
    });
    window.addEventListener("click", function (e) {
      if (!openMenu.contains(e.target)) {
        menuNoAuth.classList.remove("show");
        menuNoAuth.style.transition = "all .4s";
      }
    });
  }

  function openMenuAuth() {
    let openMenuAuth = document.querySelector(".header-items-auth .menu-icon");
    let menuAuth = document.querySelector(".menu-auth");
    openMenuAuth.addEventListener("click", function () {
      menuAuth.classList.toggle("show");
    });
    window.addEventListener("click", function (e) {
      if (!openMenuAuth.contains(e.target)) {
        menuAuth.classList.remove("show");
        menuAuth.style.transition = "all .4s";
      }
    });
  }

});
