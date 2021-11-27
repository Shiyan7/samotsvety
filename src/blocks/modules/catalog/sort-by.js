document.addEventListener("DOMContentLoaded", () => {

    const sortBy = document.querySelector(".sort-by");
    const sortByCurrent = document.querySelector(".sort-by__current");
    const sortByClose = document.querySelector(".sort-by__close")

    function visibleSort(e) {
        sortBy.classList.add("isOpen")

        document.body.classList.add("sort-open");
        
        if (e.classList.contains("sort-by__item")) {
            document.querySelectorAll(".sort-by__item").forEach(el => el.classList.remove("active"))
            e.classList.add("active");
            let text = e.textContent;
            sortByCurrent.textContent = text;
            hiddenSort();
        }
    }

    function hiddenSort () {
        sortBy?.classList.remove("isOpen");
        document.body.classList.remove("sort-open")
    }

    document.addEventListener("click", (e) => {
        
        if (e.target.closest(".open-sort-by") && !e.target.closest(".sort-by__close")) {
            visibleSort(e.target);
        } else if (e.target !== sortBy) {
            hiddenSort();
        }
    });

    sortByClose.addEventListener("click", hiddenSort);
});