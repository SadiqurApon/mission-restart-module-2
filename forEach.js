const numbers = [2, 10, 15, 20];
// numbers.forEach( num => console.log(num));
numbers.forEach(num => {
    const doubled = num * 2;
    console.log(doubled);
})    
const graterthen15 = numbers.filter( x => x < 15);
console.log(graterthen15); 
const evenNumbers = numbers.filter( num => num %2 === 0);
console.log(evenNumbers);
const firstEven = numbers.find ( first => first % 2 === 0);
console.log(firstEven);