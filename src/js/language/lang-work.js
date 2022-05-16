import { langArr } from './arrLang';
import { changeLanguage } from './change-lang';

export function changeStoragelanguage(lang) {
  localStorage.setItem('language', JSON.stringify(lang));
  changeLanguage(langArr);
  location.reload();
}

changeLanguage(langArr);
