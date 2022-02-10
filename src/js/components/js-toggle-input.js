document.addEventListener("DOMContentLoaded", () => {
    const cabinetContentInputs = document.querySelectorAll(".js-toggle-input");

    let flag = 0;

    function clearValue (inputs) {
        inputs.value = null
    }
    
    function toggleInputs () {
        let txt = this.querySelector("span");
        let target = this.dataset.text;
        let parent = this.closest(".cabinet-accordion__content");
        let passwordInputs = parent.querySelectorAll(".g-input-password__input")
        parent.classList.toggle("active");
        this.classList.add("cabinet-content__edit--active");

        if(flag == 0) {
            txt.innerHTML = 'Сохранить изменения'
            flag++
        } else {
            txt.innerHTML = target
            /* passwordInputs.forEach(el => clearValue(el)) */
            flag--
        }
    }

    cabinetContentInputs.forEach(el => el.addEventListener("click", toggleInputs))
});