// JSON.stringify() will create a JSON string from a
// Javascript object.

const data = {
    firstName: "Logan",
    lastName: "Kells",
    greeting: "Hello",
};

let dataJson = JSON.stringify(data);
console.log(dataJson);

const dataWithNull = {
    pointA: "null"
}
let dataWithNullJson = JSON.stringify(dataWithNull);
console.log(dataWithNullJson);
let dataWithNullParsed = JSON.parse(dataWithNullJson)
console.log(dataWithNullParsed)