import getRefs from '../refs/getRefs';
import Notiflix from 'notiflix';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

let watchedFilmsInfo = [];
let queueFilmsInfo = [];

export function makeLocalStorage(filmData) {
  const btnWatchedEl = getRefs().btnWatched;
  const btnQueueEl = getRefs().btnQueue;

  btnWatchedEl.addEventListener('click', onButtonWatchedClick);
  btnQueueEl.addEventListener('click', onButtonQueueClick);

  function onButtonWatchedClick(evt) {
    evt.preventDefault();

    watchedFilmsInfo.push(filmData);

    evt.target.style.backgroundColor = '#ff6b01';
    evt.target.style.color = '#ffffff';

    localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedFilmsInfo));

    Notiflix.Notify.success('Successfully added!');
  }

  function onButtonQueueClick(evt) {
    evt.preventDefault();

    queueFilmsInfo.push(filmData);

    evt.target.style.backgroundColor = '#ff6b01';
    evt.target.style.color = '#ffffff';

    localStorage.setItem(QUEUE_KEY, JSON.stringify(queueFilmsInfo));

    Notiflix.Notify.success('Successfully added!');
  }
}

export function loadFilms(key) {
  return JSON.parse(localStorage.getItem(key));
}
