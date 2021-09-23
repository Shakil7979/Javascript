


// constructor create (Student)
function Student(name,age,dep)
{ 
    this.name = name;
    this.age = age;
    this.dep = dep;
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.dep);
    }
}

// data add 
var student1 = new Student("shakil",55,"computer");
var student2 = new Student("Alifur",44,"Arcitecture");

// get from constructor all value 
student1.display();
student2.display();

// get for single value from constructor
console.log(student1.name);




