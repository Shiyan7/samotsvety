document.addEventListener("DOMContentLoaded", () => {
    const footerTitles = document.querySelectorAll(".footer__title");

    footerTitles.forEach(el => {
        el.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("active")
            el.closest(".footer__col").querySelector(".footer-menu").classList.toggle("active")
        });
    })
});