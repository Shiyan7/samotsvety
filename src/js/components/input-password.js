document.addEventListener("DOMContentLoaded", () => {
    const inputPasswordBtns = document.querySelectorAll(".g-input-password__btn");

    inputPasswordBtns.forEach(el => {
        el.addEventListener("click", () => {
            let parent = el.closest(".g-input-password");
            let input = parent.querySelector("input");
            let type = input.type;
            let target = type !== 'password' ? type = 'password' : type = `text`;
            input.type = target;
        });
    });
})