document.addEventListener("DOMContentLoaded", () => {

    const collectionsSlider = new Swiper(".collections-section-slider", {
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
});