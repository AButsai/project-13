import genresJSON from '../../json/./genres/genres.json';
import createFilmsList  from '.././library/library';



function changeGenresIdForName(films){
    let filmsInfo = [];
films.map((film) => { 
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

genresJSON.map(({id,name}) => {
    if(film.genre_ids.includes(id)){
        filmWithGenres.genres.push(name);
    }   
});
    filmsInfo.push(filmWithGenres);   
})
correctGenres(filmsInfo)
createFilmsList(filmsInfo)
}

function correctGenres(filmsInfo){
    filmsInfo.map(film=>{
        if(film.genres.length > 2){
            film.genres.splice(2, 5, 'Other')
        }
        return film.genres;  
    })
}

// кусок кода Елены
// --------------------------------------
//  function createFilmsList(films){
//     const markup = films.map((film) => renderFilmCard(film)).join('');
//     getRefs().cardslist.insertAdjacentHTML('beforeend', markup); 
//  }
// --------------------------------------

function renderFilmCard(film){
    const urlImg = 'https://image.tmdb.org/t/p/w500';

    return `<li class="film-card">
    <a href="">
        <img src="${urlImg}${film.poster_path}" alt="${film.title}" data-index = ${film.id}>
        <h2>${film.title}</h2>
        <p>${film.genres}
        | ${film.release_date !== undefined ? film.release_date.slice(0, 4) : ""}</p>             
        <p>${film.vote_average}</p>
    </a>
        </li>`;
}

export default changeGenresIdForName     // принимает  responce.results
export renderFilmCard