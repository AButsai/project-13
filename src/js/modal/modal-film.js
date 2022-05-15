import getRefs from '../refs/getRefs.js';
import makeLocalStorage from '../localStorage/localStorage';

const { closeModalBtn, backdrop, modal } = getRefs();

function removeDataFromModal() {
  backdrop.classList.add('visually-hidden');
  window.removeEventListener('keydown', handleEsc);
  modal.innerHTML = '';
}

const handleEsc = e => {
  if (e.key === 'Escape') {
    removeDataFromModal();
  }
};

const close = e => {
  if (e.target === e.currentTarget) {
    removeDataFromModal();
  }
};

closeModalBtn.addEventListener('click', () => {
  removeDataFromModal();
});

backdrop.addEventListener('click', close);

function makeModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  window.addEventListener('keydown', handleEsc);

  const urlImg = 'https://image.tmdb.org/t/p/w500';
  let img = '';

  if (poster_path === null) {
    img = 'https://github.com/AButsai/project-13/blob/dev/src/images/plug.jpg?raw=true';
  } else {
    img = urlImg + poster_path;
  }

  return `<div class="modal-film">
  
  <div class="modal-film_imageContainer">
    <img src="${img}" alt="${title}" class="modal-film_image" />
  </div>

  <div class="modal-film_descriptionContainer">
    <h2 class="modal-film_title">${title}</h2>

    <ul class="modal-film-list">
      <li class="modal-film-list_item">
        <p class="modal-film-list_title">Vote / Votes</p>
        <p>
          <span class="modal-film-list_text modal-film-list_text-colorOrange">${vote_average}</span>
          <span class="modal-film-list_text">/</span>
          <span class="modal-film-list_text modal-film-list_text-colorGrey">${vote_count}</span>
        </p>
      </li>
      <li class="modal-film-list_item">
        <p class="modal-film-list_title">Popularity</p>
        <p class="modal-film-list_text">${popularity}</p>
      </li>
      <li class="modal-film-list_item">
        <p class="modal-film-list_title">Original Title</p>
        <p class="modal-film-list_text">${original_title}</p>
      </li>
      <li class="modal-film-list_item">
        <p class="modal-film-list_title">Genre</p>
        <p class="modal-film-list_text">${genres}</p>
      </li>
    </ul>

    <h2 class="modal-film_about">About</h2>
    <p class="modal-film_text">
    ${overview}
    </p>

    <ul class="button-list">
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_watched lang_addwatched">
          add to Watched
        </button>
      </li>
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_queue lang_addqueue">
          add to queue
        </button>
      </li>
    </ul>
  </div>
</div>
`;
}

export function openModal(data) {
  modal.insertAdjacentHTML('beforeend', makeModal(data));
  backdrop.classList.remove('visually-hidden');

  makeLocalStorage(data);
}

const langArr = {
  addwatched: {
    en: 'add to Watched',
    uk: 'додати до переглянутих',
  },
  addqueue: {
    en: ' add to queue',
    uk: 'додати в чергу',
  },

  removewatched: {
    en: ' add to queue',
    uk: '',
  },
};

export function changeLanguageOnModal() {
  const language = JSON.parse(localStorage.getItem('language'));
  for (let key in langArr) {
    document.querySelector('.lang_' + key).innerHTML = langArr[key][language];
  }
}
