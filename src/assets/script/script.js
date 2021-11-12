let open = document.querySelector(".dropbtn");
let arrow = document.querySelector(".icon-arrow");

// open.forEach(P);

// function P(item) {
//   item.addEventListener("click", function () {
//     document.getElementById("btnInfo").classList.toggle("show");
//   });
// }
// let arrow = document.querySelectorAll(".icon-arrow");
// arrow.forEach(T);

// function T(item) {
//   item.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }
// // arrow.forEach(T);

// // function T(item) {
// //   item.addEventListener("click", function () {
// //     arrow.classList.toggle("active");
// //   });
// // }

open.addEventListener("click", function () {
  document.getElementById("btnInfo").classList.toggle("show");
  arrow.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        arrow.classList.remove("active");
      }
    }
  }
});
