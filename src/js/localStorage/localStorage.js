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
      Notiflix.Notify.failure('This film is already in your library!');
    } else {
      watchedFilmsInfo.push(filmData);

      evt.target.style.backgroundColor = '#ff6b01';
      evt.target.style.color = '#ffffff';

      localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }

  function onButtonQueueClick(evt) {
    evt.preventDefault();

    if (isInLocalStorageQueue(filmData)) {
      Notiflix.Notify.failure('This film is already in your library!');
    } else {
      queueFilmsInfo.push(filmData);

      evt.target.style.backgroundColor = '#ff6b01';
      evt.target.style.color = '#ffffff';

      localStorage.setItem(QUEUE_KEY, JSON.stringify(queueFilmsInfo));

      Notiflix.Notify.success('Successfully added!');
    }
  }
}

function isInLocalStorageWatched(data) {
  const localStorageDataWatched = JSON.parse(localStorage.getItem(WATCHED_KEY));

  // if(localStorageDataWatched === null && localStorageDataWatched.length === 0)
  if (localStorageDataWatched?.length) {
    return localStorageDataWatched.some(value => value.id === data.id);
  }

  return false;
}

function isInLocalStorageQueue(data) {
  const localStorageDataQueue = JSON.parse(localStorage.getItem(QUEUE_KEY));

  // if(localStorageDataQueue === null && localStorageDataQueue.length === 0)
  if (localStorageDataQueue?.length) {
    return localStorageDataQueue.some(value => value.id === data.id);
  }

  return false;
}
