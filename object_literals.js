

// Object literals
// function object name short 
const myConst = (name, age) => {
  return {
    name,
    age,
  };
};

let output = myConst("Sadbin Shakil", 21);
console.log(output);

// lierals for object function
// data: function (){}
let object1 = {
  data: function () {
    return "Hi object function 1";
  },
};

let dataOutput1 = object1.data();
console.log(dataOutput1);

// data()
let object2 = {
  data() {
    return "Hi object function 2";
  },
};

let dataOutput2 = object2.data();
console.log(dataOutput2);

// sapce with function name in object

let object3 = {
  "data object"() {
    return "Hi object function 3";
  },
};

let dataOutput3 = object3["data object"]();
console.log(dataOutput3);


