const slides = document.getElementsByClassName('carusel__item');

const slidesTotal = slides.length;
const nextButton = document.querySelector('#carusel_button--next');
const prevButton = document.querySelector('#carusel_button--prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {

    for(let slide of slides){   
        slide.classList.remove('carusel__item--visible');
        }

        if(slidePosition === slidesTotal -1 ) {
            slidePosition = 0;
        } else {
            slidePosition ++;
        }

        slides[slidePosition].classList.add(`carusel__item--visible`);
});

prevButton.addEventListener('click', () => {

    for(let slide of slides){   
        slide.classList.remove('carusel__item--visible');
        }

        if(slidePosition === 0 ) {
            slidePosition = slidesTotal -1 ;
        } else {
            slidePosition --;
        }

        slides[slidePosition].classList.add(`carusel__item--visible`);
});