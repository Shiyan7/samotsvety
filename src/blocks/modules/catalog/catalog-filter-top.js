document.addEventListener("DOMContentLoaded", () => {
    const catalogFilterTop = document.querySelectorAll(".catalog-filter__top");

    catalogFilterTop.forEach(el => el.addEventListener("click", toggleFilter));

    function toggleFilter () {
        this.closest(".catalog-filter").classList.toggle("isOpen");
    }
});