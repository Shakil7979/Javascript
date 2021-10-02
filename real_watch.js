

setInterval(timeSet, 1000);

function timeSet() {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");

  var date = new Date();
  var todayHour = date.getHours();
  var todayMiniute = date.getMinutes();
  var todaySecond = date.getSeconds();

  hour.innerHTML = `${todayHour} : `;
  minute.innerHTML = ` ${todayMiniute} : `;
  second.innerHTML = todaySecond;
}

timeSet();



