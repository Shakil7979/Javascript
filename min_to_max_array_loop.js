

// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  var count = [];
  for (var i = min; i <= max; i++) {
    count.push(i);
  }
  return count;
}

console.log(myFunction(2, 10));

