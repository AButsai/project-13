import getRefs from '../refs/getRefs.js';

const { homeLink, libraryLink, libraryWatched, libraryQueue, form, header, buttons, homeLinkCurrent, chk, labelMoonSun, ballMoonSun, } = getRefs();

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



const themeDark = () => {
  document.body.classList.add('dark');
  labelMoonSun.classList.add('labelDark'); 
  ballMoonSun.classList.remove('ballDark');
};

const themeLight = () => {
  document.body.classList.remove('dark');
  labelMoonSun.classList.remove('labelDark'); 
  ballMoonSun.classList.add('ballDark'); 
};


if (localStorage.getItem('theme')===null){
  localStorage.setItem('theme', "false");
} 

themeStatus ();

function themeStatus () {
  if (localStorage.getItem('theme')==="true") {
    chk.checked = true; 
    themeDark();
  } else {
    chk.checked = false;
    themeLight();
  }
}

function changeStatus () {
  if (localStorage.getItem('theme')==="true") {
    localStorage.setItem('theme', "false");
    themeLight();
  } else {
    localStorage.setItem('theme', "true"); 
    themeDark();
  }
}

chk.addEventListener('change', changeStatus);
