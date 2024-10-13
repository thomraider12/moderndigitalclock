const timeZone = document.querySelector('.time-zone');

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

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    timeZone.innerHTML = "Horário Desconhecido"; // Caso a localização não seja obtida
  }
}

function showPosition(position) {
  // Código para recuperar a cidade a partir da latitude e longitude (necessita de API externa)
  // Exemplo simplificado, substitua pela lógica para obter a cidade
  const city = "Lisboa"; // Substitua por cidade obtida
  timeZone.innerHTML = `Horário de ${city}`;
}

getLocation();

setInterval(setDate, 1000);
