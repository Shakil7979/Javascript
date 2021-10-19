

function myFunction(x, y) {
  var lastValue = x.filter(function (item) {
    return item !== y;
  });
  return lastValue;
}

console.log(myFunction([1, 2, 3, 4, 5, 3], 5));

