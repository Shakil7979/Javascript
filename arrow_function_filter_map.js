
// arrow function example 
const message2 = (x, y) => x + y;

console.log(message2(12, 2));
 
// how to I get object data using arrow function  
var students = [
  {
    id: 01,
    name: "Sadbin",
    gpa: 3.65,
  },
  {
    id: 02,
    name: "Alifur",
    gpa: 2.0,
  },
  {
    id: 03,
    name: "Sahed",
    gpa: 2.95,
  },
  {
    id: 04,
    name: "Bakker",
    gpa: 4.3,
  },
];

// simple function
function student1() {
  return students
    .filter(function (x) {
      return x.gpa > 3;
    })
    .map(function (y) {
      return y.name;
    });
}
console.log(student1());

// arrow function
const student2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);

const student3 = () => students.filter((x) => x.id == 03).map((y) => y.name);

console.log(student2());
console.log(student3());
