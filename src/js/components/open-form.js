document.addEventListener("DOMContentLoaded", () => {

    /* Variables */

    const openFormBtns = document.querySelectorAll(".toggle-form");
    const searchForms = document.querySelectorAll(".search-form");
    const closeForm = document.querySelector(".search-form__close");

    /* Functions */

    function closeSearchForm (e) {
        searchForms.forEach(el => el.classList.remove("active"));
    }

    function toggleSearchForm  (e) {
        e.currentTarget.classList.toggle("active");
        searchForms.forEach(el => el.classList.toggle("active"))
    }

    /* Events */

    openFormBtns.forEach(btn => btn.addEventListener("click", toggleSearchForm));

    closeForm.addEventListener("click", closeSearchForm)
});