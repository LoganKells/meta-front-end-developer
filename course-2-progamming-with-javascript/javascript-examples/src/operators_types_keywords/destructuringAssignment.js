// destructuringAssignment.js
// In JavaScript, it's possible to unpack the properties
// from objects into distinct variables using destructuring.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Destructuring Objects
// you can destructure objects on the left-hand side of the assignment.
console.log("------------ 1 ------------")
console.log("A new, independent copy is made from the original array using destructuring syntax:")
let {PI} = Math; // PI variable is a new copy of Math.PI.
console.log(PI); // 3.14
console.log(PI === Math.PI); // true
PI = 1;
console.log(PI === Math.PI); // false

// Another example
const { length } = [3];
console.log(length); // 1

// Binding patterns for destructuring
// In binding patterns, the pattern starts with a
// declaration keyword (var, let, or const).
// Then, each individual property must either be
// bound to a variable or further destructured.
console.log("------------ 2 ------------")
const obj1 = {
    a1: 1,
    b1: {
        c1: 2
    }
};
// Two variables are bound: `a` and `d` as number type.
// b1 is NOT bound
const {
    a1,
    b1: {
        c1: d1
    },
} = obj1;
console.log('a1:', a1);
// console.log('b1:', b1); // ReferenceError: b1 is not defined
console.log('d1:', d1);

console.log("------------ 3 ------------")
// Destructuring with re-assignment pattern
// All variables share the same declaration, so if you want some variables
// to be re-assignable but others to be read-only,
// you may have to destructure twice — once with let, once with const.
const obj = {
    d: 1,
    e: {
        f: 2
    }
};
// d and g are re-assignable
let {
    d,
    e: {
        f: g
    },
} = obj;
console.log('d:', d);
d = 100;
console.log('d:', d);
console.log('obj:', obj);
console.log('g:', g);
g = 100;
console.log('g:', g);

// Destructuring values in an array
console.log("------------ 4 ------------")
let [a, b] = [1, 2, 3, 4, 5];
console.log(a, b);
// You can end a destructuring pattern with a
// rest property ...rest.
// This pattern will store all remaining
// properties of the object or array into a new object or array.
let rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // Array [30, 40, 50]






