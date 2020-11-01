//-------------------------- Task 1
let arrayOfValues = [5, 12, 15, 2, 4, 8],
    arrayOfSquares = [];

for (let i = 0; i < arrayOfValues.length; i++) {
  arrayOfSquares[i] = arrayOfValues[i] ** 2;
}

console.log(arrayOfSquares);

//-------------------------- Task 2
let array = ['sun', 'moon', undefined, 13, 99, 412, 0.8764],
    sum = 0;

for (let value of array) {
  if (typeof value === 'number') {
    sum += value;
  }
}

console.log(sum);

//-------------------------- Task 3
let matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [1, 1, 1, 900000],
]

let sum = 0,
    average = 0,
    amount = 0;

for (let i of matrix) {
  amount += i.length;

  for (let j of i) {
    sum += j;
  }
}

average = sum / amount;

console.log(average);

//-------------------------- Task 4
let arr = [41, 78, 98, 76, 74, 99],
    theGreatest = arr[0];

for (let value of arr) {
  if (theGreatest < value)
    theGreatest = value;
}

console.log(theGreatest);


//-------------------------- Task 5
let arrNumbers = [-14, 24, -89, 43, 0, -1, 412, 4],
    positive = [],
    negative = [];

for (let value of arrNumbers) {
  if (value >= 0) {
    positive.push(value);
  } else {
    negative.push(value);
  }
}

console.log(positive, negative);


//-------------------------- Task 6
let greetingArray = ['привет', 'дорогой', 'как', 'дела?']

greetingArray.reverse();

console.log(greetingArray);


//-------------------------- Task 7
let palindrome = prompt('Enter any word:', 'pop')

if (palindrome === palindrome.split('').reverse().join('')) {
  alert('Это слово палиндром');
} else {
  alert('Not that time!');
}
