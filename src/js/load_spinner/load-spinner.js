import getRefs from '../refs/getRefs';
const { spinner } = getRefs();

//SpinnerIsOn
function spinnerIsOn() {
  spinner.classList.remove('hidden');
  spinner.classList.add('isOn');

  // Таймаут на продолжительность работы спиннера
  setTimeout(() => {
    spinner.classList.remove('isOn');
    spinner.classList.add('hidden');
  }, 700);
}
