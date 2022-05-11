import getRefs from '../refs/getRefs';
import { renderFilmCard } from '../card-templayte/card-templayte';
import {openModal} from '../modal/modal-film'
function createFilmsList(films) {
  const markup = films.map(film => renderFilmCard(film)).join('');
  getRefs().cardslist.insertAdjacentHTML('beforeend', markup);

  
  function onCardFilmClick(e){
    e.preventDefault();
    const currentFilmId = e.target.dataset.index;
    films.map(film => {
    if(film.id === Number(currentFilmId)){
      openModal(film);
    }
  });
  }  
  
  getRefs().cardslist.addEventListener('click', onCardFilmClick);
}

export default createFilmsList;
