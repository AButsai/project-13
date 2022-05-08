export default class MoviesService {
  constructor({ apiKey, baseUrl }) {
    this.page = 1;
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.genres = [];
  }

  /**
   * Returns trending movies
   */
  getPopularMovies() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-USpage=${this.page}`;
    return fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }

  searchMovies(searchQuery) {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&page=${this.page}&query=${searchQuery}`;

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
      );
  }

  getGenresList() {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data.genres);
  }

  cacheGenresList() {
    let promise = Promise.resolve();

    if (this.genres.length === 0) {
      promise = this.getGenresList().then(genres => (this.genres = genres));
    }

    return promise;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
