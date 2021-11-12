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
    this.nextElementSibling.classList.toggle("show");

    arrow.forEach(Fa);
    function Fa(item) {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    }
  });
}
