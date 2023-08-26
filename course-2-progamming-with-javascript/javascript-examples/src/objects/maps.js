// Maps consist of iterable key-value pairs.
// - Any object can be a key, unlike an object literal which only permits
//   strings or numbers as keys.
// - Keys are unique
// - Insertion order of keys is maintained
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/

console.log("-------------- 1 --------------")
console.log("Defining a map and accessing object keys and values...")
let data = new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]);
console.log(data);
console.log(data.keys());
console.log(data.values());
console.log(data.get('foo'));

console.log("-------------- 2 --------------")

console.log("Using thisArg anonymous function on a Map object...")
// The standard anonymous function DOES work with thisArg
data.forEach(function (value, key, map) {
    console.log(this.get(key));
}, data); // See thisArg = data
// Expected output: "3"
// Expected output: {}"
// Expected output: undefined"

console.log("-------------- 3 --------------")
console.log("We can set new key-value pairs in a Map object...");
const favFilms = new Map();
favFilms.set(1, "Yay");
console.log(favFilms);
console.log(favFilms.get(1));


