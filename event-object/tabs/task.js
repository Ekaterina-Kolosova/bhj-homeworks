let tab = document.querySelectorAll("div.tab");
tab = Array.from(tab);

let tabContent = document.querySelectorAll("div.tab__content");
tabContent = Array.from(tabContent);

let tabsFirst = document.getElementById("tabs1");

tabsFirst.addEventListener('click', function(event) {
	let target = event.target;
	if (target.className != "tab") return;
	showContent(target);
});

function showContent(td) {
	let selectedMenu = document.querySelector('div.tab_active');
	if (selectedMenu) {
		let searchTab = tab.indexOf(selectedMenu);
		selectedMenu.classList.remove('tab_active');
		tabContent[searchTab].classList.remove('tab__content_active');
	}
	selectedMenu = td;
	searchTab = tab.indexOf(td);
	selectedMenu.classList.add('tab_active');
	tabContent[searchTab].classList.add('tab__content_active');
};
