// Set object
// Uniqe values of any type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

console.log('------------- 1 -------------')
console.log('Use a Set object to get unique list')
const ingredients = [
    'sugar',
    'salt',
    'flour',
    'butter',
    'chocolate',
    'cookies',
    'salt',
    'flour',
]
console.log(ingredients.length)
const uniqueIngredients = new Set(ingredients)
console.log(uniqueIngredients.size)

console.log('------------- 2 -------------')
console.log('Use a Set object to get unique list')
const dates = [
    '2003',
    '2004',
    '2004',
    '2006',
    '2008',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2015',
    '2017',
    '2018',
    '2020',
    '2020',
    '2020',
    '2022',
]
/*
Task:
    1. Use a Set to create an array of dates minus
    the duplicates.
*/
const uniqueDates = new Set(dates)
const uniqueDatesAsArray = Array.from(uniqueDates)
console.log(uniqueDatesAsArray)
