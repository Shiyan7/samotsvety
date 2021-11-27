import { filters } from "../../components/filters";
import Swiper, {
    Navigation,
    Scrollbar
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {

    const collectionsSlider = new Swiper(".collections-section-slider", {
        modules: [Navigation, Scrollbar],
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 6,
        breakpoints: {
            577: {
                centeredSlides: false,
            },
            769: {
                spaceBetween: 12,
                centeredSlides: false,
            }
        },
        scrollbar: {
            el: '.collections-section-slider__scrollbar',
        },
        navigation: {
            nextEl: '.collections-section-slider__btn--next',
            prevEl: '.collections-section-slider__btn--prev',
        },
    });

    filters();
});