import Notiflix from 'notiflix';
export const API_KEY = process.env.API_KEY;
// const API_KEY = '38f8f0caa293ab4deac25df0604d8478';

export const BASE_URL = 'https://api.themoviedb.org/3';
export default class MoviesService {
  constructor() {
    this.page = 1;
    this.apiKey = API_KEY;
    this.baseUrl = BASE_URL;
    this.genres = [];
    this.searchQuery = '';
    this.language =
      JSON.parse(localStorage.getItem('language')) === null
        ? 'en'
        : JSON.parse(localStorage.getItem('language'));
  }

  /**
   * Returns trending movies
   */

  async getPopularMovies() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${this.page}`;
    const response = await fetch(url, { mode: 'cors' });
    const { results } = await response.json();
    return results;
  }

  async getVideoById(id) {
    const url = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=${this.language}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    if (!data.results[1]) {
      if (!data.results[0]) {
        console.log(data);
        return -1;
      }
      return data.results[0].key;
    }
    return data.results[1].key;
  }

  async getMovieById(id) {
    const url = `
    ${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${JSON.parse(
      localStorage.getItem('language'),
    )}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    console.log(data.results);
    return data.results[0].id;
  }

  async searchMovies() {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&query=${this.searchQuery}`;

    return this.cacheGenresList()
      .then(_ => fetch(url, { mode: 'cors' }))
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })

      .then(responce => {
        if (this.page > responce.total_pages) {
          return;
        }
        console.log(responce.total_pages);
        return responce;
      })
      .then(({ results }) => {
        return results;
      })

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
