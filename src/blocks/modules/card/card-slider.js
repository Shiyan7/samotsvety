import Swiper, { Navigation, Thumbs } from "swiper";
import fslightbox from "fslightbox";

document.addEventListener("DOMContentLoaded", () => {

    const cardSliderThumbs = new Swiper(".card-slider__nav", {
        module: [Navigation, Thumbs],
        slidesPerView: "auto",
        spaceBetween: 18,
        watchSlidesProgress: true,
    });


    new Swiper(".card-slider__main", {
        modules: [Navigation, Thumbs],
        spaceBetween: 18,
        navigation: {
            nextEl: ".card-slider__btn--next",
            prevEl: ".card-slider__btn--prev",
        },
        thumbs: {
            swiper: cardSliderThumbs,
        }
    });
});