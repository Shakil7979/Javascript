

function myFunction(arr) {
  var lgth = 0;
  var longest;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}
console.log(
  myFunction([
    "first item",
    "second ",
    "third item is longer than the third one item",
  ])
);

