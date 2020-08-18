let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close modal__close_times');
modalMain.className = 'modal modal_active';
Array.from(modalClose);
modalClose[0].onclick = function () {
	modalMain.className = 'modal';
};

let showSuccess = document.querySelector('a.show-success');
showSuccess.onclick = function () {
	modalMain.className = 'modal';
	modalSuccess.className = 'modal modal_active';
};
modalClose[1].onclick = function () {
	modalSuccess.className = 'modal';
	modalMain.className = 'modal';
};