import getRefs from '../refs/getRefs.js';

const { homeLink, libraryLink, libraryWatched, libraryQueue, form, header, buttons } = getRefs();

const handleClickHome = () => {
  form.classList.remove('hidden');
  header.classList.remove('header-library');
  buttons.classList.add('hidden');
};

const handleClickLibrary = () => {
  form.classList.add('hidden');
  header.classList.add('header-library');
  buttons.classList.remove('hidden');
};

homeLink.forEach(link => {
  link.addEventListener('click', handleClickHome);
});

libraryLink.addEventListener('click', handleClickLibrary);

// libraryWatched.addEventListener('click');

// libraryQueue.addEventListener('click');
