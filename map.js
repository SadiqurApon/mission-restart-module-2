// const numbers = [4, 9, 16, 8];
// const double = [];
// for (const num of numbers){
//     const result = num * 2;
//     double.push (result);
// }
// console.log(double);
const numbers = [4, 9, 16, 10];
// const double = [];
// for(const num of numbers){
//     const result = num * 2;
//     double.push(result);

// }
// const double = x => x * 2;
// const doubleNumbers = numbers.map(double);
const double = numbers.map(x => x * 2);
const fivetimes = numbers.map( x => x * 5);
const squared = numbers.map (num => num * num);
console.log(double);
console.log(squared);
console.log(fivetimes);

const friends = ['Rafi', 'Rafiq', 'Rafiqul', 'Rafik'];
const friendslength = friends.map(name => name.length);
const fristLetter = friends.map(first => first[0]);
console.log(friendslength);
console.log(fristLetter);