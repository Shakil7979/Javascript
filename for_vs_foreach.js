

// for loop
var numbers = [10, 15, 20, 30, 50];
for (var x = 0; x < numbers.length; x++) {
  console.log(numbers[x]);
}

// foreach loop with another array push the number wtih *
var numbers = [10, 15, 20, 30, 50];
var squreNumber = [];
numbers.forEach(function (x) {
  squreNumber.push(x * x);
});
console.log(squreNumber);

// foreach loop with all array value 5++
var numbers = [10, 15, 20, 30, 50];
numbers.forEach(function (x, i, a) {  // x = value , i = index number , a = array
  a[i] = x + 5;
});
console.log(numbers);


