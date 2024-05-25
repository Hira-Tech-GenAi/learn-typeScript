/** @format */

let teacher = {
  name: "Taha Ahmed",
  experience: "10yrs",
};
console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
} = {
  name: "Hira",
  age: 34,
};
console.log(student["name"]);
console.log(student.age);
