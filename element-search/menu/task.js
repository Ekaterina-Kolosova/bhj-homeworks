let menuLink = document.getElementsByClassName("menu__link");
let menuSub = document.querySelectorAll('ul.menu_sub');

menuLink = Array.from(menuLink);
menuSub = Array.from(menuSub);
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = function () {
		menuSub[i-1].className = "menu menu_sub menu_active";
		return false;
	};
	// menuLink[i].onclick = function () {
	// 	menuSub[i-1].className = "menu menu_sub";
	// 	return false;
	// };
};
