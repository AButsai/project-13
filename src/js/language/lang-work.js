import { renderPopular } from '../service/search.js';

const langArr = {
  home: {
    en: 'home',
    uk: 'головна',
  },
  library: {
    en: 'my library',
    uk: 'моя бібліотека',
  },
  watched: {
    en: 'watched',
    uk: 'переглянуті',
  },
  queue: {
    en: 'queue',
    uk: 'черга',
  },
  placeholder: {
    en: 'Search Film',
    uk: 'Шукати Кіно',
  },
};

export function changeStoragelanguage(lang) {
  localStorage.setItem('language', JSON.stringify(lang));
  changeLanguage();
  // renderPopular();
  // location.reload();
}

function changeLanguage() {
  const language = JSON.parse(localStorage.getItem('language'));

  console.log(language);
  for (let key in langArr) {
    // document.querySelector('.lang_placeholder').placeholder = langArr[key][language];
    document.querySelector('.lang_' + key).innerHTML = langArr[key][language];
  }
}
