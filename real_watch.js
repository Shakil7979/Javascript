
setInterval(timeSet, 1000);

function timeSet() {
  var getHour = document.getElementById("hour");
  var getMinute = document.getElementById("minute");
  var getSecond = document.getElementById("second");

  var date = new Date();
  var hour = date.getHours();
  var miniute = date.getMinutes();
  var second = date.getSeconds();
  am_pm = "AM";

  getHour.innerHTML = `${hour} : `;
  getMinute.innerHTML = ` ${miniute} : `;
  getSecond.innerHTML = `${second} ${am_pm}`;
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }
}

timeSet();




