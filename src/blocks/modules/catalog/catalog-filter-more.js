document.addEventListener("DOMContentLoaded", () => {
    const moreFilters = document.querySelectorAll(".catalog-filter__more");

    function loadMoreFilters (e) {
        const filtersContent = e.closest(".catalog-filter__content");
        const hiddenFilters = filtersContent.querySelectorAll(".catalog-filter__item--hidden");

        hiddenFilters.forEach(el => el.classList.remove("catalog-filter__item--hidden"));

        e.remove();
    }

    moreFilters?.forEach(el => {
        el.addEventListener("click", (e) => {
            loadMoreFilters(e.currentTarget);
        });
    });
});