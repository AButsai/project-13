function makeModal() {
  return `
  <div class="overlay is-hidden">
  <div class="modal">
    <button data-modal-close type="button" class="closeModal modal__button-close">
      <svg class="backdrop__icon-close">
        <use href="/images/icons.svg#close"></use>
      </svg>
    </button>
    <div class="modal_imageContainer">
      <img src="${1}" alt="film picture" class="modal_image" />
    </div>

    <div class="modal_descriptionContainer">
      <h2 class="modal_title">${1}</h2>

      <ul class="modal-list">
        <li class="modal-list_item">
          <p class="modal-list_title">Vote / Votes</p>
          <p>
            <span class="modal-list_text modal-list_text-colorOrange">${1}</span>
            <span class="modal-list_text">/</span>
            <span class="modal-list_text modal-list_text-colorGrey">${1}</span>
          </p>
        </li>
        <li class="modal-list_item">
          <p class="modal-list_title">Popularity</p>
          <p class="modal-list_text">${1}</p>
        </li>
        <li class="modal-list_item">
          <p class="modal-list_title">Original Title</p>
          <p class="modal-list_text">${1}</p>
        </li>
        <li class="modal-list_item">
          <p class="modal-list_title">Genre</p>
          <p class="modal-list_text">${2}</p>
        </li>
      </ul>

      <h2 class="modal_about">About</h2>
      <p class="modal_text">
        ${1}
      </p>

      <ul class="button-list">
        <li>
          <button type="button" class="button-list_buttonStyle modal-button_watched">
            add to Watched
          </button>
        </li>
        <li>
          <button type="button" class="button-list_buttonStyle modal-button_queue">
            add to queue
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>

  `;
}

const refs = {
  closeBtn: document.querySelector('.closeModal'),
  backdrop: document.querySelector('.overlay'),
};

closeBtn.addEventListener('click', onCloseBtnClick);
backdrop.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick() {
  backdrop.classList.add('is-hidden');
}
