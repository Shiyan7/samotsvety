document.addEventListener("DOMContentLoaded", () => {
    const orderingOpenPopupBtns = document.querySelectorAll(".js-toggle-ordering-popup");
    const orderingList = document.querySelector(".ordering-list");
    const body = document.body;

    function showOrderingPopup () {
        orderingList.classList.toggle("show");
        body.classList.toggle("lock")
    }

    orderingOpenPopupBtns.forEach(el => {
        el.addEventListener("click", showOrderingPopup)
    });
});