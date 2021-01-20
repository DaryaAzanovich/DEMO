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
            return 'Количество топлива меньше 10!';
        }
    }
}



function BMW(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, seatHeated = false) {
    Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]); // отнаследовать
  
    this.climatControl = true;
    this.seatHeated = seatHeated;
  
    BMW.prototype.isSeatHeated = function() {
      if(seatHeated) {
        seatHeated = !seatHeated;
        return 'Обогрев сидений выключен';
      } else {
        seatHeated = !seatHeated;
        return 'Обогрев сидений включен';
      }
    };
  
}

function Lexus(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, panoramicRoof = true) {
    Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);
  
    this.panoramicRoof = panoramicRoof;
  
    this.isRoofOpen = function() {
      if(panoramicRoof) {
        return 'Крыша открыта';
      } else {
        return 'Крыша закрыта';
      }
    };
  
}


let bmw = new BMW('BMW', 'X5', 2000, 'black', 350, 30, 180, true);
console.log(bmw.getAge(), bmw.isSeatHeated());


const lexus = new Lexus('Lexus', 'arka2', 1987, 'red', 300, 10);
console.log(lexus.getAge(), lexus.isRoofOpen());
