document.addEventListener("DOMContentLoaded", () => {
    const readMore = document.querySelector(".read-more");
    const fullText = document.querySelector(".full-text")
    let flag = 0;
    readMore.addEventListener("click", (e) => {

        if(flag == 0) {
            flag++;
            fullText.classList.add("active");
            e.currentTarget.innerHTML = 'свернуть'
        } else {
            flag--;
            fullText.classList.remove("active");
            e.currentTarget.innerHTML = 'Читать дальше'
        }
    });
});