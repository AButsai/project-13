function getRefs() {
  return {
    // Header
    homeLink: document.querySelectorAll('[data-home]'),
    libraryLink: document.querySelector('[data-library]'),
    libraryWatched: document.querySelector('[data-watched]'),
    libraryQueue: document.querySelector('[data-queue]'),
    form: document.querySelector('.form'),
    header: document.querySelector('.header'),
    buttons: document.querySelector('.library'),
    //Spinner
    spinner: document.querySelector('.load-spinner'),
    closeModalBtn: document.querySelector('.closeModal'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    //Main
    root: document.querySelector('#root'),
    cardslist: document.querySelector('.cards__list'),
  };
}

export default getRefs;
