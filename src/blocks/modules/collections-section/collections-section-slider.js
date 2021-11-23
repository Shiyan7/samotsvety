import Swiper, {
    Navigation,
    Scrollbar
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.collections-section-slider', {
        modules: [Navigation, Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 12,
        scrollbar: {
            el: '.collections-section-slider__scrollbar',
        },
        navigation: {
            nextEl: '.collections-section-slider__btn--next',
            prevEl: '.collections-section-slider__btn--prev',
        },
    });
});