

var numbers = [3, 4, 5, 6, 7, 8];

// foreach loop
var sqNumbers = [];
numbers.forEach(function (x) {
  sqNumbers.push(x * x);
});
console.log(sqNumbers);

// map method
var mapNumbers = numbers.map(function (x) {
  return x * x;
});
console.log(mapNumbers);

// filter method
var filterNumber = numbers.filter(function (x) {
  return x > 5;
});
console.log(filterNumber);


