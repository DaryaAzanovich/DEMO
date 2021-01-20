function Car(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;

    this.getFullName = function() {
        return `Full car name: ${this.name} ${this.model}`; 
    }

    this.getAge = function() {
        let currentYear = new Date().getFullYear();
        return `Car age: ${currentYear - this.year}`;
    }
    this.changeColor = function(color) {
        if(this.color === color) {
            return `Авто уже покрашено в цвет '${color}'`;
        } else {
            this.color = color;
            return `Цвет машины изменён на ${color}`;
        }
    }

    this.calculateWay = function(kilometers, fuel) {
        if(fuel < 10) {
            alert('Количество топлива меньше 10!');
        }

        let travelTime = kilometers / this.maxSpeed,
            neededFuel = (kilometers / 100) * this.fuelConsumption,
            refueling = fuel - neededFuel;

        if(refueling < 0) {
            alert(`Нужна дозаправка на ${Math.abs(refueling)} литров!`);
        }

        return `Среднее время в пути: ${travelTime}`;
    }
}



function BMW(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, seatHeated = false) {
    Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);
  
    this.climatControl = true;
    this.seatHeated = seatHeated;
  
    BMW.prototype.isSeatHeated = function() {
      if(this.seatHeated) {
        this.seatHeated = !this.seatHeated;
        return 'Обогрев сидений выключен';
      } else {
        this.seatHeated = !this.seatHeated;
        return 'Обогрев сидений включен';
      }
    };
  
}

function Lexus(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, panoramicRoof = true) {
    Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);
  
    this.panoramicRoof = panoramicRoof;
  
    Lexus.prototype.isRoofOpen = function() {
      if(this.panoramicRoof) {
        return 'Крыша открыта';
      } else {
        return 'Крыша закрыта';
      }
    };
  
}

function Audi(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, capacity = 3) {
    Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);
  
    this.capacity = capacity;
  
    Audi.prototype.catsSpecialPlaceCapacity = function(catsAmount) {
      let unplacedCats = this.capacity - catsAmount;
      
      if(unplacedCats < 0) {
          alert(`Для ${Math.abs(unplacedCats)} котик(a/ов) не будет специального места :(`);
      } else {
          alert('Все котики влезут в специальное место :3');
      }

      return unplacedCats;
    };
  
}


let bmw = new BMW('BMW', 'X5', 2000, 'black', 350, 30, 180, true);
console.group();
console.log(bmw.name,
    bmw.model,
    bmw.year,
    bmw.color,
    bmw.maxSpeed,
    bmw.fuelCapacity,
    bmw.fuelConsumption);
console.log(bmw.getFullName());
console.log(bmw.changeColor('purple'));
console.log(bmw.calculateWay(10, 122));
console.log(bmw.getAge());
console.log(bmw.isSeatHeated());
console.groupEnd();


const lexus = new Lexus('Lexus', 'arka2', 1987, 'red', 300, 10);
console.group();
console.log(lexus.name,
    lexus.model,
    lexus.year,
    lexus.color,
    lexus.maxSpeed,
    lexus.fuelCapacity,
    lexus.fuelConsumption);
console.log(lexus.panoramicRoof);
console.log(lexus.getFullName());
console.log(lexus.changeColor('purple'));
console.log(lexus.calculateWay(10, 3));
console.log(lexus.getAge());
console.log(lexus.isRoofOpen());
console.groupEnd();

const audi = new Audi('Audi', 'xp-12', 2015, 'blue', 24, 7);
console.group();
console.log(audi.name,
    audi.model,
    audi.year,
    audi.color,
    audi.maxSpeed,
    audi.fuelCapacity,
    audi.fuelConsumption);
console.log(audi.capacity);
console.log(audi.getFullName());
console.log(audi.changeColor('purple'));
console.log(audi.calculateWay(1000, 122));
console.log(audi.getAge());
console.log(audi.catsSpecialPlaceCapacity(2));
console.groupEnd();

//------------------------- ES6 ------------------------
class Car {
    constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;      
    }

    getFullName() {
        return `Full car name: ${this.name} ${this.model}`; 
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        return `Car age: ${currentYear - this.year}`;
    }
    changeColor(color) {
        if(this.color === color) {
            return `Авто уже покрашено в цвет '${color}'`;
        } else {
            this.color = color;
            return `Цвет машины изменён на ${color}`;
        }
    }

    calculateWay(kilometers, fuel) {
        if(fuel < 10) {
            alert('Количество топлива меньше 10!');
        }

        let travelTime = kilometers / this.maxSpeed,
            neededFuel = (kilometers / 100) * this.fuelConsumption,
            refueling = fuel - neededFuel;

        if(refueling < 0) {
            alert(`Нужна дозаправка на ${Math.abs(refueling)} литров!`);
        }

        return `Среднее время в пути: ${travelTime}`;
    }
}

class BMW extends Car {
    constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, seatHeated = false) {
        super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
        
        this.seatHeated = seatHeated;
        this.climatControl = true;
    }  
    

    isSeatHeated() {
      if(this.seatHeated) {
        this.seatHeated = !this.seatHeated;
        return 'Обогрев сидений выключен';
      } else {
        this.seatHeated = !this.seatHeated;
        return 'Обогрев сидений включен';
      }
    };
  
}

class Lexus extends Car {
    constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, panoramicRoof = true) {
        super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
        
        this.panoramicRoof = panoramicRoof;
    }  
  
    isRoofOpen() {
      if(this.panoramicRoof) {
        return 'Крыша открыта';
      } else {
        return 'Крыша закрыта';
      }
    }
  
}

class Audi extends Car {
    constructor(name, model, year, color,  maxSpeed, capacity, fuelCapacity, fuelConsumption) {
        super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);

        this.capacity = capacity;
    }
    
  
    catsSpecialPlaceCapacity(catsAmount) {
      let unplacedCats = this.capacity - catsAmount;
      
      if(unplacedCats < 0) {
          alert(`Для ${Math.abs(unplacedCats)} котик(a/ов) не будет специального места :(`);
      } else {
          alert('Все котики влезут в специальное место :3');
      }

      return Math.abs(unplacedCats);
    };
  
}


let bmw = new BMW('BMW', 'X5', 2000, 'black', 350, 30, 180, true);
console.log(bmw.getAge(), bmw.isSeatHeated());


const lexus = new Lexus('Lexus', 'arka2', 1987, 'red', 300, 10);
console.log(lexus.calculateWay(580, 50), lexus.isRoofOpen());

const audi = new Audi('Audi', 'xp-12', 2015, 'blue', 300, 10);
console.log(audi.getFullName(580, 50), audi.catsSpecialPlaceCapacity(11));
