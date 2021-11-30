import Swiper, {
    Navigation,
    Scrollbar,
} from "swiper";

document.addEventListener("DOMContentLoaded", () => {
    const perfectCombinationSlider = document.querySelector(".perfect-combination-slider");

    if (perfectCombinationSlider) {
        let mySwiper;

        const initializeSlider = () => {

            mySwiper = new Swiper(perfectCombinationSlider, {
                slidesPerView: 'auto',
                spaceBetween: 6,
                centeredSlides: true,
                modules: [Navigation, Scrollbar],
                breakpoints: {
                    577: {
                        centeredSlides: false,
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

            if (window.innerWidth >= 768) {
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