import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.product-slider', {
        modules: [Navigation, Pagination],
        allowTouchMove: false,
        slidesPerView: 'auto',
        breakpoints: {
            1025: {
                allowTouchMove: true,
            },
        },
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