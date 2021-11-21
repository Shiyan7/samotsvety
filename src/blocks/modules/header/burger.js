document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".menu-btn");
    const overlay = document.querySelector(".overlay");
    const nav = document.querySelector(".nav");
    const body = document.body;

    const navOpen = () => {
        burger.classList.toggle("is-active");
        body.classList.toggle("lock");
        nav.classList.toggle("show");
        overlay.classList.toggle("active");
    };

    const navClose = () => {
        burger.classList.remove("is-active");
        body.classList.remove("lock");
        nav.classList.remove("show");
        overlay.classList.remove("active");
    };
    
    burger?.addEventListener("click", navOpen);
    overlay.addEventListener("click", navClose);
});