// JSON.parse will create a JavaScript object from the JSON code.

const data = '{"greeting": "hello"}'; // JSON is a string
let dataParsed = JSON.parse(data);
dataParsed.greeting = dataParsed['greeting'];
console.log(dataParsed['greeting']);
console.log(dataParsed.greeting);
