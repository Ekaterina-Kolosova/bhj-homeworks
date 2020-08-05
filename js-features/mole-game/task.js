
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1;  i < 10; i++) {
	getHole = index => document.getElementById(`hole${index}`);
		getHole(i).onclick = function() {
			if (getHole(i).className.includes('hole_has-mole')) {
				dead.textContent = +dead.textContent + 1;
			} else {
				lost.textContent = +lost.textContent + 1;
			};
		};
};

if (dead.textContent === 10) {
	alert('Вы выиграли');
	dead.textContent = 0;
	lost.textContent = 0;
} else if (lost.textContent === 5) {
	alert('Вы проиграли');
};