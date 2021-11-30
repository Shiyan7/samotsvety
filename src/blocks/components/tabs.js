document.addEventListener("DOMContentLoaded", () => {
    const moreTabsBtn = document.querySelector(".g-tabs__btn--more");
    const hiddenTabs = document.querySelectorAll(".g-tabs__item--hidden");

    function moreTabs (e) {
        e.currentTarget.classList.toggle("active");
        e.currentTarget.closest(".g-tabs").classList.toggle("active");
        hiddenTabs.forEach(el => el.classList.toggle("g-tabs__item--hidden"))
    }

    moreTabsBtn?.addEventListener("click", moreTabs);
});