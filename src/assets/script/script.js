
document.addEventListener('DOMContentLoaded', function (event) {
  let SimpleBar = require("simplebar");

  btnIconArrow();
  accordion();
  btnTextArrow();
  openLeftMenu();
  showPassword();
  indiv();
  quantity();
  barStatus(20);


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

  function showPassword() {
    document.querySelectorAll('.password-wrapper').forEach(item => {
      let iconP = item.querySelector('.show-password');
      let inputP = item.querySelector("input[type='password']");
      iconP.addEventListener("mouseover", () => {
        inputP.setAttribute("type", "text");
      });
      iconP.addEventListener("mouseout", () => {
        inputP.setAttribute("type", "password");
      });
    });
  }

  function indiv() {
    let inputChecked = document.querySelector(".individual input[type='checkbox']");
    if (inputChecked) {
      inputChecked.addEventListener("change", function () {
        document.querySelectorAll('.inn').forEach(item => {
          if (inputChecked.checked) {
            item.setAttribute('disabled', true);
          } else {
            item.removeAttribute('disabled');
          }
        })
      });
    }
  }

  function quantity() {
    let minus = document.querySelectorAll('.amount .icon-minus');
    let add = document.querySelectorAll('.amount .icon-add');
    let quanNumber = document.querySelector("input[type='number']");
    if (minus.forEach(item => {
      item.addEventListener('click', function () {
        let qty = parseInt(quanNumber.value);
        if (qty === 0) {
          qty = 0
        }
        else {
          qty = qty - 1;
          quanNumber.value = qty;
        }

      });
    }));

    if (add.forEach(item => {
      item.addEventListener('click', function () {
        let qty = parseInt(quanNumber.value);
        qty = qty + 1;
        quanNumber.value = qty;
      });
    }));

  }


  function barStatus(count) {
    document.querySelectorAll(".progress-bar").forEach(barGroup => {
      let opt = [12, 36, 108, 252];
      let status = [undefined, undefined, undefined, undefined];
      opt.forEach((item, index) => {
        if (count > (opt[index - 1] || 0) && (count < opt[index])) {
          status[index] = "в процессе";
        }
        else if (count >= item) {
          status[index] = "готов";
        }
        else {
          status[index] = "пустой";
        }

      });
      let bar = barGroup.querySelectorAll('.bar-item');
      bar.forEach((item, index) => {
        if (status[index] == "готов") {
          item.classList.add('gotov');
        }
        else if (status[index] == "пустой") {
          item.classList.add('pustoi');
        }
        else if (status[index] == "в процессе") {
          item.classList.add('vprocese');
          let lengthStep = opt[index] + opt[index - 1] || 0;
          let percent = (count / lengthStep) * 100;
          item.style.background = `linear-gradient(90deg,#F9FAEA ${percent}%,#EAECE5 ${percent}%)`;
        }

      });
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