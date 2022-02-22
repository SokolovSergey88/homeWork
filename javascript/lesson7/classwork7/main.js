// 1   - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, manufacturer, productionYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
      console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    };
    this.changeYear = function (newValue) {
      console.log(this.productionYear = newValue);
    };
    this.addDriver = function (driver) {
       this.driver = driver;
    };
}

let newCar = new Cars('citroen', 'France', 2020, 270, 2.0);
console.log(newCar);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(30);
newCar.changeYear(2016);
newCar.addDriver('Ivan');




// 2   - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class  Cars2 {

    constructor(model, manufacturer, productionYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }
    changeYear(newValue) {
        console.log(this.productionYear = newValue);
    }
    addDriver(driver) {
        this.driver = driver;
    }
}


let car2 = new Cars2('citroen', 'France', 2020, 270, 2.0);
car2.drive();
car2.info();
car2.increaseMaxSpeed(100);
car2.changeYear(2022);
car2.addDriver('new driver');
console.log(car2);


// 3 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Zolushka {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

const zolushkaArray = [
    new Zolushka('Katia', 18, 32),
    new Zolushka('Olya', 19, 32.5),
    new Zolushka('Zina', 20, 33),
    new Zolushka('Sveta', 21, 33.5),
    new Zolushka('Toma', 22, 34),
    new Zolushka('Galya', 23, 34.5),
    new Zolushka('Ira', 24, 35),
    new Zolushka('Inna', 25, 35.5),
    new Zolushka('Darya', 26,36),
    new Zolushka('Sofa', 27, 36.5)
];

class Prince {

    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

}

const prince = new Prince('Goga', 101, 35);

const family = (zolushkaArray, prince) => {
    for (const item of zolushkaArray) {
        if (item.footSize === prince.foundShoe) {
            console.log(`Золушка найдена! ее зовут ${item.name}`);
        }
    }
}

family(zolushkaArray, prince);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const zolushka = zolushkaArray.find(item => item.footSize === prince.foundShoe);
console.log(zolushka);

















