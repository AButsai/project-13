const root = document.querySelector('#root');



renderFilmsPage();
const FilmsList = document.querySelector('.films-grid');

function renderFilmsPage() {
  const markup = `<main class="container">
    <ul class="films-grid">
    </ul>
</main>`;
  root.insertAdjacentHTML('beforeend', markup);
}


function renderFilmsList(library) {

  const markup = library.results
    .map(({ backdrop_path, title, genre_ids, release_date, vote_average }) => {
      return `<li class="film-card">
   <a href="#">
                <img ${backdrop_path} alt ="${title}">
                    <h2>${title}</h2>
            <p>${genre_ids} | ${release_date.slice(0, 4)}</p>
            <p>${vote_average}</p>
                </a></li>`;
    })
    .join('');
 FilmsList.insertAdjacentHTML('beforeend', markup);
}

