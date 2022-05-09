import getRefs from '../refs/getRefs.js';
const { cardslist } = getRefs();
//Функция мягкой прокрутки при загрузке новых картинок
export default function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.films-grid')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
