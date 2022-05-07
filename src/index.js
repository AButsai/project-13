import './sass/main.scss';
import './js/header/header.js';
import './js/load_spinner/load-spinner.js';
import templayte from './js/card-templayte/card-templayte';
import renderModal from './js/modal-templayte/modal-templayte'
import getRefs from'./js/refs/getRefs';


// Для теста: 

// 1)запрос на популярные фильмы

// const fetchPopFilms = async () =>{
//     const response =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=81d06652aef7420f17f98b937386a748&language=en-US&page=1');
//     const films = await response.json();
//     return films;
// }

// fetchPopFilms().then(response=> templayte(response.results));

// 2)запрос на полную информацию о фильме, по индексу

// const fetchForModal = async (currentCardIndex) =>{
//     const response =  await fetch(`https://api.themoviedb.org/3/movie/${currentCardIndex}?api_key=81d06652aef7420f17f98b937386a748&language=en-US`);
//     const film = await response.json();
//     return film;
// }


    // Запрос на модалку
// --------------------------------------------------
getRefs().cardslist.addEventListener('click', onCardFilmClick);

function onCardFilmClick(e){
    e.preventDefault();
    const currentCardIndex = e.target.dataset.index;
    console.log(currentCardIndex)
    // lightboxEl.classList.add('is-open');
    fetchForModal(currentCardIndex).then(response=>renderModal(response));  
}
//--------------------------------------------------

