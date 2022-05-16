import getRefs from '../refs/getRefs';
import { createPlayer } from '../service/trailer';
import { renderFilmCard } from '../card-templayte/card-templayte';
import { changeLanguageOnModal, openModal } from '../modal/modal-film';
import MoviesService from '../service/apiMovies';

const response = new MoviesService();
const { modal, overlay } = getRefs();
function createFilmsList(films) {
  const markup = films.map(film => renderFilmCard(film)).join('');
  getRefs().cardslist.insertAdjacentHTML('beforeend', markup);

  const trailers = document.querySelectorAll('.card-trailer');
  trailers.forEach(trailer => {
    trailer.addEventListener('click', event => {
      // response.getMovieById(film)
      const id = event.currentTarget.id;
      console.log(id);
      response.getVideoById(id).then(key => {
        overlay.classList.remove('visually-hidden');

        modal.insertAdjacentHTML('beforeend', createPlayer(key));
      });
    });
  });

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

const getVideoinPopap = key => {
  overlay.classList.remove('visually-hidden');

  modal.innerHtml = createPlayer(key);
  const modalClosed = () => {
    modal.innerHtml = createPlayer('');
    closeModalBtn.addEventListener('click', modalClosed);
    overlay.addEventListener('click', e => {
      if (e.target === e.currentTarget) {
        modalClosed();
      }
    });
  };
};

export default createFilmsList;
