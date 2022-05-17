export function createPlayer(key) {
  if (key !== -1) {
    return `<div class="iframe_wrap"><iframe  class="iframe" src="https://www.youtube.com/embed/${key}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  return `<div class="iframe_wrap"><iframe  class="iframe" src="http://www.youtube.com/embed/zwBpUdZ0lrQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}
