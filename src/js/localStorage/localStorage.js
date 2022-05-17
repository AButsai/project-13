import getRefs from '../refs/getRefs';
import Notiflix from 'notiflix';
import { changeLanguageModal } from '../language/change-lang';
import { langArrModalAdd, langArrModalRemove } from '../language/arrLang';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

let watchedFilmsInfo = [];
let queueFilmsInfo = [];

export function makeLocalStorage(filmData) {
  const btnWatchedEl = getRefs().btnWatched;
  const btnQueueEl = getRefs().btnQueue;

  btnWatchedEl.addEventListener('click', onButtonWatchedClick);
  btnQueueEl.addEventListener('click', onButtonQueueClick);

  if (isInLocalStorageWatched(filmData)) {
    const localStorageDataWatched = JSON.parse(localStorage.getItem(WATCHED_KEY));

    const checkLocalStorageWatched = localStorageDataWatched.some(
      value => value.id === filmData.id,
    );

    if (checkLocalStorageWatched) {
      btnWatchedEl.textContent = 'Remove from watched';
      btnQueueEl.disabled = true;
    }
  }

  if (isInLocalStorageQueue(filmData)) {
    const localStorageDataQueue = JSON.parse(localStorage.getItem(QUEUE_KEY));

    const checkLocalStorageQueue = localStorageDataQueue.some(value => value.id === filmData.id);

    if (checkLocalStorageQueue) {
      btnQueueEl.textContent = 'Remove from queue';
      btnWatchedEl.disabled = true;
    }
  }

  function onButtonWatchedClick(evt) {
    evt.preventDefault();

    if (isInLocalStorageWatched(filmData)) {
      removeFromLocalStorageWatched(filmData);

      // evt.target.textContent = 'Add to watched';
      btnQueueEl.disabled = false;
      changeLanguageModal(langArrModalAdd);

      Notiflix.Notify.failure('Successfully removed!');
    } else {
      watchedFilmsInfo.push(filmData);

      // evt.target.textContent = 'Remove from watched';
      btnQueueEl.disabled = true;
      changeLanguageModal(langArrModalRemove);
      localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }

  function onButtonQueueClick(evt) {
    evt.preventDefault();

    if (isInLocalStorageQueue(filmData)) {
      removeFromLocalStorageQueue(filmData);
      // evt.target.textContent = 'Add to queue';

      btnWatchedEl.disabled = false;
      changeLanguageModal(langArrModalAdd);
      Notiflix.Notify.failure('Successfully removed!');
    } else {
      queueFilmsInfo.push(filmData);

      // evt.target.textContent = 'Remove from queue';
      btnWatchedEl.disabled = true;
      changeLanguageModal(langArrModalRemove);

      localStorage.setItem(QUEUE_KEY, JSON.stringify(queueFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }
}

export function loadFilms(key) {
  return JSON.parse(localStorage.getItem(key));
}

function isInLocalStorageWatched(data) {
  const localStorageDataWatched = JSON.parse(localStorage.getItem(WATCHED_KEY));

  if (localStorageDataWatched !== null && localStorageDataWatched.length !== 0) {
    return localStorageDataWatched.some(value => value.id === data.id);
  }

  return false;
}

function isInLocalStorageQueue(data) {
  const localStorageDataQueue = JSON.parse(localStorage.getItem(QUEUE_KEY));

  if (localStorageDataQueue !== null && localStorageDataQueue.length !== 0) {
    return localStorageDataQueue.some(value => value.id === data.id);
  }

  return false;
}

function removeFromLocalStorageWatched(data) {
  const localStorageDataWatched = JSON.parse(localStorage.getItem(WATCHED_KEY));

  const filteredArr = localStorageDataWatched.filter(value => value.id !== data.id);
  watchedFilmsInfo = filteredArr;

  localStorage.setItem(WATCHED_KEY, JSON.stringify(filteredArr));
}

function removeFromLocalStorageQueue(data) {
  const localStorageDataQueue = JSON.parse(localStorage.getItem(QUEUE_KEY));

  const filteredArr = localStorageDataQueue.filter(value => value.id !== data.id);
  queueFilmsInfo = filteredArr;

  localStorage.setItem(QUEUE_KEY, JSON.stringify(filteredArr));
}
