//------------------- Task 1
let catNames = {
    kitty: 'Risa',
    siam: 'Maks',
    old: 'Kesha'
};

console.log(catNames);

delete catNames.old;

console.log(catNames);

//------------------- Task 2

let person = {
    name: 'Dasha',
    age: '23',
    'pets amount': 2
};

let keyName = 'pets amount';

console.log(keyName in person);

//------------------- Task 3
let study = {
    school: true,
    university: 4,
    work: 'yes' 
};

for(let key in study) {
    console.log(key);
}

for(let key in study) {
    console.log(study[key]);
}

//------------------- Task 4
let obj = {
    'ru pum pu ru rum': ['голубой', 'красный', 'зеленый'],
    'la la la la la': ['blue', 'red', 'green'],
};

console.log(obj['ru pum pu ru rum'][1], obj['la la la la la'][2]);

//------------------- Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
};

let maxSalary = 0;

for(let key in salaries) {
    if(maxSalary < salaries[key]) {
        maxSalary = salaries[key];
    }
}   

console.log(maxSalary);


//------------------- Task 6
let userLogin = prompt('Create login, please:', 'Dasha'),
    userPass = prompt('Create password, please:', 12345678);

let user = {        
        login: userLogin,
        password: userPass,
    };

let login = prompt('Enter login, please:', 'Dasha'),
    password = prompt('Enter password, please:', 12345678);

let successMessage = 'Добро пожаловать!';

if(userLogin === login && userPass === password) {
    alert(successMessage);
    console.log(Object.keys(user));
}

//------------------- Task 7
let persons = [
    {id: 10, name: 'Vasya', age: 28},
    {id: 11, name: 'Kolya', age: 16, parentId: 14},
    {id: 12, name: 'Anna', age: 37},
    {id: 13, name: 'Zoya', age: 9, parentId: 12},
    {id: 14, name: 'Arkadiy', age: 45},
];

for(let value of persons) {
    if(value.age >= 18) {
        value.work = prompt(`${value.name}, enter your work, please`, 'programmer');

        console.log(value);
    } 
}


//------------------- Task 8
let matchResult = prompt('Enter result like 1:1', '7:3');

let numerals = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '0': 'zero',
}

let matchArr = matchResult.split(':');

for(let i = 0; i < matchArr.length; i++) {
    if(matchArr[i] in numerals) {
        matchArr[i] = numerals[matchArr[i]];
    }
}

matchResult = matchArr.join(':');

console.log(matchResult);
