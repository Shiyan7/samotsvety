document.addEventListener("DOMContentLoaded", () => {
    const moreCategories = document.querySelector(".more-categories");
    const popularCategories = document.querySelector(".popular-categories");
    const hiddenCategories = document.querySelectorAll(".popular-category--hidden");
    const popularCategoriesItems = document.querySelectorAll(".popular-category__item");

    moreCategories?.addEventListener("click", (e) => {
        
        popularCategories.classList.add("active");
        hiddenCategories.forEach(el => el.classList.remove("popular-category--hidden"));

        popularCategoriesItems.forEach(el => {
            TweenMax.staggerTo(el, .5, {
                scale: 1,
                opacity: 1,
                ease: Back.easeIn.config(1)
            }, .3);
        })
    });
});