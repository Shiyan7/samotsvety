gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.logos').forEach((section, index) => {
    const w = section.querySelector('.logos-slider .swiper-wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -0.2] : [w.scrollWidth * -0.2, 0];
    gsap.fromTo(w, {
        x
    }, {
        x: xEnd,
        scrollTrigger: {
            trigger: section,
            scrub: 1
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.logos-slider', {
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        centeredSlides: true,
    });
});