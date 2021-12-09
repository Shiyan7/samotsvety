document.addEventListener("DOMContentLoaded", () => {
    const menuSliders = document.querySelectorAll(".menu-slider");

    menuSliders.forEach(slider => {
        new Swiper(slider, {
            freeMode: true,
            slidesPerView: "auto",
            spaceBetween: 6,

            breakpoints: {
                577: {
                    spaceBetween: 12,
                },
            },
    
            navigation: {
                nextEl: '.menu-slider__btn--next',
                prevEl: '.menu-slider__btn--prev',
            },
        });
    })
});