import getRefs from '../refs/getRefs';
import renderFilmCard from '../modal-templayte/card-templayte';

function createFilmsList(films) {
  const markup = films.map(film => renderFilmCard(film)).join('');
  getRefs().cardslist.insertAdjacentHTML('beforeend', markup);
}

export default createFilmsList;
