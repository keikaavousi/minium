let btnmenu = document.getElementsByTagName("button")[0];
let btnsvg = document.getElementsByTagName("svg")[0];
let navbar = document.getElementsByTagName("ul")[0];
let menutoggle = true;

btnmenu.addEventListener("click", function(){
    menutoggle = !menutoggle;
    if (menutoggle) {
      navbar.classList.add("open");
      btnsvg.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>`;
    } else {
      navbar.classList.remove("open");
      btnsvg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>`;
    }
}); 
