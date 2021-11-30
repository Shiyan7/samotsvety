document.addEventListener("DOMContentLoaded", () => {
    const readMore = document.querySelectorAll(".read-more");


    readMore.forEach(el => {
        let flag = 0;
        el.addEventListener("click", (e) => {
            
            const fullText = e.currentTarget.closest(".read-more-wrapper").querySelector(".full-text");
            let text = e.currentTarget.dataset.text;

            if(flag == 0) {
                flag++;
                fullText.classList.add("active");
                e.currentTarget.innerHTML = 'Свернуть'
            } else {
                flag--;
                fullText.classList.remove("active");
                e.currentTarget.innerHTML = text
            }
        });
    });



    
});