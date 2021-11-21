import Swiper, { EffectFade, Navigation } from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
    const heroSlider = new Swiper('.hero-slider', {
        modules: [EffectFade, Navigation],
        navigation: {
            nextEl: '.hero-slider__btn--next',
            prevEl: '.hero-slider__btn--prev',
          },
    });
});