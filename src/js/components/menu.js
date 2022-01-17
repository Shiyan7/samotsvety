const nav = document.querySelector('.nav'),
    menu = document.querySelector('.menu'),
    burger = document.querySelector(".burger"),
    header = document.querySelector(".header"),
    navItems = document.querySelectorAll(".nav__item--drop"),
    menus = document.querySelectorAll(".menu"),
    burgerClose = document.querySelector(".burger-close"),
    overlay = document.querySelector(".overlay"),
    menuNavLinks = document.querySelectorAll(".menu-nav__link");

const desktopMenu = () => {
    if (window.innerWidth > 1024) {

        let isClicked = false;
        let flag = 0;

        document.addEventListener("click", (e) => {
            if(e.target.classList.contains("nav__item--drop")) {
                let navItem = e.target;
                
                isClicked = true;
                let currentMenu = navItem.querySelector(".menu");

                overlay.classList.add("active");
                header.classList.add("m-open");

                navItems.forEach(el => el.classList.remove("active"));

                navItem.classList.add("active");

                if(flag == 0) {

                    flag++

                    if(!currentMenu.classList.contains("menu--visible")) {

                        document.querySelectorAll(".menu").forEach(mn => {
                            $(mn).slideUp(300);
                        });
                        
                        setTimeout(function () {
                            $(currentMenu).slideDown(300);
                        }, 0);
                    }
                } else {
                    document.querySelectorAll(".menu").forEach(mn => {
                        $(mn).slideUp(300);
                    });
                    
                    setTimeout(function () {
                        $(currentMenu).slideDown(300);
                    }, 300);
                }
            }
            else if (!e.target.closest(".nav")) {

                isClicked = false;

                flag--

                navItems.forEach(el => el.classList.remove("active"));
                
                overlay.classList.remove("active")
                header.classList.remove("m-open")

                menus.forEach(el => {
                    $(el).slideUp(300);
                })
            }
        });

        menuNavLinks.forEach(el => {
            el.addEventListener("click", (e) => {
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
    document.querySelectorAll(".js-nav-list").forEach(el => el.classList.remove("animation"));
    document.querySelector(".nav").querySelectorAll(".dropdown-menu").forEach(el => el.classList.remove("animation"));
    scrollTop();
};

const scrollTop = () => {
    menu.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const openNav = (e) => {
    document.body.classList.add("lock")
    e.currentTarget.classList.add("is-active")
    nav.classList.add("show");
    initialMenu();
}

const navClose = (e) => {
    document.body.classList.remove("lock")
    e.currentTarget.classList.remove("is-active")
    nav.classList.remove("show");
    initialMenu();
}

burgerClose.addEventListener("click", navClose)

burger.addEventListener("click", openNav);

nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-open-menu")) {
        nav.classList.add("nav-lock")
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

    if (!document.querySelector(".dropdown-menu").classList.contains("animation")) {
        nav.classList.remove("nav-lock")
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