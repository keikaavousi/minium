let btnmenu = document.querySelector('#menubtn');
let sidebar = document.getElementsByTagName('ul')[0];
let content = document.getElementsByClassName('content-wrapper')[0];
let menutoggle = false;

btnmenu.addEventListener('click', function () {
	menutoggle = !menutoggle;
	if (menutoggle) {
		sidebar.classList.add('sidetoggle');
		content.classList.add('contenttoggle');
		// btnmenu.children[0].innerHTML = `
		// <line x1="18" y1="6" x2="6" y2="18"></line>
		// <line x1="6" y1="6" x2="18" y2="18"></line>`;
	} else {
		sidebar.classList.remove('sidetoggle');
		content.classList.remove('contenttoggle');
		// btnmenu.children[0].innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line>
		// <line x1="3" y1="6" x2="21" y2="6"></line>
		// <line x1="3" y1="18" x2="21" y2="18"></line>`;
	}
});
