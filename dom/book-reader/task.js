let book = document.querySelector('div.book');

let bookControl = document.querySelector('div.book__control');

bookControl.addEventListener('click', function(event) {
	let target = event.target;
	let dataSize = target.getAttribute('data-size');
	target.classList.add('font-size_active');
	if (dataSize === 'small') {
		book.classList.add('book_fs-small');
	} else if (dataSize === 'big') {
		book.classList.add('book_fs-big');
	};
	return false;
});
