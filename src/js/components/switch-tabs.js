document.addEventListener("DOMContentLoaded", () => {
    const switchTabsBtn = document.querySelectorAll(".switch-tabs__btn");

    switchTabsBtn.forEach(el => {
        el.addEventListener("click", () => {

            const switchPath = el.dataset.switchPath;
            const switchTabs = el.closest(".switch-tabs");
            const switchContent = el.closest(".switch-tabs").querySelectorAll(".switch-tabs__content");

            switchTabs.querySelector('.switch-tabs__btn--active').classList.remove('switch-tabs__btn--active')

            switchTabs.querySelector(`[data-switch-path="${switchPath}"]`).classList.add('switch-tabs__btn--active');

            const handleContent = (path, el) => {
                switchContent.forEach(el => el.classList.remove('switch-tabs__content--active'));
                el.closest(".switch-tabs")?.querySelector(`[data-switch-target="${path}"]`)?.classList.add('switch-tabs__content--active');
            };

            handleContent(switchPath, el);
        });
    });
});