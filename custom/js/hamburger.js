let btnmenu = document.getElementsByTagName('input')[0];
let navbar = document.getElementsByTagName('ul')[0];

btnmenu.addEventListener('click', function () {
	btnmenu.checked
		? navbar.classList.add('open')
		: navbar.classList.remove('open');
});

// if (btnmenu.checked) {
// 	navbar.classList.add('open');
// } else {
// 	navbar.classList.remove('open');
// }

// switch (btnmenu.checked) {
// 	case true:
// 		navbar.classList.add('open');
// 		break;
// 	default:
// 		navbar.classList.remove('open');
// 		break;
// }

// btnmenu.checked
// 	? navbar.classList.add('open')
// 	: navbar.classList.remove('open');
