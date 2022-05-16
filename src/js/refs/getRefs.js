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
    //Slider
    sliderList: document.querySelector('.splide__list'),
    
    //Spinner

    closeModalBtn: document.querySelector('.modal_button-close'),

    // spinner: document.querySelector('.load-spinner'),

    //Modal
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.paint-place'),
    btnWatched: document.querySelector('.film-card-button_watched'),
    btnQueue: document.querySelector('.film-card-button_queue'),

    //Api Service
    searchForm: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),

    // dark and light theme
    chk: document.getElementById('chk'),
    labelMoonSun: document.querySelector('.label'),
    ballMoonSun: document.querySelector('.ball'),
    root: document.querySelector('#root'),
    footerMoonSun: document.querySelector('.footer'),
    footerTextMoonSun: document.querySelector('.footer__section-text'),
  };
}

export default getRefs;
