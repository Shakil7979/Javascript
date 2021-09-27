

function clicked(color) {
  var dbg = document.querySelectorAll(".red");
  for (var i = 0; i < dbg.length; i++) {
    dbg[i].classList.remove("red");
  }
  color.classList.add("red");
}


