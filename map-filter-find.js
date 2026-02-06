const students = [
    {id : 1, name: 'Alice', age: 20, grade: 'A', marks: 70},
    {id : 2, name: 'Bob', age: 22, grade: 'B', marks: 60},
    {id : 3, name: 'Charlie', age: 19, grade: 'A', marks: 70},
    {id : 4, name: 'David', age: 21, grade: 'C', marks: 50}
]
const names = students.map(students => students.name);
const goodStudents = students.filter(students => students.grade === 'A');
const heighestMarks = students.filter(students => students.marks > 50);
const firstGoodStudent = students.find(goodStudent => goodStudent.marks > 60);

console.log(names);
console.log(goodStudents);
console.log(heighestMarks);
console.log(firstGoodStudent); 