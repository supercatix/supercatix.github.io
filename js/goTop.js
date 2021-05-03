// Кнопка на верх
const goTop = document.querySelector('.footer__up');

goTop.addEventListener('click', backToTop);

function backToTop () {
    const scrollStep = window.pageYOffset / 40;
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -(scrollStep));
        setTimeout(backToTop, 0);
      }
}