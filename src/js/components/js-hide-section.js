document.addEventListener("DOMContentLoaded", () => {
    const jsHideBtns = document.querySelectorAll(".js-hide-btn-section");

    function hideSection () {
        let content = this.closest(".js-section").querySelector(".js-section-content")

        this.innerText !== 'Показать блок:' ? this.innerText = 'Показать блок:' : this.innerText = 'Скрыть блок:';

        this.classList.toggle("active")
        content.classList.toggle("hide-section")
    }

    jsHideBtns?.forEach(el => el.addEventListener("click", hideSection));
});