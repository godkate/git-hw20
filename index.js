class Human {
    name = null;
    age = null;
    car = [];

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfoHuman = () => {
        return console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
}

class Car {
    brand = null;
    model = null;
    year = null;
    color = null;
    owner = [];

    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getOwner = (human) => {
        if (human instanceof Human && human.age >= 18) {
            this.owner.push(human);
            human.car.push(this);
        } else {
            console.log(`You can't be a car owner, sorry`);
        }
    };

    getInfoCar = () => {
      console.log(`Brand: ${this.brand},
       Model: ${this.model},
       Year: ${this.year},
       Color: ${this.color}`);
      this.owner.map((info) => {
          return info.getInfoHuman();
      })
    };
}

const kate = new Human('Kate', 28);
const bmw = new Car('BMW', 'X5', 2020, 'black');
bmw.getOwner(kate);
console.log(bmw.getInfoCar());
const yulya = new Human('Yulya', 37);
const toyota = new Car('Toyota', 'Yaris', 2019, 'grey');
toyota.getOwner(yulya);
console.log(toyota.getInfoCar());
const andrii = new Human('Andrii', 59);
const audi = new Car('Audi', 'A6', 2021, 'black');
audi.getOwner(andrii);
console.log(audi.getInfoCar());


