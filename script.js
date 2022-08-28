const countDown = () => {
  const finalDate = new Date("1 December 2022");
  let currDate = new Date();

  let diff = finalDate - currDate;
  let diffSeconds = diff / 1000;

  let Seconds = Math.floor(diffSeconds) % 60;
  let Minutes = Math.floor(diffSeconds / 60) % 60;
  let Hours = Math.floor(diffSeconds / 3600) % 24;
  let Days = Math.floor(diffSeconds / 3600 / 24) % 30;
  let Months = Math.floor(diffSeconds / 3600 / 24 / 30);


  const getMonths = document.getElementById("Months");
  getMonths.innerText = formatTime(Months);

  const getDays = document.getElementById("Days");
  getDays.innerText = formatTime(Days);

  const getHours = document.getElementById("Hours");
  getHours.innerText = formatTime(Hours);

  const getMinutes = document.getElementById("Minutes");
  getMinutes.innerText = formatTime(Minutes);

  const getSeconds = document.getElementById("Seconds");
  getSeconds.innerText = formatTime(Seconds);
};

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000);