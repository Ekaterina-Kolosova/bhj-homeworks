const countSeconds  = function() {
	const timer = document.getElementById("timer");
	if (timer.textContent > 0) {
		timer.textContent -= 1;
	} else {
		clearInterval(counter);
		alert('Вы победили в конкурсе!');
	};
}

const counter = setInterval(countSeconds, 1000);