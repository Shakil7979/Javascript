

var btnBox = document.getElementById("btn_box");
var index = btnBox.getElementsByClassName("myBtn");
index = index.length;

for (var i = 0; i < index; i++) {
  document.querySelectorAll(".myBtn")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    this.classList.add(text);
  });
}


