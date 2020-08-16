let menuLink = document.getElementsByClassName("menu__link");
let menuSub = document.querySelectorAll('ul.menu_sub');

let menuLinkArray = Array.from(menuLink);
let menuSubArray = Array.from(menuSub);
for (let i = 0; i < menuLinkArray.length; i++) {
	menuLinkArray[i].onclick = function () {
		menuSubArray[i-1].className = "menu menu_sub menu_active";
		console.log(menuLinkArray);
		console.log(menuSubArray[i]);
		console.log(menuSubArray[i].className);
		return false;
	};
};
