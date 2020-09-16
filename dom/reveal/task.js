let isInViewport = function (element) {
	let viewportHeight = window.innerHeight;
	let elementTop = element.getBoundingClientRect().top;
	let elementBottom = element.getBoundingClientRect().bottom;
	console.log(elementTop);
	console.log(elementBottom);
	console.log(viewportHeight);
	if (elementTop < viewportHeight) {
		element.classList.add('reveal_active');
		console.log(revealedBlock);
	} else if (elementBottom < 0) {
		element.classList.remove('reveal_active');
	};
};
let revealedBlocks = document.querySelectorAll('div.reveal');
revealedBlocks = Array.from(revealedBlocks);
window.addEventListener('scroll', function(event) {
	for (revealedBlock of revealedBlocks) {
		isInViewport(revealedBlock);
	};
});

