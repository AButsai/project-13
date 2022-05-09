import getRefs from '../refs/getRefs.js';

const { homeLink, libraryLink, libraryWatched, libraryQueue, form, header, buttons, homeLinkCurrent, } = getRefs();

const handleClickHome = () => {
  form.classList.remove('hidden');
  header.classList.remove('header-library');
  buttons.classList.add('hidden');
  libraryLink.classList.remove('current');
  homeLinkCurrent.classList.add('current');
  libraryWatched.classList.add('active');
  libraryQueue.classList.remove('active');
};

const handleClickLibrary = () => {
  form.classList.add('hidden');
  header.classList.add('header-library');
  buttons.classList.remove('hidden');
  libraryLink.classList.add('current');
  homeLinkCurrent.classList.remove('current');
};

const libraryWatchedColor = () => {
  libraryWatched.classList.add('active');
  libraryQueue.classList.remove('active');
};

const libraryQueueColor = () => {
  libraryWatched.classList.remove('active');
  libraryQueue.classList.add('active');
};

homeLink.forEach(link => {
  link.addEventListener('click', handleClickHome);
});
libraryLink.addEventListener('click', handleClickLibrary);

libraryWatched.addEventListener('click', libraryWatchedColor);
libraryQueue.addEventListener('click', libraryQueueColor);
