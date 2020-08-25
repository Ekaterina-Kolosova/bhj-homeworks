let menuLink = document.getElementsByClassName("menu__link");

menuLink = Array.from(menuLink);

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = function () {
		let elementSearch = menuLink[i].closest('li');
		elementSearch.querySelector('ul.menu_sub').classList.toggle("menu_active");
		return false;
	};
};

