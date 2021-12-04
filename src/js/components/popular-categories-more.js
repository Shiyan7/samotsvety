document.addEventListener("DOMContentLoaded", () => {
    const moreCategories = document.querySelector(".more-categories");
    const popularCategories = document.querySelector(".popular-categories");
    const hiddenCategories = document.querySelectorAll(".popular-category--hidden");

    moreCategories?.addEventListener("click", (e) => {
        popularCategories.classList.add("active");
        hiddenCategories.forEach(el => el.classList.remove("popular-category--hidden"));
        hiddenCategories.forEach(el => el.classList.add("popular-category--active"));
    });
});