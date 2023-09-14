// .filter method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log('------------- 1 -------------')
const phoneNumbers = [
    '7876519385',
    '758395860',
    '715902367',
    '7563829046',
    '7567231983',
]

console.log('Validated phone numbers')
let validatedPhoneNumbers = phoneNumbers.filter((num) => num.length === 10)
console.log(validatedPhoneNumbers)

console.log('Validated phone number with area code')
validatedPhoneNumbers = validatedPhoneNumbers.map((num) => `+44 ${num}`)
console.log(validatedPhoneNumbers)

console.log('------------- 2 -------------')
const kmWalked = [
    15.5256, 48.7884, 31.5453, 24.7295, 35.9073, 26.2654, 21.3653, 10.8763,
    16.3526, 37.9873, 14.8647, 32.9367, 27.0643, 2.2347, 4.0987,
]

/**
Task:

    .forEach()
    1. Use the .forEach() method to iterate over the
       array and reduce each element to just 2 decimal
       places. You can do that using a method we have
       seen before called toFixed(). Push the modified
       element to a new array.

    .map()
    2. Now refactor your code to use the .map method.
       You should no longer need to use the .push()
       method or declare an empty array.

    .filter()
    3. Use the filter method to:
       - Remove any number greater than 40.
       - Remove any number less than 3.
*/
console.log('2.1 ------)')
const kmWalkedFormated1 = []
kmWalked.forEach((value) => kmWalkedFormated1.push(value.toFixed(2)))
console.log(kmWalkedFormated1)

console.log('2.2 ------)')
const kmWalkedFormated2 = kmWalked.map((value) => value.toFixed(2))
console.log(kmWalkedFormated2)

console.log('2.3 -------')
const kmWalkedFormated3 = kmWalked.filter((value) => value < 40 && value > 3)
console.log(kmWalkedFormated3)
