import getRefs from '../refs/getRefs';
import renderModal from '../modal-templayte/modal-templayte';
import fetchForModal from '../../index'
const { cardslist } = getRefs();

// Запрос на модалку
// cardslist.addEventListener('click', onCardFilmClick);

function onCardFilmClick(e) {
  e.preventDefault();
  const currentCardIndex = e.target.dataset.index;
  console.log(currentCardIndex);
  // lightboxEl.classList.add('is-open');
  fetchForModal(currentCardIndex).then(response => renderModal(response));
}

export default onCardFilmClick;
