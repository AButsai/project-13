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
<<<<<<< HEAD
  })
  bodyMoonSun.classList.add('dark');
  labelMoonSun.classList.add('labelDark'); 
=======
  });
  document.body.classList.add('dark');
  labelMoonSun.classList.add('labelDark');
>>>>>>> 66426b70bbfc1a5f03a896b3edad32ba1c6834c3
  ballMoonSun.classList.remove('ballDark');
  footerMoonSun.classList.add('footerDark');
  footerTextMoonSun.classList.add('footerTextDark');
};

const themeLight = () => {
  const h2 = root.querySelectorAll('h2');
  h2.forEach(el => {
    el.style.color = '#000000';
<<<<<<< HEAD
  })
  bodyMoonSun.classList.remove('dark');
  labelMoonSun.classList.remove('labelDark'); 
  ballMoonSun.classList.add('ballDark'); 
  footerMoonSun.classList.remove('footerDark'); 
=======
  });
  document.body.classList.remove('dark');
  labelMoonSun.classList.remove('labelDark');
  ballMoonSun.classList.add('ballDark');
  footerMoonSun.classList.remove('footerDark');
>>>>>>> 66426b70bbfc1a5f03a896b3edad32ba1c6834c3
  footerTextMoonSun.classList.remove('footerTextDark');
};

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'false');
}

themeStatus();

<<<<<<< HEAD
let isTheme =  false;

function themeStatus () {
  if (localStorage.getItem('theme')==="true") {
    chk.checked = true; 
=======
function themeStatus() {
  if (localStorage.getItem('theme') === 'true') {
    chk.checked = true;
>>>>>>> 66426b70bbfc1a5f03a896b3edad32ba1c6834c3
    themeDark();
  } else {
    chk.checked = false;
    themeLight();
  }
}

<<<<<<< HEAD

function changeStatus () {
  if (localStorage.getItem('theme')==="true") {
    localStorage.setItem('theme', "false");
=======
function changeStatus() {
  if (localStorage.getItem('theme') === 'true') {
    localStorage.setItem('theme', 'false');
>>>>>>> 66426b70bbfc1a5f03a896b3edad32ba1c6834c3
    themeLight();
    isTheme = false;
  } else {
    localStorage.setItem('theme', 'true');
    themeDark();
    isTheme = true;
  }
}

<<<<<<< HEAD

chk.addEventListener('change', changeStatus);

export function themes () {
  console.log(isTheme);
  return isTheme; 
}
=======
chk.addEventListener('change', changeStatus);
>>>>>>> 66426b70bbfc1a5f03a896b3edad32ba1c6834c3
