class Vehicle{
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;

    }
    getThis (){
        console.log(this);

    }
    getPrice (){
        return this.price;
    }
}

const car1 = new Vehicle('car', 'Toyota', 500000);
const car2 = new Vehicle('car', 'Honda', 400000);

// car1.getThis();
console.log(car1.getPrice());
console.log(car2.getPrice());