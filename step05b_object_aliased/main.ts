/** @format */
// anonymous
let teacher: { name: string; experience: string } = {
  name: "Sir Hamza",
  experience: "8yrs",
};

// Aliased Object Type
type Student = {
  name: string;
  age?: number;
};
let student: Student = {
  name: "Hira",
  age: 34,
};
console.log(student.age);
console.log(student["name"]);

// Interfaces
interface Manager {
  name: string;
  salary?: number;
}
let manager: Manager = {
  name: "Bilal",
};
