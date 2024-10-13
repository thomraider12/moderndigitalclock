const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

function setDate() {
  const now = new Date();
  
  const dd = now.getDate();
  const mm = now.getMonth();
  const yyyy = now.getFullYear();
  
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();
  
  const monthName = [
  'de Janeiro', 'de Fevereiro', 'de Março', 'de Abril',
  'de Maio', 'de Junho', 'de Julho', 'de Agosto', 'de Setembro',
  'de Outubro', 'de Novembro', 'de Dezembro'];

  
  if (hrs < 10) {
    hours.innerHTML = '0' + hrs;
  } else {
    hours.innerHTML = hrs;
  }

  if (secs < 10) {
    seconds.innerHTML = '0' + secs;
  } else {
    seconds.innerHTML = secs;
  }

  if (mins < 10) {
    minutes.innerHTML = '0' + mins;
  } else {
    minutes.innerHTML = mins;
  }
    day.innerHTML = dd;
  month.innerHTML = monthName[mm];
  year.innerHTML = yyyy;
}

setInterval(setDate, 500);