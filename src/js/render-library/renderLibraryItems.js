import getRefs from '../refs/getRefs';
import { renderFilmCard } from '../card-templayte/card-templayte';

export default function renderLibraryItems(data) {
  const markup = renderFilmCard(data);

  getRefs().cardslist.insertAdjacentHTML('beforeend', markup);
}
