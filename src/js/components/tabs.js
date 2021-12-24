document.addEventListener("DOMContentLoaded", () => {
    const moreTabsBtn = document.querySelectorAll(".g-tabs__btn--more");
    const catalogTabs = document.querySelector(".catalog__tabs");

    const moreTabs = (e, hiddenTabs) => {

        e.classList.toggle("active");
        e.closest(".g-tabs").classList.toggle("active");
        hiddenTabs.forEach(el => el.classList.toggle("g-tabs__item--hidden"));
        
    };

    moreTabsBtn?.forEach(btn => {

        const hiddenTabs = btn.closest(".g-tabs").querySelectorAll(".g-tabs__item--hidden");

        btn.addEventListener("click", (e) => {

            moreTabs(e.currentTarget, hiddenTabs)

        });

        document.addEventListener("click", (e) => {
            if(!e.target.closest(".catalog__tabs") && catalogTabs.classList.contains("active")) {
                document.querySelector(".catalog__tabs")?.classList.remove("active");
                document.querySelector(".catalog__tabs-more")?.classList.remove("active")
            }
        });
    });
});