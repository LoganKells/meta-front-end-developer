// In JavaScript, any file with an export is considered a module.

function addTwo(a, b) {
    return a + b;
}

function addThree(a, b, c) {
    return a + b + c;
}

export { addTwo, addThree };
