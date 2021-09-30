

//  for of

const students = ["shakil", "alifur", "dada"];

for (let student of students) {
  console.log(student);
}

// for in

let students2 = {
  ID: 01,
  name: "Sadbin Shakil",
  department: "Computer",
};

for (let x in students2) {
  // console.log(x);
  console.log(`${x} : ${students2[x]}`);
}


