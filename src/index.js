import './sass/main.scss';
import './js/header/header.js';
import './js/load_spinner/load-spinner.js';
// import renderFilmCard from './js/card-templayte/card-templayte';
import getRefs from './js/refs/getRefs';
import onCardFilmClick from './js/modal-templayte/modal-open';
import { renderFilmCard } from './js/card-templayte/card-templayte.js';
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
//   createFilmsList(response.results);
//   console.log(response);
// });
// console.log('worked');

// 2)запрос на полную информацию о фильме, по индексу

// const fetchForModal = async (currentCardIndex) =>{
//     const response =  await fetch(`https://api.themoviedb.org/3/movie/${currentCardIndex}?api_key=81d06652aef7420f17f98b937386a748&language=en-US`);
//     const film = await response.json();
//     return film;
// }
