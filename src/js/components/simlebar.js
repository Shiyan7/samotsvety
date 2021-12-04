const simplebars = document.querySelectorAll("[data-simplebar]");

if(simplebars) {
    simplebars.forEach(el => {
        new SimpleBar(el);
    })
}