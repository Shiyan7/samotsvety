import { tabs } from "../../components/tabs";
import Swiper, {
    Navigation,
    Scrollbar
} from 'swiper';

document.addEventListener("DOMContentLoaded", () => {

    const collectionsSlider = new Swiper(".collections-section-slider", {
        modules: [Navigation, Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 6,
        breakpoints: {
            769: {
                spaceBetween: 12
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

    tabs();
});