import getRefs from '../refs/getRefs.js';
import { changeStoragelanguage } from './lang-work.js';

const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Українська',
    value: 'uk',
  },
];

const createOption = languageItem => `<option value="${languageItem.value}">
${languageItem.name}</option>
`;

const createLanguageSelector = languages => {
  const options = languages.map(createOption).join('');

  return ` <select name='lanuagesSelector' class='change-lang'>
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
