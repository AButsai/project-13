import './sass/main.scss';
import './js/service/apiMovies';
import './js/service/search';
import './js/header/header.js';
import './js/load_spinner/load-spinner.js';
import './js/render-library/renderPageLibrary';
import './js/modal/modal-film.js';
// import './js/language/lang-work';
import './js/language/setings_language';
import './js/localStorage/localStorage';
// import renderFilmCard from './js/card-templayte/card-templayte';

import createFilmsList from './js/library/library';

import getRefs from './js/refs/getRefs';
// import onCardFilmClick from './js/modal-templayte/modal-open';
import infinityScroll from './js/infinity-scroll/infinity-scroll';

// Для теста:

// 1)запрос на популярные фильмы

// const fetchPopFilms = async () => {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/movie/popular?api_key=81d06652aef7420f17f98b937386a748&language=en-US&page=1',
//   );
//   const films = await response.json();
//   return films;
// };

// fetchPopFilms().then(response => {
//   console.log(response);
//   createFilmsList(response.results);
//   infinityScroll(createFilmsList(response.results));
// });
// console.log('worked');

// // 2)запрос на полную информацию о фильме, по индексу

// export const fetchForModal = async currentCardIndex => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${currentCardIndex}?api_key=81d06652aef7420f17f98b937386a748&language=en-US`,
//   );
//   const film = await response.json();
//   return film;
// };
