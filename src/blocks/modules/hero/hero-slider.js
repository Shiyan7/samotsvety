import Swiper, { Navigation } from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.hero-slider', {
        modules: [Navigation],
        navigation: {
            nextEl: '.hero-slider__btn--next',
            prevEl: '.hero-slider__btn--prev',
          },
    });
});