import Swiper, { FreeMode } from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.logos-slider', {
        modules: [FreeMode],
        freeMode: true,
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        centeredSlides: true,
    });
});