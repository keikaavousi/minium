let prebtn = document.getElementsByClassName('btncopy');
let precode = document.getElementsByClassName('precode');

// for (const btn of prebtn) {
// 	btn.addEventListener('click', function () {
// 		const el = document.createElement('textarea');
//     el.value = btn.textContent;
//     console.log(el.value,el.innerHTML);
// 		// document.body.appendChild(el);
// 		// el.select();
// 		// document.execCommand('copy');
// 		// document.body.removeChild(el);
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
