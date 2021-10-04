

// এই চ্যালেঞ্জটি একটু বেশি জটিল
// একটি ফাংশন লিখুন যা যুক্তি হিসাবে একটি সংখ্যা নেয়
// যদি সংখ্যাটি মৌলিক হয়, সংখ্যাটি ফেরত দিন
// যদি না হয়, পরবর্তী উচ্চতর মৌলিক সংখ্যাটি ফেরত দিন

function myFunction(x) {
  var number = x;
  var isPrime = number;

  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        var nextPrime = number + 1;
        return nextPrime;
      } else {
        return isPrime;
      }
    }
  }
}
console.log(myFunction(12));

