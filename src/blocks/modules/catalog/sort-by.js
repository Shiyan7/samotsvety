document.addEventListener("DOMContentLoaded", () => {

    const sortBy = document.querySelector(".sort-by");
    const sortByCurrent = document.querySelector(".sort-by__current");

    function visibleSort(e) {
        sortBy.classList.toggle("isOpen")

        if (e.classList.contains("sort-by__item")) {
            document.querySelectorAll(".sort-by__item").forEach(el => el.classList.remove("active"))
            e.classList.add("active");
            let text = e.textContent;
            sortByCurrent.textContent = text;
        }
    }

    function hiddenSort () {
        sortBy?.classList.remove("isOpen");
    }

    document.addEventListener("click", (e) => {
        if (e.target.closest(".sort-by__select")) {
            visibleSort(e.target);
        } else if (e.target !== sortBy) {
            hiddenSort();
        }
    })
});