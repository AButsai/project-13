function getRefs() {
  return {
    // Header
    homeLink: document.querySelectorAll('[data-home]'),
    homeLinkCurrent: document.querySelector('[data-curr]'),
    libraryLink: document.querySelector('[data-library]'),
    libraryWatched: document.querySelector('[data-watched]'),
    libraryQueue: document.querySelector('[data-queue]'),
    form: document.querySelector('.form'),
    header: document.querySelector('.header'),
    buttons: document.querySelector('.library'),
    // Main
    cardslist: document.querySelector('.films-grid'),
    //Spinner
    spinner: document.querySelector('.load-spinner'),
    //Modal
    closeModalBtn: document.querySelector('.closeModal'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
  };
}

export default getRefs;
