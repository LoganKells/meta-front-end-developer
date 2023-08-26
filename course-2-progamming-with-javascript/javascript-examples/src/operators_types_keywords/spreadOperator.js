// Spread operator syntax ... unpacks objects.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// The spread operator allows you to pass all
//    iterable Object elements into a function without
//    having to type them all individually. Arrays, strings, etc.

console.log("----------- 1 -----------")
let top3 = [
    'The Colosseum',
    'Trevi Fountain',
    'The Vatican City'
];

// Poor syntax here, not extensible.
console.log("Logging function with poor syntax...")
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3)
}
showItinerary(top3[0], top3[1], top3[2]); // Could use the spread operator here.

// Spread operator improves syntax to pass all array elements as parameters.
console.log("\nSpread operator improves syntax...")
showItinerary(...top3);  // spread operator

console.log("----------- 2 -----------")
// Spread operator only works on iterable Objects.
console.log("TypeError when the spread operator is used with a non-iterable object.")
const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable

console.log("We can convert the object literal to an array that is iterable.")
let d = []
for (let value of Object.keys(obj)) {
    d.push(value);
}
// obj.forEach(value => d.push(value)) // TypeError
const dArray = [...d];  // Using spread operator on an iterable object
console.log(d);
console.log(dArray)

console.log("----------- 3 -----------")
// We can use the spread oeprator to combine iterable objects
const kellysPets = ['dog', 'cat', 'fish'];
const jessiesPets = ['snake', 'rat', 'piglet'];
let allPets = [...kellysPets, ...jessiesPets];
allPets = [...allPets, 'goat']; // adding a new value
console.log(allPets)

const kellysPetsNames = {dog: 'Benny', cat: 'Whisky', fish: 'Nemo'};
const jessiesPetsNames = {snake: 'Silver', rat: 'Barnie', piglet: 'Dave'};
const allPetsNames = {...kellysPetsNames, ...jessiesPetsNames};
console.log(allPetsNames);

// Copy an iterable object literal with the spread operator.
const franksPetsNames = {...kellysPetsNames}
kellysPetsNames.dog = 'Gail' // Change value in the new object literal.
console.log(kellysPetsNames)
console.log(franksPetsNames)

// Spread operator on a String object
console.log("----------- 4 -----------")
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersArr = [...letters];
console.log(lettersArr);

// Spread operator to combine object literals
console.log("----------- 4 -----------")
const oscarWinnersOne = {2018: 'Green Book', 2017: 'The Shape of Water', 2016: 'Moonlight'}
const oscarWinnersTwo = {2021: 'Nomadland', 2020: 'Coda', 2019: 'Parasite'}
/*
Task:
    1. Use the spread operator to combine the two objects
       of Oscar winners into a single object just called
       'oscarWinners'.
    2. Add the 2015 winner, which was called 'Spotlight',
       to 'oscarWinners'. (Be careful, you might need to change
       the const to a let!)
*/
let oscarWinners = {...oscarWinnersOne, ...oscarWinnersTwo};
oscarWinners["2015"] = 'Spotlight';
console.log(oscarWinners);