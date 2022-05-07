export default class MoviesService {
  constructor({ apiKey, baseUrl }) {
    this.page = 1;
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Returns trending movies
   */
  getTrandingMovies() {
    const url = `${this.baseUrl}/popula?api_key=${this.apiKey}&language=en-USpage=${this.page}`;
    const urlFetch = fetch(url, { mode: 'cors' });
    return urlFetch;
  }

  searchMovies(searchQuery) {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&page=${this.page}&query=${searchQuery}`;

    fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  //    чтобы записать из внешнего кода в searchQuery
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
