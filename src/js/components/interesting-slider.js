document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".interesting-slider", {
        spaceBetween: 12,
        slidesPerView: 1,

        breakpoints: {

            577: {
                slidesPerView: 2,
            },

            769: {
                slidesPerView: 3,
            },

            1025: {
                slidesPerView: 4,
            }
        },

        navigation: {
            nextEl: '.interesting-slider__btn--next',
            prevEl: '.interesting-slider__btn--prev',
        },
    });
});