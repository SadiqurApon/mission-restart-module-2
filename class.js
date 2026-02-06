class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        // console.log('Player created', name);
    }
    goal(){
        console.log("Score a goal");
    }
    getName(){
        return 'Messi';
        // console.log('Messi');
    }
}
const player1 = new Player( ' with Messi', 35 );
const player2 = new Player( ' with Ronaldo', 37 );
// console.log(player1);
// console.log(player2);
// player1.goal(); 
// console.log(player1);

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Bird extends Animal{
    constructor(name, color, age){
        super(name, age)
        this.color = color;

    }
}
class Dog extends Animal{
    constructor(name, breed, age){
        super(name, age)
        this.breed = breed;

    }
}
const bird1 = new Bird('Parrot', 'Green', 2);
const dog1 = new Dog('Bulldog', 'English', 4);
console.log(bird1);
console.log(dog1);