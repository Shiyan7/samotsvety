const tels = document.querySelectorAll("input[type=\"tel\"]");

tels.forEach(el => {
    var phoneMask = IMask(el, {
        mask: '+{7} (000) 000 0000'
    });
})