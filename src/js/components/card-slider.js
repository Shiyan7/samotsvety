document.addEventListener("DOMContentLoaded", () => {

    const cardSliderThumbs = new Swiper(".card-slider__nav", {
        slidesPerView: "auto",
        spaceBetween: 18,
        watchSlidesProgress: true,
    });


    new Swiper(".card-slider__main", {
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