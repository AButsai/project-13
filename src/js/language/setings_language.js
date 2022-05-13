import { changeStoragelanguage } from './lang-work.js';

const languages = [
  {
    name: 'ENGLISH',
    value: 'en',
  },
  {
    name: 'УКРАЇНСЬКА',
    value: 'uk',
  },
];

const createOption = languageItem => {
  const language = JSON.parse(localStorage.getItem('language'));

  return `<option value="${languageItem.value}"
${language === languageItem.value ? 'selected' : ''}
>
${languageItem.name}</option>
`;
};

const createLanguageSelector = languages => {
  const options = languages.map(createOption).join('');

  return ` <select name='lanuagesSelector' class='change-lang switchStyle'>
  ${options}
  </select>
  `;
};

const createSwitcher = () => {
  document.querySelector('.select').innerHTML = createLanguageSelector(languages);

  const selectRef = document.querySelector('[name="lanuagesSelector"]');
  const getActLang = e => {
    const value = e.target.value;
    changeStoragelanguage(value);
  };

  selectRef.addEventListener('change', getActLang);
};

createSwitcher();
