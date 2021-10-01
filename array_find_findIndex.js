

// find and find index number
let numbers = [5, 13, 20, 55, 14, 99];

const evNumber = (value) => {
  if (value % 2 == 0) {
    return value;
  }
};

let evenNumber = numbers.find(evNumber);
let evenNumberIndex = numbers.findIndex(evNumber);

console.log(evenNumber);
console.log(evenNumberIndex);


