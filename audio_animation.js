

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".myBtn")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    myAnimtaion(text);
  });
}

function audioPlay(text) {
  switch (text) {
    case "x":
      setTimeout(function () {
        var audio = new Audio("x.mp3");
        audio.play();
      }, 1000);
      break;

    case "y":
      setTimeout(function () {
        var audio = new Audio("y.mp3");
        audio.play();
      }, 1000);
      break;

    case "z":
      setTimeout(function () {
        var audio = new Audio("z.mp3");
        audio.play();
      }, 1000);
      break;
  }
}

function myAnimtaion(text) {
  var selectorBtn = document.querySelector("." + text);
  selectorBtn.classList.add("anim");

  setTimeout(function () {
    selectorBtn.classList.remove("anim");
  }, "1000");
}


