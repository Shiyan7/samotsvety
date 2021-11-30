const fixBlock = document.querySelector('.fix-block');
const fixBlockHeight = fixBlock?.offsetTop;

const toggleFixed = () => {
    if (fixBlockHeight <= window.pageYOffset) {
        fixBlock?.classList.add('fixed');
    } else {
        fixBlock?.classList.remove('fixed');
    }

}

window.addEventListener('scroll', toggleFixed);

toggleFixed();