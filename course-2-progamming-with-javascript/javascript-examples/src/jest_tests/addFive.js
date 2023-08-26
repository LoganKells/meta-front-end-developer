function addFive(val) {
    return val + 5;
}

// module.exports = addFive;  // For ES6 but I'm using https://babeljs.io/docs/babel-plugin-transform-modules-commonjs
export { addFive };