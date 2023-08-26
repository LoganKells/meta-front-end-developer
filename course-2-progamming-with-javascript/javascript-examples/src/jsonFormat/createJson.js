// JSON.stringify() will create a JSON string from a
// Javascript object.

const data = {
    firstName: "Logan",
    lastName: "Kells",
    greeting: "Hello",
};

let dataJson = JSON.stringify(data);
console.log(dataJson);