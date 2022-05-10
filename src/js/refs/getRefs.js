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
    main: document.querySelector('.main'),
    cardslist: document.querySelector('.films-grid'),
    //Spinner

    closeModalBtn: document.querySelector('.modal_button-close'),

    // spinner: document.querySelector('.load-spinner'),

    //Modal

    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    //Api Service
    searchForm: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
  };
}

export default getRefs;
