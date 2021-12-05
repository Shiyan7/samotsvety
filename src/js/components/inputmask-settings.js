/* const tels = document.querySelectorAll("input[type=\"tel\"]");
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(tels); */

const tels = document.querySelectorAll("input[type=\"tel\"]");

tels.forEach(el => {
    var phoneMask = IMask(el, {
        mask: '+{7} (000) 000 0000'
    });
})