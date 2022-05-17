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
  root,
  footerMoonSun,
  footerTextMoonSun,
  bodyMoonSun,
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

const themeDark = () => {
  const h2 = root.querySelectorAll('h2');
  h2.forEach(el => {
    el.style.color = '#ffffff';
  })
  bodyMoonSun.classList.add('dark');
  labelMoonSun.classList.add('labelDark'); 
  ballMoonSun.classList.remove('ballDark');
  footerMoonSun.classList.add('footerDark'); 
  footerTextMoonSun.classList.add('footerTextDark');
};

const themeLight = () => {
  const h2 = root.querySelectorAll('h2');
  h2.forEach(el => {
    el.style.color = '#000000';
  })
  bodyMoonSun.classList.remove('dark');
  labelMoonSun.classList.remove('labelDark'); 
  ballMoonSun.classList.add('ballDark'); 
  footerMoonSun.classList.remove('footerDark'); 
  footerTextMoonSun.classList.remove('footerTextDark');
};


if (localStorage.getItem('theme')===null){
  localStorage.setItem('theme', "false");
} 

themeStatus ();

let isTheme =  false;

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
    isTheme = false;
  } else {
    localStorage.setItem('theme', "true"); 
    themeDark();
    isTheme = true;
  }
}


chk.addEventListener('change', changeStatus);

export function themes () {
  console.log(isTheme);
  return isTheme; 
}