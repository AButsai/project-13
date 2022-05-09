const spinner = ` <div class="spinner-wrapper"><span class="load-spinner isOn"><svg width="40" height="40"><circle cx="20" cy="20" r="15"></svg></span></div>`;
//SpinnerIsOn
export default function spinnerIsOn(element) {
  //Добавлем спиннер
  element.insertAdjacentHTML('afterend', spinner);

  // Таймаут на продолжительность работы спиннера
  const spinnerIsOn = document.querySelector('.load-spinner');
  //Удаляем спиннер после анимации
  setTimeout(() => {
    spinnerIsOn.remove();
  }, 700);
  console.log('spinner');
}
