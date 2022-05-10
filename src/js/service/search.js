import MoviesService from './apiMovies';
import getRefs from '../refs/getRefs';
import infinityScroll from '../infinity-scroll/infinity-scroll';
import { changeGenresIdForName } from '../card-templayte/card-templayte';
import Notiflix from 'notiflix';
import smoothScroll from '../smooth-scroll/smooth-scroll';

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
  moviesService.resetPage();
  //Поесле сабмита чистим ХТМЛ
  getRefs().cardslist.innerHTML = '';
  //Вызываем рендер поиска
  renderSearch();
}
//Рендер популярных фильмов
function renderPopular() {
  const popularMovies = moviesService
    .getPopularMovies()
    .then(response => {
      //Отрисовка
      changeGenresIdForName(response);
      //Увеличиваем счетчик страниц
      moviesService.incrementPage();
      //Бесконечный скролл
      infinityScroll(renderPopular);
      //Начиная со второй страницы делает мягкую прокрутку
      if (moviesService.page > 2) {
        smoothScroll();
      }
    })
    .catch(error => Notiflix.Notify.failure(`Oops, something wrong.Try again`));
}
//Дефолтный вызов для главной страницы
renderPopular();

//Рендер фильмов по поиску
function renderSearch() {
  const searchMovies = moviesService
    .searchMovies()
    .then(response => {
      createFilmsList(response);
      moviesService.incrementPage();
      infinityScroll(renderSearch);
      if (moviesService.page > 2) {
        smoothScroll();
      }
    })
    .catch(error => Notiflix.Notify.failure(`Oops, something wrong.Try again`));
}
