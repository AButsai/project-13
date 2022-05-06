import getRefs from '../refs/getRefs.js';

const { closeModalBtn, backdrop, modal } = getRefs();

function makeModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
}) {
  closeModalBtn.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onEscBtnPress);

  const modalFilmMake = (() => {
    `<div class="film-card">
  <button data-film-card-close type="button" class="film-card__button-close">
    <svg class="backdrop__icon-close">
      <use href="/images/icons.svg#close"></use>
    </svg>
  </button>
  <div class="film-card_imageContainer">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="film picture" class="film-card_image" />
  </div>

  <div class="film-card_descriptionContainer">
    <h2 class="film-card_title">${title}</h2>

    <ul class="film-card-list">
      <li class="film-card-list_item">
        <p class="film-card-list_title">Vote / Votes</p>
        <p>
          <span class="film-card-list_text film-card-list_text-colorOrange">${vote_average}</span>
          <span class="film-card-list_text">/</span>
          <span class="film-card-list_text film-card-list_text-colorGrey">${vote_count}</span>
        </p>
      </li>
      <li class="film-card-list_item">
        <p class="film-card-list_title">Popularity</p>
        <p class="film-card-list_text">${popularity}</p>
      </li>
      <li class="film-card-list_item">
        <p class="film-card-list_title">Original Title</p>
        <p class="film-card-list_text">${original_title}</p>
      </li>
      <li class="film-card-list_item">
        <p class="film-card-list_title">Genre</p>
        <p class="film-card-list_text">${genres}</p>
      </li>
    </ul>

    <h2 class="film-card_about">About</h2>
    <p class="film-card_text">
      Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most
      corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the
      other three escapes with bags of gold hide out in the abandoned gold mine where they happen
      across another gang of three – who themselves were planning to hit the very same bank! As
      tensions rise, things go from bad to worse as they realise the bags of gold are filled with
      lead... they’ve been double crossed – but by who and how?
    </p>

    <ul class="button-list">
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_watched">
          add to Watched
        </button>
      </li>
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_queue">
          add to queue
        </button>
      </li>
    </ul>
  </div>
</div>
`;
  }).join('');

  modal.innerHTML = makeModal;
}

function onCloseBtnClick() {
  backdrop.classList.add('visually-hidden');
  document.body.removeEventListener('keypress', keyPress);
}

function keyPress(e) {
  if (e.key === 'Escape') {
    onCloseBtnClick();
  }
}
