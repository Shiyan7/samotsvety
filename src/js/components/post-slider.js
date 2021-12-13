document.addEventListener("DOMContentLoaded", () => {
    const postSlider = new Swiper(".post-slider", {
        slidesPerView: 'auto',
        spaceBetween: 25,
        navigation: {
            nextEl: '.post-slider__btn--next',
            prevEl: '.post-slider__btn--prev',
          },
    });
});