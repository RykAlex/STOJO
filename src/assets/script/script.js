document.addEventListener("DOMContentLoaded", function (event) {
  let SimpleBar = require("simplebar");

  btnIconArrow();
  accordion();
  btnTextArrow();
  openLeftMenu();


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

  function accordion() {
    document.querySelectorAll('.accordion').forEach(item => {
      item.addEventListener("click", function () {
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
    })
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
    });
  }

  function openLeftMenu() {
    let icon = document.querySelectorAll('.menu-icon');
    let menu = document.querySelector('.menu-auth');
    icon.forEach(item => {

      item.addEventListener("click", () => {
        menu.classList.toggle('show');




        // window.addEventListener("click", function (e) {
        //   if (!icon.contains(e.target)) {
        //     menu.classList.remove("show");
        //   }
        // });
      })
    });
  }

});
