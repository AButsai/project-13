import { scrollTo } from 'scroll-js';

const scrollBtnEl = document.querySelector('.scroll-up-btn');

scrollBtnEl.addEventListener('click', onScrollBtnClick);
window.addEventListener('scroll', showScroll);

if (window.scrollY === 0 || window.scrollY === 1) {
  scrollBtnEl.classList.add('hidden');
}

function onScrollBtnClick(evt) {
  evt.target.onclick = function () {
    scrollTo(window, {
      top: 0,
      duration: 1250,
      easing: 'ease-out',
    });
  };
}

function showScroll() {
  const startPosition = window.scrollY;

  if (startPosition > 1250) {
    scrollBtnEl.classList.remove('hidden');
  } else if (startPosition < 1250) {
    scrollBtnEl.classList.add('hidden');
  }
}
