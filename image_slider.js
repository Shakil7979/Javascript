

var images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];

var img = document.querySelector("img");

var count = 0;

function next() {
  count++;
  if (count >= images.length) {
    count = 0;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = images.length - 1;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
}




