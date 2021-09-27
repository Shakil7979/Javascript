

var count = 0;

document
  .getElementById("textarea")
  .addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "Text Count Number" + count;
  });


