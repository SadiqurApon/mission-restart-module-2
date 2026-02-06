const student = {
    name: "Rafi",
    1 : 50,
    'home-address' : 'Dhaka',
    marks: 85
}

// dot notation
const studentName = student.name;
// braket notation
const studentOne = student['1']
const studentAddress = student['home-address']
console.log(student["home-address"])

for(const key in student){
    const value = student[key];

}
const propName = 'marks';
console.log(student[propName]);
