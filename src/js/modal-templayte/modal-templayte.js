export default renderModal;

function renderModal(modalInfo){
    const urlImg = 'https://image.tmdb.org/t/p/w500';
    const genre = modalInfo.genres.map(genre => genre.name);

    const modal =  `<li>
    <img src="${urlImg}${modalInfo.backdrop_path}" alt="${modalInfo.original_title}">
    <h2>${modalInfo.original_title}</h2>
    <p><span>${modalInfo.vote_average}</span>/<span>${modalInfo.vote_count}</span></p>
    <p>${modalInfo.popularity}</p>
    <p>${modalInfo.original_title}</p>
    <p>${genre}</p>
    <h3>ABOUT</h3>
    <p>${modalInfo.overview}</p>
  </li>`;

//   lightBox.insertAdjacentHTML('beforeend', modal);   <--- путь куда пихать модалку
  console.log(modal)
}