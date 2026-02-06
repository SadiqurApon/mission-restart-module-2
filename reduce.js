const numbers = [2, 10, 15, 20];
// let sum = 0;
// for(const num of numbers){
//     sum += num;
// }

const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);
const subtotal = numbers.reduce((acc, curr)=> acc + curr, 0);
console.log(subtotal);
