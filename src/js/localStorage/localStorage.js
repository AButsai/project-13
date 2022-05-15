import getRefs from '../refs/getRefs';
import Notiflix from 'notiflix';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

let watchedFilmsInfo = [];
let queueFilmsInfo = [];

export default function makeLocalStorage(filmData) {
  const btnWatchedEl = getRefs().btnWatched;
  const btnQueueEl = getRefs().btnQueue;

  btnWatchedEl.addEventListener('click', onButtonWatchedClick);
  btnQueueEl.addEventListener('click', onButtonQueueClick);

  function onButtonWatchedClick(evt) {
    evt.preventDefault();

    if (isInLocalStorageWatched(filmData)) {
      removeFromLocalStorageWatched(filmData);

      evt.target.textContent = "Add to watched";
      btnQueueEl.disabled = false;

      Notiflix.Notify.failure('Successfully removed!');
    } else {
      watchedFilmsInfo.push(filmData);

      evt.target.textContent = "Remove from watched";
      btnQueueEl.disabled = true;

      localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }

  function onButtonQueueClick(evt) {
    evt.preventDefault();

    if (isInLocalStorageQueue(filmData)) {
      removeFromLocalStorageQueue(filmData);
      evt.target.textContent = "Add to queue";

      btnWatchedEl.disabled = false;

      Notiflix.Notify.failure('Successfully removed!')
    } else {
      queueFilmsInfo.push(filmData);

      evt.target.textContent = "Remove from queue";
      btnWatchedEl.disabled = true;

      localStorage.setItem(QUEUE_KEY, JSON.stringify(queueFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }
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

  localStorage.setItem(WATCHED_KEY, JSON.stringify(filteredArr));
}

function removeFromLocalStorageQueue(data) {
  const localStorageDataWatched = JSON.parse(localStorage.getItem(QUEUE_KEY));

  const filteredArr = localStorageDataWatched.filter(value => value.id !== data.id);

  localStorage.setItem(QUEUE_KEY, JSON.stringify(filteredArr));
}
