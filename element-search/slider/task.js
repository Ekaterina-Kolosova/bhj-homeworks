let sliderItem = document.querySelectorAll("div.slider__item");
const sliderArrowPrevious = document.querySelector("div.slider__arrow_prev");
const sliderArrowNext = document.querySelector("div.slider__arrow_next");
sliderItem = Array.from(sliderItem);

let sliderDot = document.querySelectorAll("div.slider__dot");
sliderDot = Array.from(sliderDot);

let slideNumber = 0;
function changeSlide(slide) {
	sliderItem[slideNumber].className = "slider__item";
	sliderDot[slideNumber].className = "slider__dot";
	slideNumber = slide;
	sliderItem[slideNumber].className = "slider__item slider__item_active";
	sliderDot[slideNumber].className = "slider__dot slider__dot_active";
};

for (let i = 0; i < sliderDot.length; i++) {
	sliderDot[i].onclick = function () {
		changeSlide(i);
	};
};
let newSlideNumber = 0;

sliderArrowNext.onclick = function () {
	changeSlide(newSlideNumber);
	newSlideNumber++;
	if (newSlideNumber >= sliderItem.length) {
		newSlideNumber = 0;
	};
};

sliderArrowPrevious.onclick = function () {
	changeSlide(newSlideNumber);
	newSlideNumber--;
	if (newSlideNumber < 0) {
		newSlideNumber = sliderItem.length - 1;
	};
};
