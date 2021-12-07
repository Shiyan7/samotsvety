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

                mySwiper.on('slideChange', function () {
                    const products = document.querySelectorAll('.product');

                    if (products) {
                        products.forEach(prdct => {
                            let currentProduct = prdct;
                            const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
                            const imagePagination = currentProduct.querySelector('.image-pagination');
                            if (imageSwitchItems.length > 1) {
                                imageSwitchItems.forEach((el, index) => {
                                    el.addEventListener('mouseenter', (e) => {
                                        currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {
                                            el.classList.remove('image-pagination__item--active')
                                        });
                                        currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
                                    });

                                    el.addEventListener('mouseleave', (e) => {
                                        currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {
                                            el.classList.remove('image-pagination__item--active')
                                        });
                                        currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
                                    });
                                });
                            }
                        });
                    }
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