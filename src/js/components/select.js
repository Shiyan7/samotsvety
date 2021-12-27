const selects = document.querySelectorAll(".g-select");

document.addEventListener("DOMContentLoaded", () => {
    if(selects) {
        selects.forEach(el => {
            const choices = new Choices(el, {
                searchPlaceholderValue: el.dataset.placeholder,
                itemSelectText: '',
                shouldSort: false,
                noResultsText: 'Не найдено'
            });
        });
    }
});