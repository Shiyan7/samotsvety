document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.hero-slider', {
        loop: true,
        navigation: {
            nextEl: '.hero-slider__btn--next',
            prevEl: '.hero-slider__btn--prev',
        },

        pagination: {
            el: '.hero-slider__pag',
            type: 'bullets',
            clickable: true,
        },
    });
});