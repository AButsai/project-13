import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import getRefs from '../refs/getRefs'

export const createSlider = (films) =>{
    const popFilmForSlider = films.slice(0, 10);
    
    const slider = popFilmForSlider.map(film => {
        return `<li class="splide__slide splide-cards-size"><img class="slider-img" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.title}" data-index = ${film.id}></li>`
    }).join('');
    getRefs().sliderList.insertAdjacentHTML('beforeend', slider);

    const splide = new Splide( '.splide', {
    type:'loop',
    autoplay: 'playing',
    perPage: 5,
    perMove: 1,
    arrows: false,
    interval: 6000,
    pagination: false,
    breakpoints: {
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
    },
  }).mount();
}