document.addEventListener("DOMContentLoaded", () => {

    /* Variables */

    const toggleLocationBtns = document.querySelectorAll(".toggle-location");
    const regionSelection = document.querySelector(".region-selection");
    const regionSelectionBtns = document.querySelectorAll(".js-region-selection__btn");
    const regionSelectionChoice = document.querySelectorAll(".region-selection__choice");
    const regionSelectionClose = document.querySelector(".region-selection__close");
    const body = document.body;

    /* Functions */

    function toggleLocation() {
        regionSelection.classList.toggle("isOpen");
        body.classList.toggle("lock")
    }

    function hiddenLocation() {
        regionSelection.classList.remove("isOpen");
        body.classList.remove("lock")
    }

    function changeLocation(e) {
        regionSelectionChoice.forEach(el => el.textContent = e.currentTarget.textContent);
        hiddenLocation();
    }

    
    /* Events */

    toggleLocationBtns.forEach(btn => {
        btn.addEventListener("click", toggleLocation);
    });

    regionSelectionBtns.forEach(btn => {
        btn.addEventListener("click", changeLocation);
    });

    regionSelectionClose.addEventListener("click", hiddenLocation);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hiddenLocation();
    });

    /* document.addEventListener("click", (e) => {
        if(e.target.classList.contains("region-selection")) {
            hiddenLocation();
        }
    }) */
});