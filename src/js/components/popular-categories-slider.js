document.addEventListener("DOMContentLoaded", () => {
    const popularCategoriesSlider = document.querySelector(".popular-categories-slider");

    if (popularCategoriesSlider) {
        let mySwiper;

        const initializeSlider = () => {


            mySwiper = new Swiper(popularCategoriesSlider, {
                slidesPerView: 'auto',
                spaceBetween: 6,
                centeredSlides: true,
                breakpoints: {
                    577: {
                        centeredSlides: false,
                    },
                },
                scrollbar: {
                    el: '.popular-categories-slider__scrollbar',
                },
                navigation: {
                    nextEl: '.popular-categories-slider__btn--next',
                    prevEl: '.popular-categories-slider__btn--prev',
                },
            });

        };

        if (window.innerWidth <= 768) {
            initializeSlider();
            popularCategoriesSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 768 && popularCategoriesSlider.dataset.mobile == "false") {
                initializeSlider();
                popularCategoriesSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 768) {
                popularCategoriesSlider.dataset.mobile = "false";
                if (popularCategoriesSlider.classList.contains("swiper-initialized")) {
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