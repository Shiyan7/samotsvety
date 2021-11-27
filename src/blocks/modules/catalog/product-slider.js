import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.product-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.product-slider__btn--next',
            prevEl: '.product-slider__btn--prev',
        },

        pagination: {
            el: '.product-slider__pag',
            type: 'bullets',
            clickable: true,
        },
    });
});