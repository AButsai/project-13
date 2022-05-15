import getRefs from '../refs/getRefs.js';

const {
  homeLink,
  libraryLink,
  libraryWatched,
  libraryQueue,
  form,
  header,
  buttons,
  homeLinkCurrent,
  chk,
  labelMoonSun,
  ballMoonSun,
} = getRefs();

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

homeLink.forEach(link => {
  link.addEventListener('click', handleClickHome);
});
libraryLink.addEventListener('click', handleClickLibrary);

if (!localStorage.theme) localStorage.theme = 'light';

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  labelMoonSun.classList.toggle('labelDark');
  localStorage.theme = document.body.className || 'light';
});

// ballMoonSun.classList.toggle('ballDark');
// if (localStorage.getItem('theme') = 'dark') {

// }
