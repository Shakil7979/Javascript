

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all
 
function myFunction(arr, num) {
  var num = num + 1;
  var count = [];
  if (num > arr.length) {
    return arr;
  } else {
    for (var i = num; i < arr.length; i++) {
      count.push(arr[i]);
    }
    return count;
  }
}

console.log(myFunction([2, 6, 4, 5, 7], 2));

