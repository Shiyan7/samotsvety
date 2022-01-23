document.addEventListener("DOMContentLoaded", () => {
    const perfectCombinationSlider = document.querySelector(".perfect-combination-slider");
    const perfectCombinationSliderItems = document.querySelectorAll(".perfect-combination__item");

    if (perfectCombinationSlider) {
        let mySwiper;

        const initializeSlider = () => {

            if(perfectCombinationSliderItems.length == 1) mySwiper.destroy();

            mySwiper = new Swiper(perfectCombinationSlider, {
                slidesPerView: 'auto',
                spaceBetween: 6,
                centeredSlides: true,
                breakpoints: {
                    577: {
                        centeredSlides: false,
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                },
                scrollbar: {
                    el: '.perfect-combination-slider__scrollbar',
                },
                navigation: {
                    nextEl: '.perfect-combination-slider__btn--next',
                    prevEl: '.perfect-combination-slider__btn--prev',
                },
            });

        };

        if (window.innerWidth <= 768) {
            initializeSlider();
            perfectCombinationSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 768 && perfectCombinationSlider.dataset.mobile == "false") {
                initializeSlider();
                perfectCombinationSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 768) {
                perfectCombinationSlider.dataset.mobile = "false";
                if (perfectCombinationSlider.classList.contains("swiper-initialized")) {
                    mySwiper.destroy();
                }
            }
        };
        mobileSlider();

        window.addEventListener("resize", () => {
            mobileSlider();
        });
    }
});