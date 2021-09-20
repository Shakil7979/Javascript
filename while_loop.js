

var x = 1;
while (x <= 10) {
  document.write(" " + x);
  x = x + 1;
}
 
// 1 theke 100 porjunto 3 and 5 dara vag korle vag fol sunno hobe sei sonkkha gulo ber koro

var x = 1;
var sum = 0;
while (x <= 20) {
  if (x % 3 == 0 && x % 5 == 0) {
    document.write(" " + x);
    sum = sum + x;
  }
  x = x + 1;
}

document.write(" sum = " + sum);
