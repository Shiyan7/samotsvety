document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".g-accordion");

    accordions?.forEach(el => {
        new GraphAccordion(el);
    })
});