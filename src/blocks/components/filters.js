export const filters = () => {

    const filtersBtn = document.querySelectorAll(".g-filters__btn");

    filtersBtn.forEach(el => {
        el.addEventListener("click", () => {

            const filtersPath = el.dataset.filtersPath;


            

            el.closest(".g-filters").querySelector('.g-filters__btn--active').classList.remove('g-filters__btn--active')

            el.closest(".g-filters").querySelector(`[data-filters-path="${filtersPath}"]`).classList.add('g-filters__btn--active');


            let filtersContent = el.closest(".g-filters").querySelectorAll(".g-filters__content");

            const switchContent = (path, element) => {
                for (let i = 0; i < filtersContent.length; i++) {
                    let el = filtersContent[i];
                    el.classList.remove('g-filters__content--active')
                }
                element.closest(".g-filters").querySelector(`[data-filters-target="${path}"]`).classList.add('g-filters__content--active');
            };


            switchContent(filtersPath, el);
        });
    });
}