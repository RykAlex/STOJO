document.addEventListener("DOMContentLoaded", function (event) {
  let SimpleBar = require("simplebar");

  btnIconArrow();
  accordion();
  btnTextArrow();
  openLeftMenu();
  showPassword();
  showPasswordNew();
  ifIIndiv();
  checkPassword();


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
    let icon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu-auth');
    icon.addEventListener("click", () => {
      menu.classList.toggle('show');
    });
    window.addEventListener("click", function (e) {
      if (!icon.contains(e.target)) {
        menu.classList.remove("show");
      }
    })
  }



  let headerHeight = document.querySelector('header').getBoundingClientRect().height;
  console.log(headerHeight);
  let footerHeight = document.querySelector('footer').getBoundingClientRect().height;
  console.log(footerHeight);

  let footerminiHeight = document.querySelector('footer.mobile').getBoundingClientRect().height;
  console.log(footerminiHeight);

  // function validateComments(input) {
  //   if (input.value.length < 20) {
  //     input.setCustomValidity("Дайте более развернутый ответ.");
  //   }
  //   else {
  //     // Длина комментария отвечает требованию,
  //     // поэтому очищаем сообщение об ошибке
  //     input.setCustomValidity("");
  //   }
  // }

  function showPasswordNew() {
    let eye = document.querySelector('.show-password-new');
    eye.addEventListener("mouseover", () => {

      let ele1 = document.querySelector('#passwordNew');
      ele1.setAttribute("type", "text");
    });
    eye.addEventListener("mouseout", () => {
      let ele1 = document.querySelector('#passwordNew');
      ele1.setAttribute("type", "password");
    });
  }
  function showPassword() {
    let eye = document.querySelector('.show-password');
    eye.addEventListener("mouseover", () => {
      let ele1 = document.querySelector('#password');
      ele1.setAttribute("type", "text");
    });
    eye.addEventListener("mouseout", () => {
      let ele1 = document.querySelector('#password');
      ele1.setAttribute("type", "password");
    });
  }

  function ifIIndiv() {
    let inputChecked = document.querySelector('.checkbox');
    inputChecked.addEventListener('change', function () {
      document.querySelectorAll('.inn').forEach(item => {
        if (inputChecked.checked) {
          item.setAttribute('disabled', true);
        } else {
          item.removeAttribute('disabled');
        }
      })
    });
  }




});


// function initFooterAccordeons(accordeons) {
//   if (accordeons.length) {
//     accordeons.forEach((accordeon) => {
//       let chevron = accordeon.querySelector(".icon-chevron-down")
//       accordeon.querySelector("h5")
//         .addEventListener("click", function () {
//           vanillaSlideToggle(accordeon.querySelector(".col-content"))
//           chevron.classList.toggle("icon-chevron-down")
//           chevron.classList.toggle("icon-chevron-up")
//         })
//     })
//   }
// }

// function vanillaSlideToggle(elem, initialHeight) {
//   event.stopPropagation
//   if (initialHeight) {
//     if (elem.style.maxHeight != `${initialHeight}px`) {
//       elem.style.maxHeight = `${initialHeight}px`
//     } else {
//       elem.style.maxHeight = `${elem.scrollHeight}px`
//     }
//   } else {
//     if (elem.style.maxHeight) {
//       elem.style.maxHeight = null
//     } else {
//       elem.style.maxHeight = `${elem.scrollHeight}px`
//     }
//   }
// }