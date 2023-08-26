const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']
//+44 7876519385

function addInternationalCode(num, index){
    console.log(`${index} +44 ${num}`)
}

console.log("-------------- 1 --------------")
console.log("forEach with named function...")
phoneNumbers.forEach(addInternationalCode)

console.log("-------------- 2 --------------")
console.log("Alternatively we can use an anonymous arrow function...")
phoneNumbers.forEach(
    (value, index, data) => console.log(`${index} +44 ${value}`)
)

console.log("-------------- 3 --------------")
console.log("We can use the .map method, which returns a new array...")
const formatedPhoneNumbers = phoneNumbers.map(
    (value, index, data) =>
        `${index} +44 ${value}`
);
console.log(formatedPhoneNumbers)

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

console.log("-------------- 4 --------------")
console.log("logging map elements")
let data = new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]);
data.forEach(logMapElements);
// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"

// Using thisArg
console.log("-------------- 5 --------------")
console.log("Using thisArg with arrow function causes bug...")
// https://www.h3manth.com/new/blog/2014/thisarg-in-javascript/
// The arrow function syntax DOES NOT work with thisArg.
data.forEach((value, key, map) => {
    console.log(
        this // logs {} object literal
    )
}, data);
// Expected output: {}
// Expected output: {}
// Expected output: {}

console.log("-------------- 6 --------------")
console.log("Using thisArg anonymous function...")
// The standard anonymous function DOES work with thisArg
data.forEach(function (value, key, map) {
    console.log(this.get(key));
}, data); // See thisArg = data
// Expected output: "3"
// Expected output: {}"
// Expected output: undefined"

console.log("-------------- 7 --------------")
console.log("Using thisArg anonymous function...")
let jedi = {
    name: 'yoda',
    height: '66cms',
    mass: '17 kgs'
};
//
Object.keys( jedi ).forEach(function( key ) {

    // |this| now refers to `jedi`

    console.log( this[ key ] );

}, jedi ); // last arg is `thisArg`