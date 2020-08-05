const clickCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function changeSizes() {
	cookie.width = 200;
};

cookie.onclick = function() {
	clickCounter.textContent = +clickCounter.textContent + 1;
	this.width = 175;
	setTimeout(changeSizes, 100);	
};

