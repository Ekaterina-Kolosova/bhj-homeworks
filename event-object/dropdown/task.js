let dropDownList = document.querySelector('ul.dropdown__list');
let dropDownLink = document.querySelectorAll('a.dropdown__link');
let dropDownValue = document.querySelector('div.dropdown__value');

dropDownLink = Array.from(dropDownLink);

function showList() {
	dropDownList.classList.toggle("dropdown__list_active");
};

dropDownValue.addEventListener("click", showList);

for (let i = 0; i < dropDownLink.length; i++) {
	dropDownLink[i].onclick = function () {
		let searchItem = this.textContent;
		dropDownValue.textContent = searchItem;
		dropDownList.className = "dropdown__list";
		return false;
	};
};