//--------------------------- Task 1 +++
/*const LIMIT = 350,
      TAX_RATES = 0.2,
      PHONE_PRICE = 190,
      ACCESSORIZE = 50;

function calcTaxedPrice(purchase, tax) {
  return purchase + purchase * tax;
}

function getCashFormat(cash) {
  return '$' + cash.toFixed(2);
}

function calcCostPrice(limit, phonePrice, accessorizePrice) {
  let spendingLimit = limit;
  limit -= phonePrice;
  let i = 0;

  while(limit > 0) {  
    if(limit - accessorizePrice > 0) {
      limit -= accessorizePrice;
      i++;
    } else {
      return spendingLimit - limit;
    }  
  }
}

let score = +prompt('Лунный дракон, сколько золотишка в вашей пещере:', 800),
    costPrice = 0,
    taxedPrice = 0;

while(score > 0) {
  costPrice = calcCostPrice(LIMIT, PHONE_PRICE, ACCESSORIZE);
  taxedPrice = calcTaxedPrice(costPrice, TAX_RATES);

  console.log('Стоимость вашего заказа:', getCashFormat(taxedPrice));
  
  score -= taxedPrice;

  if (score < 0) {
    console.log('CANCELED: У вас недостаточно средств для покупки');
  } else {
    console.log('Поздравляем с покупкой! Остаток на счёте:', getCashFormat(score));        
  }
}*/

//--------------------------- Task 2 +++
/*let number = +prompt('Enter array size', 5),
    coeff = +prompt('Enter coefficient', 2);

function createArrays(size, coef) {
  let arrBefore = [],
      arrAfter = [];
  
  for(let i = 0; i < size; i++) {
    arrBefore.push(Math.random().toFixed(2) * 100);
  }

  for(let i = 0; i < size; i++) {
    arrAfter.push(arrBefore[i] - coef);
  }

  return {arrBefore, arrAfter};
}

console.log(createArrays(number, coeff));*/

//--------------------------- Task 3 +++
/*let appeal = 'Спешим поздравить вас сo всесмирным днём любви к котикам!';
let from = +prompt('Введите индекс "от":', 4),
    to = prompt('Введите индекс "до":', 8),
    result;

do {
  result = +prompt('Вы хотите получить эту подстроку или вырезать её\n1 - получить;\n2 - вырезать.');
} while(result !== 1 && result !== 2)

function cutString(str, from, to, res) {
  if(to !== null) {
    return (res === 1) ? str.substring(from, +to) : str.replace(str.substring(from, +to), '');
  }
  return (res === 1) ? str.substring(from) : str.replace(str.substring(from), '');
}

console.log(cutString(appeal, from, to, result));*/

//--------------------------- Task 4 +++
/*let family = {
  amount: 5,
  familyMembers: [
      {name: 'Borya', age: 15},
      {name: 'Tolya', age: 54},
      {name: 'Anjela', age: 45},
      {name: 'Snejana', age: 14},
      {name: 'Gavriil', age: 24},
  ],
  findTheOldest : function() {
    let age = 0;
    let person;
  
    for(let value of this.familyMembers)
    {
      if(age < value.age) {
        age = value.age; 
        person = value.name;
      }
    }
    return this.oldMan = person;
  }
};

console.log(family.findTheOldest());
console.log(family);*/

//--------------------------- Task 5 +++
/*let num = +prompt('Какое количество ступенек ты хочешь?', 5);

function steps(number) {
  let stairs = '';
  let space = ' ',
      hashtag = '#';

  for(let i = 1; i <= number; i++) {
    let str = '\'' + hashtag.repeat(i) + space.repeat(number - i) + '\'\n';
    stairs += str;
  }

  return stairs;
}

console.log(steps(num));*/

//--------------------------- Task 6 +++
/*const _if = (isTrue, func1, func2) => isTrue ? func1() : func2();

let func1 = () => 'func1',
    func2 = () => 'func2';

console.log(_if(true, func1, func2));*/

//--------------------------- Task 7 +++
/*let userName = prompt('Enter your name:', 'Alice');

const hello = (name) => {
  return ((name !== null && name !== '') ? 
  ('Hello, ' + name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'Hello, World!');
}

console.log(hello(userName));*/

//--------------------------- Task 8 +++
/*let strip = +prompt('Введите количество квадратиков вправо:', 3),
    verticalStrip = +prompt('Введите количество квадратиков вниз:', 3);

function splitChocolate(n, m) {
  if(typeof n === 'number' && typeof m === 'number' && n > 0 && m > 0) {
    return ((n - 1) * m + (m - 1));
  }
  return 0;
}

console.log(splitChocolate(strip, verticalStrip));*/
//--------------------------- Task 9
const ageHandicapArr =[prompt('Enter list of age & handicap:', '[[18, 20],[45, 2]]')],
      westernSuburbs = {
        membership: ['Senior ', 'Open'],
        handicap: [-2, 26],
        minAge: 55,
        minHandicap: 7, 
      }

let arr = Array.of(ageHandicapArr);

console.log(ageHandicapArr);

function findCategory() {

}

//--------------------------- Task 10 +++
/*let a = +prompt('First number:', 6),
    b = +prompt('Second number:', 7);

const interval = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  
  if(min === max) {
    return min;
  }

  return (max + min) / 2 * (max - min + 1);
}

console.log(interval(a, b));*/

//--------------------------- Task 11 +++
/*const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
      't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

let word;

do {
  word = prompt('Enter any word:', 'love').toLowerCase();
} while(word === '')

function lettersSum(word) {
  let sum = 0;

  for(let i = 0; i < word.length; i++) {
    sum += alphabet.indexOf(word[i]) + 1;
  }
  return sum;
}

console.log(lettersSum(word));*/

//--------------------------- Task 12 +++
/*const isTriangle = (a, b, c) => (a + b > c && a + c > b && c + b > a);

console.log(isTriangle(3, 6, 4));*/
