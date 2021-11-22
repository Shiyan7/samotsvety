import Swiper, { Navigation } from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.collection-section-slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 12,
        navigation: {
            nextEl: '.collection-section-slider__btn--next',
            prevEl: '.collection-section-slider__btn--prev',
          },
    });
});