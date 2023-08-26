// storeManager is an Object Literal.
var storeManager = {};
storeManager.movement = 4;
storeManager.socialSkills = 50;
console.log(storeManager.socialSkills);

var storeManagerKeyValue = {
    movement: 4,
    socialSkills: 50,
};
storeManagerKeyValue.health = 100;

console.log(storeManagerKeyValue.socialSkills);
console.log(storeManagerKeyValue.health);

// -----------------------
// Dot notation object implementation
var villain = {}

// WRITE YOUR CODE BELOW THIS LINE
/*
Task:
    I have given you an empty object called villain.
    1. Use dot notation to add 'name', 'age', 'weapon’, ‘aim' and ‘health’
       keys to the object with values from your imagination.
    2. Log out the name and health of your villain.
*/
villain.name = "Mark";
villain.age = 56;
villain.weapon = "sword";
villain.aim = 70;
villain.health = 100;
console.log(`Villain name: ${villain.name} and health: ${villain.health}`);

// -----------------------
// Brackets notation
let castle = {}
let priceKey = 'price';
let colorKey = 'color';
castle[priceKey] = 2_000_000;
castle[colorKey] = 'pink'
console.log(castle[priceKey]);
console.log(castle[colorKey]);

// Cannot use variable name for dot notation.
// Dot notation uses the string itself.
console.log(castle.price);

// -----------------------
// Updating objects
/**
    Task:
    As the function's name suggests, we want to make a change to our
    object. I have added a third parameter called value.

    1. Write code inside the function so that when we call the
       function a new value is assigned to the specified key on
       the object.

    2. Call that function (I have added the value 'Lime Green').
       In the console, you should see the updated color for the
       castle.

       Experiment with different keys and values, for example:
       updateObject(castle, 'price', 4000000).
*/
function updateValue(obj, key, value) {
    // Cannot use dot notation like obj.key because it is actually obj.price.
    obj[key] = value;
}
updateValue(castle, 'price', 3_000_000);
updateValue(castle, 'color', 'Lime Green');
console.log(castle.price);
console.log(castle.color);

/**
Task:
A car rental company has asked you to help them organise
their fleet of vehicles.

1. Create a new object literal and assign it to the
   variable 'hireCar'.

2. Using the dot notation, assign a 'color' property to
   the hireCar object. Its value should be a string
   holding a color of your choice.

3. Using the dot notation, assign an 'isConvertible' property
   to the object and give it a boolean value (true/false)
   of your choice.

4. Use the brackets notation to add a 'number of doors' property.

5. Log out the entire object.
*/
function vehicleFleet() {
    let hireCar = {};
    hireCar.color = 'black';
    hireCar.isConvertible = false;
    hireCar['number of doors'] = 4;
    console.log(hireCar);
    console.log(hireCar['number of doors'])
}
vehicleFleet();

// Copying or Cloning objects
const freelancerDev = {
    name: 'Frankie Freeman',
    daysWorked: 26,
    dayRate: 300,
}
const myFriend = structuredClone(freelancerDev);
console.log(Object.entries(myFriend));
