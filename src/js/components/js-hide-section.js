document.addEventListener("DOMContentLoaded", () => {
    const jsHideBtns = document.querySelectorAll(".js-hide-btn-section");

    function hideSection () {
        let section = this.closest(".js-section");
        section.remove();
    }

    jsHideBtns?.forEach(el => el.addEventListener("click", hideSection));
});