"use strict"
//------------------------- Task 1
let a = 4
let b = 3

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);


//------------------------- Task 2
let sex,
    width = 145.25,
    catName = 'Creemy';

console.log(`Variable: sex have type => ${typeof sex}`);
console.log(`Variable: width have type => ${typeof width}`);
console.log(`Variable: catName have type => ${typeof catName}`);


//------------------------- Task 3
let house = 150,
    floor = 8;

console.log(house.toString() + floor.toString());


//------------------------- Task 4
let currentUserName,
    currentUserAge;

currentUserName = prompt('Enter your name:', 'User');
currentUserAge = prompt('Enter your age:', 25);

console.log(currentUserName, currentUserAge);


//------------------------- Task 5
let beginNum,
    add,
    subtract,
    multiply,
    divide,
    result,
    formula;

beginNum = +prompt('Enter any number:', 1);
add = +prompt('Add:', 7);
subtract = +prompt('Subtract:', 3);
multiply = +prompt('Multiply:', 4);
divide = +prompt('Divide:', 5);

result = (beginNum + add - subtract) * multiply / divide;
formula = `(${beginNum} + ${add} - ${subtract}) * ${multiply} / ${divide} = ${result}`;

alert(formula);


//------------------------- Task 6
let userAge;

userAge = +prompt('Enter your age:', '16');

if (userAge > 18) {
    console.log('Попей пивка');
} else if (userAge === 18) {
    console.log('Попей пивка');
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else if(userAge >= 16 && userAge < 18) {
    console.log('Пей колу');
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else {
    console.log('Пей колу');
}



//------------------------- Task 7
for(let i = 1; i <= 20; i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}


//------------------------- Task 8
let nameQuestion = 'Привет, родимый! Как тебя зовут?',
    moodQuestion,
    lunchQuestion = 'Чем потчевал сегодня барин?',
    byeAnswer = 'К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....',
    name,    
    mood,
    lunch,
    bye;

name = prompt(nameQuestion, 'Феликс Александр Третий');
moodQuestion = `Как ${name} Ваши дела?`;
mood = prompt(moodQuestion, 'Спасибо, хорошо :3');
lunch = prompt(lunchQuestion, 'Замур-р-рчательные суши!');
bye = prompt(byeAnswer, 'Счастливо оставаться, я - на Мальдивы!');

let dash = '- ';

console.group();

console.log(dash, nameQuestion);
console.log(dash, name);
console.log(dash, moodQuestion);
console.log(dash, mood);
console.log(dash, lunchQuestion);
console.log(dash, lunch);
console.log(dash, byeAnswer);
console.log(dash, bye);

console.groupEnd();


//------------------------- Task 9
let intervalBegin,
    intervalEnd;

intervalBegin = +prompt('Enter beginning of the interval:', 0);
intervalEnd = +prompt('Enter end of the interval:', 10);

for(let i = intervalBegin; i <= intervalEnd; i++) {
  if(i % 5 === 0 || i % 2 === 0) {
    console.log(i);
  }
}


//------------------------- Task 10
let enteredValue;

enteredValue = +prompt('Enter any number (not 0):', 1);

(enteredValue % 3 === 0 && enteredValue % 5 === 0) ? console.log('FfffzzzBbbzzzz') :
(enteredValue % 3 === 0) ? console.log('Bbbzzzz') : 
(enteredValue % 5 === 0) ? console.log('Ffffzzz') : console.log('Число не делится ни на 5, ни на 3');

// Another solution
let value;

value = +prompt('Enter any number (not 0):', 1);

if(value % 3 === 0 && value % 5 === 0) {
    console.log('FfffzzzBbbzzzz');
} else if(value % 3 === 0) {
    console.log('Bbbzzzz')
} else if (value % 5 === 0) {
    console.log('Ffffzzz');
} 
