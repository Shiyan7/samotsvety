document.addEventListener("DOMContentLoaded", () => {
    const benefitsMoreBtns = document.querySelectorAll(".benefits__more");
    

    function loadBenefits (e) {
        const benefits = e.currentTarget.closest(".benefits");
        const hiddenBenefits = benefits.querySelectorAll(".benefits__item--hidden");

        hiddenBenefits.forEach(el => el.classList.remove("benefits__item--hidden"));

        e.currentTarget.remove();
    }

    benefitsMoreBtns?.forEach(btn => {
        btn.addEventListener("click", loadBenefits);
    })
});