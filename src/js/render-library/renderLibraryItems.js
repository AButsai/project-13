import getRefs from '../refs/getRefs';
import galleryTpl from '../../partials/library-film/library-film.hbs';
import createYear from '../helpers/createYear';

export default function renderLibraryItems(data) {
  const newData = data.map(item => ({ ...item, year: createYear(item) }));

  const { cardslist } = getRefs();
  const markup = galleryTpl(newData);

  cardslist.insertAdjacentHTML('beforeend', markup);
}
