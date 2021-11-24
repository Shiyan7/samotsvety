export const tabs = () => {

    const tabsBtn = document.querySelectorAll(".g-tabs__btn");

    tabsBtn.forEach(el => {
        el.addEventListener("click", () => {

            const tabsPath = el.dataset.tabsPath;


            

            el.closest(".g-tabs").querySelector('.g-tabs__btn--active').classList.remove('g-tabs__btn--active')

            el.closest(".g-tabs").querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('g-tabs__btn--active');


            let tabsContent = el.closest(".g-tabs").querySelectorAll(".g-tabs__content");

            const switchContent = (path, element) => {
                for (let i = 0; i < tabsContent.length; i++) {
                    let el = tabsContent[i];
                    el.classList.remove('g-tabs__content--active')
                }
                element.closest(".g-tabs").querySelector(`[data-tabs-target="${path}"]`).classList.add('g-tabs__content--active');
            };


            switchContent(tabsPath, el);
        });
    });
}