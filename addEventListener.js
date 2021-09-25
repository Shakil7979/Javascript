

var buttonLen = document.querySelectorAll(".myBtn").length;

for (var i = 0; i < buttonLen; i++) {
  document.querySelectorAll(".myBtn")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is Clicked";
  });
}



