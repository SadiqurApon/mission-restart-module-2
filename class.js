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
console.log(player1);
console.log(player2);
// player1.goal(); 
// console.log(player1);