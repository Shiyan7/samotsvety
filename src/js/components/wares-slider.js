/* productSlider(); */

document.addEventListener("DOMContentLoaded", () => {
    const waresSlider = document.querySelectorAll(".wares-slider");

    if (waresSlider) {

        waresSlider.forEach(el => {

            let mySwiper;

            const initializeSlider = () => {

                mySwiper = new Swiper(el, {

                    slidesPerView: 2,
                    loop: true,
                    spaceBetween: 15,
                    breakpoints: {
                        769: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 4,
                        },
                    },
                    navigation: {
                        nextEl: '.wares-slider__btn--next',
                        prevEl: '.wares-slider__btn--prev',
                    },
                });
            };

            if (window.innerWidth <= 576) {
                if (el.classList.contains("swiper-initialized")) {
                    mySwiper.destroy();
                }
                el.dataset.mobile = "true";
            }

            const mobileSlider = () => {
                if (window.innerWidth <= 576 && el.dataset.mobile == "false") {
                    el.dataset.mobile = "true";
                    if (el.classList.contains("swiper-initialized")) {
                        mySwiper.destroy();
                    }
                }

                if (window.innerWidth >= 576) {
                    initializeSlider();
                    el.dataset.mobile = "false";
                }
            };

            mobileSlider();

            window.addEventListener("resize", () => {
                mobileSlider();
            });

        });
    }
});