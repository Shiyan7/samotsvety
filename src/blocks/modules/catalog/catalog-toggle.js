document.addEventListener("DOMContentLoaded", () => {

    const catalogToggle = document.querySelector(".catalog-toggle");

    function toggleCatalog() {
        this.classList.toggle("isOpen");
    }

    catalogToggle?.addEventListener("click", toggleCatalog);

});