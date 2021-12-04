document.addEventListener("DOMContentLoaded", () => {

    const catalogToggle = document.querySelector(".filters-toggle");
    const catalogFilters = document.querySelector(".catalog-filters");
    const catalogFiltersClose = document.querySelector(".catalog-filters__close");

    function toggleFilters() {
        this.classList.toggle("isOpen");
        catalogFilters.classList.toggle("isOpen");
        document.body.classList.toggle("filters-open")
    }

    function hiddenFilters () {
        catalogFilters.classList.remove("isOpen");
        document.body.classList.remove("filters-open");
        catalogToggle.classList.remove("isOpen");
    }

    catalogToggle?.addEventListener("click", toggleFilters);

    catalogFiltersClose?.addEventListener("click", hiddenFilters);

});


const checboxes = document.querySelectorAll("input[type=checkbox]");

checboxes.forEach(el => {
    el.addEventListener("change", (e) => {
        console.log(e.currentTarget);
    })
})