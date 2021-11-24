import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.hero-slider', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.hero-slider__btn--next',
            prevEl: '.hero-slider__btn--prev',
        },

        pagination: {
            el: '.hero-slider__pag',
            type: 'bullets',
            clickable: true,
        },
    });
});