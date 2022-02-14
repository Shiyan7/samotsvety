/* document.addEventListener("DOMContentLoaded", () => {
    const textareas = document.querySelectorAll(".js-textarea-auto-height");

    textareas.forEach(el => {
        el.style.height = el.setAttribute('style', 'height: ' + (el.scrollHeight - 2) + 'px');
        el.addEventListener('input', e => {
            el.classList.add('auto');
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        });
    })
}); */