document.addEventListener("DOMContentLoaded", () => {
    const cartShopChoiceBtns = document.querySelectorAll(".cart-shop__choice");
    const cartShops = document.querySelectorAll(".cart-shop");

    function handleChoice () {
        let target = this.textContent;
        let parent = this.closest(".cart-shop");

        target !== 'Изменить выбор' ? target = 'Изменить выбор' : target = `Выбрать`;

        this.textContent = target;
        cartShops.forEach(el => el.classList.toggle("cart-shop--hidden"));
        parent.classList.toggle("cart-shop--selected");
        parent.classList.remove("cart-shop--hidden");

        parent.scrollIntoView({
            block: "center",
        });
    }

    cartShopChoiceBtns.forEach(el => el.addEventListener("click", handleChoice));
});