import getRefs from '../refs/getRefs';
import { renderFilmCard } from '../card-templayte/card-templayte';
import { changeLanguageOnModal, openModal } from '../modal/modal-film';
import MoviesService from '../service/apiMovies';

const {homeLink, cardslist,} = getRefs();
const response = new MoviesService();

homeLink.forEach(link => {
  link.addEventListener('click', ()=> {

  response.newSearchName('');
  response.resetPage();

  cardslist.innerHTML = '';
  response.getPopularMovies().then(response => createFilmsList(response));
  });
});

function createFilmsList(films) {
  const markup = films.map(film => renderFilmCard(film)).join('');
  getRefs().cardslist.insertAdjacentHTML('beforeend', markup);

  function onCardFilmClick(e) {
    e.preventDefault();
    const currentFilmId = e.target.dataset.index;
    films.map(film => {
      if (film.id === Number(currentFilmId)) {
        openModal(film);
        changeLanguageOnModal();

        response.getVideoById(film.id).then(id => console.log(id));
      }
    });
  }

  getRefs().cardslist.addEventListener('click', onCardFilmClick);
}

export default createFilmsList;
