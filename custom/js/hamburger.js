let btnmenu = document.getElementsByTagName("button")[0];
let btn = document.getElementsByTagName("span")[0];
let navbar = document.getElementsByTagName("ul")[0];
let menutoggle = false;

btnmenu.addEventListener("click", function () {
  menutoggle = !menutoggle;
  if (menutoggle) {
    navbar.classList.add("open");
    btn.classList.add("toggle");
  } else {
    navbar.classList.remove("open");
    btn.classList.remove("toggle");
  }
});
