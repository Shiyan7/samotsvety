const nav = document.querySelector('.nav'),
    menu = document.querySelector('.menu'),
    burger = document.querySelector(".burger"),
    menuNavLinks = document.querySelectorAll(".menu-nav__link");

const desktopMenu = () => {
    if(window.innerWidth > 1024) {


        $('.nav__item').each(function(){
            let t = null;
            let li = $(this);
            let link = $(this).find(".nav__link")
            link.hover(function(){
                t = setTimeout(function(){
                    li.find(".menu").slideDown(300);
                    t = null;
                }, 300);
            }, function(){
                if (t){
                    clearTimeout(t);
                    t = null;
                }
                else li.find(".menu").slideUp(300);
            });
        });

        menuNavLinks.forEach(el => {
            el.addEventListener("mouseenter", (e) => {
                const menuContent = e.currentTarget.closest(".menu-nav").querySelectorAll(".menu-content");
                menuContent.forEach(el => el.classList.remove("show"));
                menuNavLinks.forEach(el => el.classList.remove("active"));
                e.currentTarget.classList.add("active");
                e.currentTarget.closest(".js-open-menu").querySelector(".menu-content").classList.add("show");
            });
        });
    }
}

desktopMenu();

const initialMenu = () => {
    document.querySelector(".js-nav-list").classList.remove("animation");
    document.querySelector(".nav").querySelector(".dropdown-menu").classList.remove("animation");
    scrollTop();
};

const scrollTop = () => {
    menu.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const navToggle = (e) => {
    document.body.classList.toggle("lock")
    e.currentTarget.classList.toggle("is-active")
    nav.classList.toggle("show");
    initialMenu();
}

burger.addEventListener("click", navToggle);

nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-open-menu")) {
        e.target.closest(".js-nav-list").classList.add("animation");
        e.target.querySelector(".dropdown-menu").classList.add("animation");
        scrollTop();
    }

    if (e.target.closest(".nav__mobile-back")) {
        e.target.closest(".dropdown-menu").classList.remove("animation");
        e.target.closest(".nav").querySelector(".nav__list").classList.remove("animation");
        scrollTop();
    }

    if (e.target.classList.contains("nav__link") && !e.target.classList.contains("nav__link--drop")) {
        nav.classList.remove("show");
    }
});

const changeHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

changeHeight();


window.addEventListener("resize", () => {
    changeHeight();
    desktopMenu();
});