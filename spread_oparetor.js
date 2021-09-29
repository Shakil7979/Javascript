

let number = [1, 2, 3];
let number2 = [4, 5, 6];
console.log(...number2, ...number);

// object for spread oparetor
let object1 = {
  name: "shakil",
  department: "Computer",
};

let object2 = {
  HomeTown: "Dinajput",
  crntCity: "Dhaka",
};

let o = { ...object1, ...object2 };

console.log(o);



