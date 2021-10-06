
// simple function get avarage number 
function myFunction(x) {
  var sum = 0;
  for (var index = 0; index < x.length; index++) {
    sum += x[index];
  }
  return sum / x.length;
}

console.log(myFunction([55, 77, 10, 158, 15]));


// riduce method use get avarage number 
function myFunction(input) {
  return input.reduce((acc, cur) => acc + cur, 0) / input.length;
}
console.log(myFunction([55, 77, 10, 158, 15, 10, 150]));

