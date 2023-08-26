// Javascript prototypes are similar to OOP inheritance.
// The prototype is an object that can have properties to be
// shared by multiple other objects.

// The bird is a prototype
const bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

// The bird object is a prototype for other bird types.
// Similar to a super class and child class.
let eagle1 = Object.create(bird);
console.log("eagle1:", eagle1); // logs "eagle1: {}" without data.

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1:", penguin1);