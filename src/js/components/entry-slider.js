document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".entry-slider", {
        slidesPerView: 'auto',
        spaceBetween: 25,

        pagination: {
            el: '.entry-slider__pag',
            type: 'bullets',
            clickable: true,
        },

        navigation: {
            nextEl: '.post-slider__btn--next',
            prevEl: '.post-slider__btn--prev',
          },
    });
});