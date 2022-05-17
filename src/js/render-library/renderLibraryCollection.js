import renderLibraryItems from './renderLibraryItems';
import { loadFilms } from '../localStorage/localStorage';
import getRefs from '../refs/getRefs';
import { addedClassButton, removedClassButton } from './toggleClassButton';
import { themes } from '../header/header.js';

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
    const arr = loadFilms('watched');

    addedClassButton(btnWatchedLib);
    removedClassButton(btnQueueLib);
    if (!arr || arr.length === 0) {
      noFilm();
    } else {
      renderLibraryItems(arr);
    }
  }
}

function Queue(btnWatchedLib, btnQueueLib) {
  btnQueueLib.addEventListener('click', renderQueue);

  function renderQueue() {
    getRefs().cardslist.innerHTML = '';
    const arr = loadFilms('queue');

    addedClassButton(btnQueueLib);
    removedClassButton(btnWatchedLib);
    if (!arr || arr.length === 0) {
      noFilm();
    } else {
      renderLibraryItems(arr);
    }
  }
}

function renderAllList() {
  getRefs().cardslist.innerHTML = '';
  let arrWatch = [];
  let arrQueue = [];
  if (loadFilms('watched')) {
    arrWatch = loadFilms('watched');
  }
  if (loadFilms('queue')) {
    arrQueue = loadFilms('queue');
  }
  const all = [...arrWatch, ...arrQueue];

  if (arrWatch.length === 0 && arrQueue.length === 0) {
    noFilm();
  } else {
    renderLibraryItems(all);
  }
}

function noFilm() {
  const clearMarkup = `<div class="noFilm-list">
    <h3 class="noFilm-list__title">Oops...</h3>
    <p class="noFilm-list__text">No movies have been added yet.</p>
</div>`;
  getRefs().cardslist.insertAdjacentHTML('beforeend', clearMarkup);
}
