document.addEventListener("DOMContentLoaded", () => {
    const modalPromocode = document.querySelector(".modal__promocode");
    let flag = 0;

    function returnPromocode () {
        return `<input class="g-input modal-form__input" type="text" name="promocode" placeholder="Введите промокод">`
    }

    modalPromocode?.addEventListener("click", (e) => {

        flag == 0 ? e.currentTarget.insertAdjacentHTML("afterend", returnPromocode()) : false;

        flag++

    });
});