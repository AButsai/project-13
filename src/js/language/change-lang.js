export function changeLanguage(arr) {
  const language =
    JSON.parse(localStorage.getItem('language')) === null
      ? 'en'
      : JSON.parse(localStorage.getItem('language'));

  for (let key in arr) {
    document.querySelector('.lang_' + key).innerHTML = arr[key][language];
    document.querySelector('.lang_placeholder').placeholder = arr[key][language];
  }
}

export function changeLanguageModal(arr) {
  const language =
    JSON.parse(localStorage.getItem('language')) === null
      ? 'en'
      : JSON.parse(localStorage.getItem('language'));

  for (let key in arr) {
    const elemHasDisable = document.querySelector('.lang_' + key).hasAttribute('disabled');
    if (!elemHasDisable) document.querySelector('.lang_' + key).innerHTML = arr[key][language];
  }
}
