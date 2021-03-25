/*
let js = "amazing";
//console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstname = 'matilda';

console.log(firstname);
console.log(firstname);
console.log(firstname);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';
console.log(myFirstJob);

let country = 4000000;
let continetn = 17000000000;
let population = 405005030430;
console.log(country)
console.log(continetn)
console.log(population)
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let isIsland = false;
console.log(typeof isIsland);
let language;
console.log(isIsland);
let population;
console.log(population);
let country;
console.log(country);


let age = 30;
age = 31;
const birthYear = 1991;
//birthYear = 1990;

//const job;
var job = 'programmer';
job = 'teacher';

lastName = 'Markovic';
console.log(lastName);


let language = 'Hrvatski';
//console.log(language);
language = 'Srpski';
console.log(language);


// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageDomagoj = now - 2018;
console.log(ageJonas, ageDomagoj);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3= 2 * 2 * 2

const firstName = 'Domagoj';
const lastName = 'Marković';
console.log(firstName + ' ' + lastName);

//assingment operators
let x = 10 + 5; // 15
x += 10; // x = x +10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--;
console.log(x);


// Comparison operators
console.log(ageJonas > ageDomagoj); // >,<, <=,>=
console.log(ageDomagoj >= 18);

const isFullAge = ageDomagoj >= 18;

console.log(now - 1991 > now - 2018);

const stan = 4000000;
const polaStan = stan / 2;
console.log(polaStan);
let hrvatska = 4000000;
hrvatska++;
console.log(typeof hrvatska);

const finland = 6000000;
console.log(typeof finland > hrvatska);
const average = 33000000;
console.log(typeof hrvatska < average);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(typeof description);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x= 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const marksMass = 78;
const marksHight = 1.69;
const johnMass = 92;
const johnHight = 1.95;

const marksMass = 95;
const marksHight = 1.88;
const johnMass = 85;
const johnHight = 1.76;

const marksBmi = marksMass / (marksHight * marksHight);
const johnBmi = johnMass / (johnHight * johnHight);
console.log(marksBmi);
console.log(johnBmi);
const marksHigherBmi = marksBmi > johnBmi;
console.log(marksHigherBmi);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regukar string...`);

console.log('string \n\
multiple \n\
lines');

console.log(`string
miltiline
lines`);

console.log(`Portugal is in Europe, and its 11 million people speak portuguese`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const portugalPopulation = 10280000;

if (portugalPopulation > 33000000) {
    console.log(`Portugal's population is above average`);
} else {
    const populationBelove = 33000000 - portugalPopulation;
    console.log(`Portugal's population is ${populationBelove} million belove average.`)
}

const marksMass = 78;
const marksHight = 1.69;
const johnMass = 92;
const johnHight = 1.95;

const marksMass = 95;
const marksHight = 1.88;
const johnMass = 85;
const johnHight = 1.76;

const marksBmi = marksMass / (marksHight * marksHight);
const johnBmi = johnMass / (johnHight * johnHight);


if (marksBmi > johnBmi) {
    console.log(`Mark's BMI is higher than John's.`);
} else {
    console.log(`John's BIM is ${`(27.44)`} higher than Mark's.`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');


let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it akk ;)");
} else {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('yey height is defined');
} else {
    console.log('height is undefined');
}

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("Whats yout favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
}
else if (favourite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('why not  23');

const numNeighbours = Number(prompt('How many neighbours countries does your contry have?'));

if (numNeighbours === 1) { console.log('only 1 border'); }
else if (numNeighbours > 1) { console.log('More than one border'); }
else {
    console.log('no borders');
}

const hasDriversLicenses = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicenses && hasGoodVision);
console.log(hasDriversLicenses || hasGoodVision);
console.log(!hasDriversLicenses);


//if (hasDriversLicenses && hasGoodVision) {
//  console.log('Sarah is able to drive!');
//} else {
//  console.log('Someone else should drive...');
//}


const isTired = false; // C
console.log(hasDriversLicenses && hasGoodVision && isTired);

if (hasDriversLicenses && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



const population = 40;
const language = 'english';
const isIsladnd = true;
const country = 'kanada';

if (population < 50 && language === 'english' && !isIsladnd) {
    console.log('should live in this country');
} else {
    console.log(`${country} does not meet your criterias`);
}

const dolphinsAverage = (96 + 108 + 89) / 3;
console.log(dolphinsAverage);
const koalasAverage = (88 + 91 + 110) / 3;
console.log(koalasAverage);
if (dolphinsAverage > koalasAverage) {
    console.log('Dholpines wins a thropy');
} else {
    console.log('koalas wins thropy');
}

// bonus 1
const dolphinsAverage = (97 + 112 + 80) / 3;
console.log(dolphinsAverage);
const koalasAverage = (109 + 95 + 50) / 3;
console.log(koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('Dholpines wins a thropy');
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log('koalas wins thropy');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('bouth wins a hđtrophy');
} else {
    console.log('no one wins thropy');
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'whensday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
}


const day = 'thursday';

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');
} else if (day === 'tuesday') {
    console.log('pripare theory videos');
} else if (day === 'whensday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('nota a valid day');
}


const language = 'hrvatski';

switch (language) {
    case 'chinese or mandarin':
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd palce in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'arabic':
        console.log('5th msot spoken language');
        break;
    default:
        console.log('great language too');
}


3 + 4

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`i'm ${2037 - 1997} years old ${me}`);


const age = 34;
age >= 18 ? console.log('i like to drink wine ') :
  console.log('i like to drink water ');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);


const population = 5;
population >= 33 ? console.log(`Portugal's population is above average`) : console.log(`Portugal's population is belove average`);


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);
*/


























