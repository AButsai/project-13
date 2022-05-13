import renderLibraryItems from './renderLibraryItems';
import { loadFilms } from '../storage/local-storage';
import getRefs from '../refs/getRefs';
import { addedClassButton, removedClassButton } from './toggleClassButton';
// import getMovieById from '../service/apiLibrary';

export const defaultPageLibrary = () => {
  const { libraryWatched, libraryQueue } = getRefs();

  renderAllList();
  watched(libraryWatched, libraryQueue);
  Queue(libraryWatched, libraryQueue);
};

function watched(btnWatchedLib, btnQueueLib) {
  btnWatchedLib.addEventListener('click', renderWatched);

  function renderWatched() {
    getRefs().cardslist.innerHTML = '';
    const arrId = loadFilms('watched');

    addedClassButton(btnWatchedLib);
    removedClassButton(btnQueueLib);
    if (!arrId || arrId.length === 0) {
      noFilm();
    } else {
      for (let id of arrId) {
        getMovieById(id).then(data => {
          renderLibraryItems(data);
        });
      }
    }
  }
}

function Queue(btnWatchedLib, btnQueueLib) {
  btnQueueLib.addEventListener('click', renderQueue);

  function renderQueue() {
    getRefs().cardslist.innerHTML = '';
    const arrId = loadFilms('queue');

    addedClassButton(btnQueueLib);
    removedClassButton(btnWatchedLib);
    if (!arrId || arrId.length === 0) {
      noFilm();
    } else {
      for (let id of arrId) {
        getMovieById(id).then(data => {
          renderLibraryItems(data);
        });
      }
    }
  }
}

function renderAllList() {
  getRefs().cardslist.innerHTML = '';
  let arrWatchId = [];
  let arrQueueId = [];
  if (loadFilms('watched')) {
    arrWatchId = loadFilms('watched');
  }
  if (loadFilms('queue')) {
    arrQueueId = loadFilms('queue');
  }
  const allId = [...arrWatchId, ...arrQueueId];

  if (arrWatchId.length === 0 && arrQueueId.length === 0) {
    noFilm();
  } else {
    for (let id of allId) {
      getMovieById(id).then(data => {
        console.log(data);
        renderLibraryItems(data);
      });
    }
  }
}

function noFilm() {
  const clearMarkup = `<div class="noFilm-list">
    <h3 class="noFilm-list__title">Oops...</h3>
    <p class="noFilm-list__text">No movies have been added yet.</p>
</div>`;
  getRefs().cardslist.insertAdjacentHTML('beforeend', clearMarkup);
}
