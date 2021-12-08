document.addEventListener("DOMContentLoaded", () => {
    const menuSlider = document.querySelector(".menu-slider");

    const cardSliderThumbs = new Swiper(menuSlider, {
        slidesPerView: "auto",
        spaceBetween: 12,

        navigation: {
            nextEl: '.menu-slider__btn--next',
            prevEl: '.menu-slider__btn--prev',
        },
    });
});