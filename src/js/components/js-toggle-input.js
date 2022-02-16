document.addEventListener("DOMContentLoaded", () => {
    const cabinetContentInputs = document.querySelectorAll(".js-toggle-input");
    
    function toggleInputs () {
        let txt = this.querySelector("span");
        let target = this.dataset.text;
        let parent = this.closest(".cabinet-accordion__content");
        let input = parent.querySelector("input");
        if(!input.classList.contains("error") && input.value.length > 0) {
            parent.classList.toggle("active");
            this.classList.add("cabinet-content__edit--active");
            txt.innerHTML !== 'Сохранить изменения' ? txt.innerHTML = 'Сохранить изменения' : txt.innerHTML = target;
        }
    }

    cabinetContentInputs?.forEach(el => el.addEventListener("click", toggleInputs))
});