//My Age
const myAge = 20;
//early years
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears)
console.log(laterYears)

//Add earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

//My Name 
let myName = "Astro Rey".toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);