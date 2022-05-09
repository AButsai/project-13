import Notiflix from 'notiflix';
import spinnerIsOn from '../load_spinner/load-spinner';
//Функция бесконечного скролла

export default function infinityScroll(createResponse) {
  //обьект опций
  const options = {
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1.0],
  };
  //коллбек с вызовом следующего запроса
  const callback = function(entries, observer) {
    //Если нужный элемент просмотрен(Intersecting:true)
    //Сбрасываем "просмотренно", и вызываем функцию запроса
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        //Запускаем спиннер после последнего елемента списка
        spinnerIsOn(lastImg);

        //Функция запроса и отрисовки
        setTimeout(createResponse, 750);
      }
    });
  };
  //Используем апи браузера IntersectionObserver
  const observer = new IntersectionObserver(callback, options);
  //Выбирает последний элемент галереи, на котором будет наблдюдатель IntersectionObserver
  const lastImg = document.querySelector('.film-card:last-child');
  //Если такой есть то ставим на него наблюдателя
  if (lastImg) {
    observer.observe(lastImg);
  }
}
