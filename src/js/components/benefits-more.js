document.addEventListener("DOMContentLoaded", () => {
    const benefitsMoreBtns = document.querySelectorAll(".benefits__more");

    let flag = 0;

    function toggleBenefits(e, hiddenBenefits) {

        hiddenBenefits.forEach(el => el.classList.toggle("benefits__item--hidden"));
        
        if (flag == 0) {
            flag++;
            e.currentTarget.innerHTML = 'Скрыть'
        } else {
            flag--;
            e.currentTarget.innerHTML = 'Все преимущества'
        }
    }

    benefitsMoreBtns?.forEach(btn => {

        const benefits = btn.closest(".benefits");
        const hiddenBenefits = benefits.querySelectorAll(".benefits__item--hidden");

        btn.addEventListener("click", (e) => {

            
            toggleBenefits(e, hiddenBenefits);
        });
    })
});