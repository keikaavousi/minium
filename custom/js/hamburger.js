let btnmenu = document.getElementsByTagName("input")[0];
let navbar = document.getElementsByTagName("ul")[0];

btnmenu.addEventListener("click", function () {
  if (btnmenu.checked) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
});
