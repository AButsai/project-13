import { defaultPageLibrary } from './renderLibraryCollection';
import getRefs from '../refs/getRefs';
const { libraryLink } = getRefs();

async function renderPageLibrary() {
  if (libraryLink) {
    defaultPageLibrary();
    return;
  }
}

libraryLink.addEventListener('click', renderPageLibrary);
