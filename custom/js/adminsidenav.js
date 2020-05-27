let btnmenu = document.querySelector('#menubtn');
let sidebar = document.getElementsByTagName('ul')[0];
let content = document.getElementsByClassName('content-wrapper')[0];
let menutoggle = false;

btnmenu.addEventListener('click', function () {
	menutoggle = !menutoggle;
	if (menutoggle) {
		sidebar.classList.add('sidetoggle');
		content.classList.add('contenttoggle');
	} else {
		sidebar.classList.remove('sidetoggle');
		content.classList.remove('contenttoggle');
	}
});
