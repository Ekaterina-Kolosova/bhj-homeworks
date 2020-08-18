let sliderItem = document.querySelectorAll("div.slider__item");
const sliderArrowPrevious = document.querySelector("div.slider__arrow_prev");
const sliderArrowNext = document.querySelector("div.slider__arrow_next");
sliderItem = Array.from(sliderItem);

let sliderDot = document.querySelectorAll("div.slider__dot");
sliderDot = Array.from(sliderDot);

let slideNumber = 0;
function changeSlide() {
	sliderItem[slideNumber].className = "slider__item";
	sliderDot[slideNumber].className = "slider__dot";
	slideNumber++;
	if (slideNumber >= sliderItem.length) {
	slideNumber = 0;
	} else if (slideNumber < 0) {
	slideNumber = sliderItem.length - 1;
	};
	
	sliderItem[slideNumber].className = "slider__item slider__item_active";
	sliderDot[slideNumber].className = "slider__dot slider__dot_active";
};

sliderArrowNext.onclick = changeSlide;

sliderArrowPrevious.onclick = changeSlide;