import MoviesService from './apiMovies';
import getRefs from '../refs/getRefs';
import Notiflix from 'notiflix';

const API_KEY = process.env.API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

const moviesService = new MoviesService({ apiKey: API_KEY, baseUrl: BASE_URL });

getRefs().searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.name.value;
  if (searchQuery === '') {
    getRefs().galleryList.innerHTML = '';

    return;
  }
  moviesService.newSearchName(searchQuery);
  // moviesService.searchMovies(searchQuery);
  // .then(data => console.log(data))
  // .catch(error => Notiflix.Notify.failure(`Oops, something wrong.Try again`));

  // function renderMoviesInfo(movies) {
  //   if (movies.length > 50) {
  //     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  //   }
  // }
  moviesService.searchMovies();
  moviesService.resetPage();
  const popularMovies = moviesService.getPopularMovies(searchQuery);
}
