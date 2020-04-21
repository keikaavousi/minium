let prebtn = document.getElementsByClassName('btncopy');
let precode = document.getElementsByClassName('precode');
// for (const i in prebtn) {
// 	prebtn[i].addEventListener('click', function () {
// 		const el = document.createElement('textarea');
// 		el.value = precode[i].textContent;
// 		document.body.appendChild(el);
// 		el.select();
// 		document.execCommand('copy');
// 		document.body.removeChild(el);
// 	});
// }
for (let i = 0; i < prebtn.length; i++) {
	prebtn[i].addEventListener('click', function () {
		const el = document.createElement('textarea');
		el.value = precode[i].textContent;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	});
}
