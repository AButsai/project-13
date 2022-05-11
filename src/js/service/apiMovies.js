import Notiflix from 'notiflix';
export default class MoviesService {
  constructor({ apiKey, baseUrl }) {
    this.page = 1;
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.genres = [];
    this.searchQuery = '';
  }

  /**
   * Returns trending movies
   */
  async getPopularMovies() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${this.page}`;
    const response = await fetch(url, { mode: 'cors' });
    const { results } = await response.json();
    return results;
  }

  searchMovies() {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&page=${this.page}&query=${this.searchQuery}`;

    return this.cacheGenresList()
      .then(_ => fetch(url, { mode: 'cors' }))
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ results }) => {
        return results;
      })
      .then(movies =>
        movies.map(movie => {
          const genres = movie.genre_ids.map(id => this.genres.find(genre => genre.id === id));
          return {
            ...movie,
            genre_ids: undefined,
            genres,
          };
        }),
      )
      .catch(error => Notiflix.Notify.failure(`Oops, something wrong.Try again`));
  }

  async getGenresList() {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
  }

  cacheGenresList() {
    let promise = Promise.resolve();

    if (this.genres.length === 0) {
      promise = this.getGenresList().then(genres => (this.genres = genres));
    }

    return promise;
  }

  newSearchName(newName) {
    this.searchQuery = newName;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
