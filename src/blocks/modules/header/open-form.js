document.addEventListener("DOMContentLoaded", () => {

    const searchForm = document.querySelectorAll(".search-form__form");


    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("open-form")) {
            searchForm.forEach(el => el.classList.toggle("active"));
        } else if(!e.target.closest(".search-form")) {
            searchForm.forEach(el => el.classList.remove("active"));
        }
    });
});