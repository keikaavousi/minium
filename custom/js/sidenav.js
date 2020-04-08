let closebtn = document.getElementById("navclose");
let openbtn = document.getElementById("navopen");
let sidenav = document.getElementsByClassName("sidenav")[0];
let main = document.getElementById("main");
let overlay = document.getElementsByClassName("overlay")[0];
openbtn.addEventListener("click", function () {
  main.style.marginLeft = "250px";
  sidenav.style.width = "250px";
  overlay.classList.add("overlayed");
});
closebtn.addEventListener("click", function () {
  main.style.marginLeft = "0px";
  sidenav.style.width = "0px";
  overlay.classList.remove("overlayed");
});
