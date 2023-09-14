// Maps are key-value pairs. Any object can be a key, unlike an object which only permits
// strings or numbers as keys.
// Maps consist of iterable key-value pairs.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/

console.log('-------------- 1 --------------')
// .map method
const phoneNumbers = [
    '7876519385',
    '7583958601',
    '715902367',
    '7563829046',
    '7567231983',
]
phoneNumbers.map(function (num) {
    console.log(`+44 ${num}`)
})
