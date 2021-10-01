

// variable destruct
var a = 20;
var b = 30;
[a, b] = [b, a];
console.log(a);

// array Destruct
let numbers = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = numbers;
console.log(num3);

// object destruct and efect object destruct
let students = {
  id: 01,
  name: "Sadbin Shakil",
  language: {
    bangla: "bangla",
    english: "English",
  },
};
const { id, name, language } = students;
console.log(id);
console.log(name);
console.log(language.english);

// function destruct

const stInfo = ({ id, name }) => {
  console.log(`${id} and ${name}`);
};

const stObj = {
  id: 01,
  name: "Sadbin Shakil",
};
stInfo(stObj);


