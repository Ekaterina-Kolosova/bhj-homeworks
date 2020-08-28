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

sliderArrowNext.onclick = function () {
	changeSlide(slideNumber >= sliderItem.length - 1 ? slideNumber = 0 : slideNumber + 1);
};

sliderArrowPrevious.onclick = function () {
	changeSlide(slideNumber <= 0 ? slideNumber = sliderItem.length - 1 : slideNumber - 1);
};
