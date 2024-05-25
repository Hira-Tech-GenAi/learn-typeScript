/** @format */

interface Student {
  studentId: number;
  name: string;
}
interface Teacher {
  teacherId: number;
  teacherName: string;
}

type intersectedTyped = Student & Teacher;

let object1: intersectedTyped = {
  studentId: 1234,
  name: "Aliyan",
  teacherId: 5678,
  teacherName: "Taha",
};
