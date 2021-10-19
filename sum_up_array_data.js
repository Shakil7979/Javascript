

function myFunction(numbers, num) {
  var sum = 0;
  for (var x = 0; x < numbers.length; x++) {
    if (num < numbers[x]) {
      sum = sum + numbers[x];
    }
  }
  return sum;
}

console.log(myFunction([1, 2, 3, 4], 2));

