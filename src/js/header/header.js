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
