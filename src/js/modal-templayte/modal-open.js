import getRefs from '../refs/getRefs'
import renderModal from './js/modal-templayte/modal-templayte'
// import fetchForModal from 

    // Запрос на модалку
getRefs().cardslist.addEventListener('click', onCardFilmClick);

function onCardFilmClick(e){
    e.preventDefault();
    const currentCardIndex = e.target.dataset.index;
    console.log(currentCardIndex)
    // lightboxEl.classList.add('is-open');
    fetchForModal(currentCardIndex).then(response=>renderModal(response));  
}

export default onCardFilmClick;