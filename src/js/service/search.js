import MoviesService from './apiMovies';
import getRefs from '../refs/getRefs';
import Notiflix from 'notiflix';

const API_KEY = process.env.API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

// для получения обьекта с методами и свойствами
const moviesService = new MoviesService({ apiKey: API_KEY, baseUrl: BASE_URL });

getRefs().searchForm.addEventListener('submit', onSearch);

let searchQuery = '';

function onSearch(e) {
  e.preventDefault();
  //query хранит наш сервис, наш обьект
  const searchQuery = e.currentTarget.elements.name.value;
  if (searchQuery === '') {
    getRefs().galleryList.innerHTML = '';

    return;
  }

  moviesService
    .searchMovies(searchQuery)
    .then(renderMoviesInfo)
    .catch(error => Notiflix.Notify.failure(`Oops, there is no movie with that name. ${error}`));

  function renderMoviesInfo(movies) {
    if (movies.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
  }

  moviesService.resetPage();
  const popularMovies = moviesService.getPopularMovies(searchQuery);
}
