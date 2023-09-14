// rest operator packs iterable into object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Object destructuring with rest operator
console.log('------------ 1 ------------')
// The rest operator allows you to take items from an array and
// use them to create a separate sub-array

let top3 = ['The Colosseum', 'Trevi Fountain', 'The Vatican City']
let top7 = [
    'The Colosseum',
    'Trevi Fountain',
    'The Vatican City',
    'Location 4',
    'Location 5',
    'Location 6',
    'Location 7',
]
console.log(
    'The rest operator packs remaining values in a new array remainingValues:'
)
const [first, second, ...remainingValues] = top7
console.log(first)
console.log(second)
// sub array of the remaining items in the top7 array
console.log('remainingValues:', remainingValues)
// Another example of unpacking.
let prices = [46, 89, 35, 79]
const [i1, i2, i3, ...remainingItems] = prices
console.log(i1, i2, i3)
console.log(remainingItems)

console.log('------------ 2 ------------')
// We can use the rest operator for function parameters.
// This is like args in Python.
// Rest operator must be used as the last function parameter.
function addTaxToPrices(taxRate, ...itemPrice) {
    return itemPrice.map((item) => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79)
console.log(shoppingCart)
