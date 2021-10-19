

function myFunction(x, y) {
  var c = x.concat(y);
  var d = c.filter((item, pos) => c.indexOf(item) == pos);
  return d;
}
console.log(myFunction([1, 2, 4, 5, 8, 4], [7, 4, 8, 5, 92, 2]));

