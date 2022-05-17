import MoviesService from './apiMovies';
import getRefs from '../refs/getRefs';
import infinityScroll from '../infinity-scroll/infinity-scroll';
import { changeGenresIdForName } from '../card-templayte/card-templayte';
import Notiflix from 'notiflix';
import smoothScroll from '../smooth-scroll/smooth-scroll';
import Auto from './autoReplaceStr';

const moviesService = new MoviesService();

getRefs().searchForm.addEventListener('submit', onSearch);
// getRefs().cardTrailer.addEventListener('click', onClickTrailer);

function onSearch(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const searchQuery = Auto(name);
  if (searchQuery === '') {
    getRefs().galleryList.innerHTML = '';

    return;
  }

  moviesService.newSearchName(searchQuery.toLowerCase());
  moviesService.resetPage();
  //Поесле сабмита чистим ХТМЛ
  getRefs().cardslist.innerHTML = '';
  //Вызываем рендер поиска
  renderSearch();
  e.currentTarget.reset();
}
// Отображение трейлера

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
      changeGenresIdForName(response);
      moviesService.incrementPage();
      infinityScroll(renderSearch);
      if (moviesService.page > 2) {
        smoothScroll();
      }
    })
    .catch(error => Notiflix.Notify.failure(`Oops, something wrong.Try again`));
}
