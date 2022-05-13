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







































// document.querySelector('.themetoggle').addEventListener('click', (event)=> {
//   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//     localStorage.removeItem('theme');
//   } 
//   else {
//     localStorage.setItem('theme', 'dark');
//   }
//   addDarkClassToHTML();
// });

// function addDarkClassToHTML(){
//   try {
//     if (localStorage.getItem('theme') === 'dark') {
//       document.querySelector('html').classList.add('dark');
//       document.querySelector('.themetoggle span').textContent = 'dark_mode';
//     }
//     else {
//       document.querySelector('html').classList.remove('dark');
//       document.querySelector('.themetoggle span').textContent = 'wb_sunny';
//     }
//   } catch (err) {}
// }

// addDarkClassToHTML();


// const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });