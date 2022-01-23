document.addEventListener("DOMContentLoaded", () => {
    const anchorLinks = document.querySelectorAll(".anchor-link");

    anchorLinks.forEach(el => {
        el.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = el.getAttribute("href").substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});