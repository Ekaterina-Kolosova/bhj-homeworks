let rotatorCase = document.querySelectorAll('span.rotator__case');
rotatorCase = Array.from(rotatorCase);

function changeRotator () {
	for (let rotator of rotatorCase) {
		rotator.classList.toggle('rotator__case_active');
	};
};
setInterval(changeRotator, 1000);

