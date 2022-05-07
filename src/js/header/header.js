<<<<<<< HEAD
import MoviesService from './moviesService';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const refs = {
  searchForm: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
};
// для получения обьекта с методами и свойствами
const moviesService = new MoviesService({ apiKey: API_KEY, baseUrl: BASE_URL });

refs.searchForm.addEventListener('submit', onSearch);

let searchQuery = '';

function onSearch(e) {
  e.preventDefault();
  //query хранит наш сервис, наш обьект
  const searchQuery = e.currentTarget.elements.name.value;

  moviesService.resetPage();
  const trendingMovies = moviesService.getTrandingMovies(searchQuery);
}
=======
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
>>>>>>> 1c5f4931eaea24790b495d3185265f4047217481
