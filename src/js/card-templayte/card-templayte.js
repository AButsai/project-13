import genresJSON from './json/genres/genres.json';
export default changeGenresIdForName;      // принимает  responce.results

// const cards = document.querySelector('.cards');  


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
renderFilmCard(filmsInfo)
}

function correctGenres(filmsInfo){
    filmsInfo.map(film=>{
        if(film.genres.length > 2){
            film.genres.splice(2, 5, 'Other')
        }
        return film.genres;  
    })
}


function renderFilmCard(filmsInfo){
    const urlImg = 'https://image.tmdb.org/t/p/w500';
    const markup = filmsInfo.map(film =>
        `<li>
    <a href="">
        <img src="${urlImg}${film.poster_path}" alt="${film.title}" data-index = ${film.id}>
        <h2>${film.title}</h2>
        <p>${film.genres}
        | ${film.release_date !== undefined ? film.release_date.slice(0, 4) : ""}</p>             
        <p>${film.vote_average}</p>
    </a>
        </li>`).join("");
        // cards.insertAdjacentHTML('beforeend', markup); 
}