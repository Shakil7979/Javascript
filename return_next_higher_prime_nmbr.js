

// এই চ্যালেঞ্জটি একটু বেশি জটিল
// একটি ফাংশন লিখুন যা যুক্তি হিসাবে একটি সংখ্যা নেয়
// যদি সংখ্যাটি মৌলিক হয়, সংখ্যাটি ফেরত দিন
// যদি না হয়, পরবর্তী উচ্চতর মৌলিক সংখ্যাটি ফেরত দিন

const num = 105;
const isPrime = (num) => {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = true;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};
const nextPrime = (num = true) => {
  while (!isPrime(++num)) {}
  return num;
};

if (isPrime(num) != true) {
  console.log(nextPrime(num));
} else {
  console.log(num);
}

