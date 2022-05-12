import genresJSON from '../../json/./genres/genres.json';
import createFilmsList from '../library/library';


// принимает  responce.results
export const changeGenresIdForName = function(films) {
  let filmsInfo = [];

  films.filter(film =>{
    const {overview, poster_path, vote_average, title} = film;
    if((poster_path !== null && overview !== '') || (poster_path !== '' && overview !== '')){
      if((poster_path !== null && vote_average !== 0) || (poster_path !== '' && vote_average !== 0)){
        if(title !== ''){
          return film;
        }
      }
    }
  }).map(film => {
    const filmWithGenres = {
      genres: [],
      id: film.id,
      original_title: film.original_title,
      overview: film.overview,
      popularity: film.popularity,
      poster_path: film.poster_path,
      release_date: film.release_date,
      title: film.title,
      vote_average: film.vote_average,
      vote_count: film.vote_count,
    };
  
    genresJSON.map(({ id, name }) => {
      
      if(film.genre_ids.includes(id)) {
        filmWithGenres.genres.push(name);
      }
    });
    filmsInfo.push(filmWithGenres);
  });
  correctGenres(filmsInfo);
  createFilmsList(filmsInfo);
};

function correctGenres(filmsInfo) {
  filmsInfo.map(film => {
    if (film.genres.length > 2) {
      film.genres.splice(2, 5, 'Other');
    }
    return film.genres;
  });
}


export const renderFilmCard = function(film) {
  const urlImg = 'https://image.tmdb.org/t/p/w500';
  let img = '';

  if(film.poster_path === null){
    img = "./images/plug.jpg";
  }else{
    img = urlImg + film.poster_path; 
  }

  return `<li class="film-card">
    <a href="">
        <img class="card-img" src="${img}" alt="${film.title}" data-index = ${film.id}>
        <h2 class="card-title">${film.title.toUpperCase()}</h2>
        <p class="card-genres">${film.genres}
        | ${film.release_date !== undefined ? film.release_date.slice(0, 4) : ''}</p>             
    </a>
        </li>`;
};


